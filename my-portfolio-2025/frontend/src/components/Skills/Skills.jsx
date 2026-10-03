import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaCode, FaDocker, FaLinux, FaDatabase, FaCreditCard, FaNetworkWired } from "react-icons/fa";
import { TbBrandTypescript, TbBrandGolang } from "react-icons/tb";
import { SiMongodb, SiPostman, SiExpress, SiPostgresql, SiSqlite } from "react-icons/si";
import './Skills.css';
import { useFetch } from '../../hooks/useFetch';
import { portfolioApi } from '../../api/portfolio';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const iconMap = {
    "java": <FaJava />,
    "javascript": <FaJs />,
    "typescript": <TbBrandTypescript />,
    "go": <TbBrandGolang />,
    "golang": <TbBrandGolang />,
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
    "postgresql": <SiPostgresql />,
    "postgres": <SiPostgresql />,
    "sqlite": <SiSqlite />,
    "docker": <FaDocker />,
    "linux": <FaLinux />,
    "sql": <FaDatabase />,
    "payment gateways": <FaCreditCard />,
    "offline-first sync": <FaNetworkWired />,
    "postman": <SiPostman />,
    "git": <FaGitAlt />,
    "git & github": <FaGitAlt />,
};

const getIcon = (name) => {
    return iconMap[name.toLowerCase()] || <FaCode />;
};

const fallbackSkillsData = {
    programmingLanguages: [
        { name: "Go", level: "Intermediate" },
        { name: "JavaScript", level: "Production" },
        { name: "TypeScript", level: "Proficient" },
        { name: "Java", level: "Core / DSA" },
        { name: "SQL", level: "Proficient" },
    ],
    backend: [
        { name: "Node.js", level: "Production" },
        { name: "Express.js", level: "Production" },
        { name: "RESTful APIs", level: "Production" },
        { name: "Payment Gateways", level: "Specialized" },
    ],
    databases: [
        { name: "PostgreSQL", level: "Proficient" },
        { name: "SQLite", level: "Production / WAL" },
        { name: "MongoDB", level: "Proficient" }
    ],
    systems: [
        { name: "Offline-First Sync", level: "Production" },
        { name: "Hardware FSM", level: "Production" },
        { name: "Fault Tolerance", level: "Production" },
        { name: "QML / Embedded UI", level: "Production" }
    ],
    tools: [
        { name: "Docker", level: "Proficient" },
        { name: "Git & GitHub", level: "Production" },
        { name: "Linux / Bash", level: "Proficient" },
        { name: "Postman", level: "Advanced" }
    ],
    frontend: [
        { name: "React", level: "Advanced" },
        { name: "Redux", level: "Proficient" },
        { name: "HTML5 / CSS3", level: "Advanced" }
    ]
};

const categories = [
    { key: "programmingLanguages", title: "Languages" },
    { key: "backend", title: "Backend & APIs" },
    { key: "databases", title: "Databases & Storage" },
    { key: "systems", title: "Systems & Architecture" },
    { key: "tools", title: "DevOps & Infrastructure" },
    { key: "frontend", title: "Frontend & UI" }
];

const SkillCard = ({ cat, items, index }) => {
    const revealRef = useScrollReveal('bottom', index * 80);
    
    return (
        <div className="skill-card" ref={revealRef}>
            <h3 className="skill-category">{cat.title}</h3>
            <div className="skill-items-container">
                {items.map((skill, idx) => {
                    const badgeText = skill.level || (skill.familiarity >= 90 ? "Core" : skill.familiarity >= 85 ? "Advanced" : "Proficient");
                    return (
                        <div key={idx} className="skill-item">
                            <div className="skill-info">
                                <span className="skill-icon">{getIcon(skill.name)}</span>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                            <span className="skill-badge">{badgeText}</span>
                        </div>
                    );
                })}
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

    const resolvedSkills = skillsData || fallbackSkillsData;

    return (
        <div className="skills section" id="skills">
            <h2 className="heading">Technical Skills</h2>
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
