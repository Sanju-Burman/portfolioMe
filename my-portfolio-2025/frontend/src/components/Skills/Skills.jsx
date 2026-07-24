import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNpm, FaJava, FaCode } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiMongodb, SiPostman, SiExpress } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import './Skills.css';
import { useFetch } from '../../hooks/useFetch';
import { portfolioApi } from '../../api/portfolio';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const iconMap = {
    "java": <FaJava />,
    "javascript": <FaJs />,
    "typescript": <TbBrandTypescript />,
    "react": <FaReact />,
    "html5": <FaHtml5 />,
    "html": <FaHtml5 />,
    "css3": <FaCss3Alt />,
    "css": <FaCss3Alt />,
    "node.js": <FaNodeJs />,
    "node": <FaNodeJs />,
    "express": <SiExpress />,
    "express.js": <SiExpress />,
    "mongodb": <SiMongodb />,
    "vs code": <BiLogoVisualStudio />,
    "vscode": <BiLogoVisualStudio />,
    "postman": <SiPostman />,
    "git": <FaGitAlt />,
    "npm": <FaNpm />,
};

const getIcon = (name) => {
    return iconMap[name.toLowerCase()] || <FaCode />;
};

const fallbackSkillsData = {
    programmingLanguages: [
        { name: "Java", familiarity: 90 },
        { name: "JavaScript", familiarity: 90 },
        { name: "TypeScript", familiarity: 85 },
        { name: "SQL", familiarity: 85 },
    ],
    backend: [
        { name: "Node.js", familiarity: 90 },
        { name: "Express", familiarity: 90 },
        { name: "REST API", familiarity: 90 },
        { name: "Microservices", familiarity: 80 }
    ],
    frontend: [
        { name: "React", familiarity: 90 },
        { name: "Redux", familiarity: 85 },
        { name: "HTML5", familiarity: 95 },
        { name: "CSS3", familiarity: 90 },
        { name: "QML", familiarity: 75 }
    ],
    databases: [
        { name: "MongoDB", familiarity: 85 },
        { name: "SQLite", familiarity: 85 },
        { name: "MySQL", familiarity: 80 }
    ],
    systems: [
        { name: "Offline-first", familiarity: 90 },
        { name: "Fault-tolerance", familiarity: 85 },
        { name: "MQTT", familiarity: 80 }
    ],
    tools: [
        { name: "Git", familiarity: 90 },
        { name: "GitHub", familiarity: 90 },
        { name: "Postman", familiarity: 85 },
        { name: "Linux", familiarity: 80 },
        { name: "VS Code", familiarity: 95 }
    ]
};

const categories = [
    { key: "programmingLanguages", title: "Languages" },
    { key: "backend", title: "Backend" },
    { key: "frontend", title: "Frontend" },
    { key: "databases", title: "Databases" },
    { key: "systems", title: "Systems & Architecture" },
    { key: "tools", title: "Tools & Platforms" }
];

const SkillCard = ({ cat, items, index }) => {
    const revealRef = useScrollReveal('bottom', index * 100);
    
    return (
        <div className="skill-card" ref={revealRef}>
            <h3 className="skill-category">{cat.title}</h3>
            <div>
                {items.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                        <div className="skill-info">
                            <div className="skill-icon">{getIcon(skill.name)}</div>
                            <span className="text-lg">{skill.name}</span>
                        </div>
                        <div overflow="hidden" className="skill-bar">
                            <div
                                className="skill-bar-fill"
                                style={{ '--target-width': `${skill.familiarity}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function Skills() {
    const ownerId = import.meta.env.VITE_OWNER_USER_ID;

    const { data: skillsData, loading } = useFetch(
        () => ownerId ? portfolioApi.fetchSkills(ownerId) : Promise.reject('No VITE_OWNER_USER_ID configured'),
        {
            fallbackData: fallbackSkillsData,
            immediate: !!ownerId
        }
    );

    if (loading) return <div className="skills section" id="skills"><LoadingSpinner /></div>;

    // Merge backend skills data or use fallback
    const resolvedSkills = skillsData || fallbackSkillsData;

    return (
        <div className="skills section" id="skills">
            <h2 className="heading">My Skills</h2>
            <div className="skills-grid">
                {categories.map((cat, index) => {
                    const items = resolvedSkills[cat.key] || [];
                    if (items.length === 0) return null;

                    return <SkillCard key={index} cat={cat} items={items} index={index} />;
                })}
            </div>
        </div>
    );
}
