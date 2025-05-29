import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNpm, FaJava } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiMongodb, SiPostman, SiExpress } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import './skills.css'
const skills = [
    {
        category: "Programming Languages",
        items: [
            { name: "Java", icon: <FaJava />, familiarity: 90 },
            { name: "JavaScript", icon: <FaJs />, familiarity: 90 },
            { name: "TypeScript", icon: <TbBrandTypescript />, familiarity: 80 },
        ]
    },
    {
        category: "Frontend",
        items: [
            { name: "React", icon: <FaReact />, familiarity: 85 },
            { name: "HTML5", icon: <FaHtml5 />, familiarity: 95 },
            { name: "CSS3", icon: <FaCss3Alt />, familiarity: 90 }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: <FaNodeJs />, familiarity: 85 },
            { name: "Express", icon: <SiExpress />, familiarity: 80 },
            { name: "MongoDB", icon: <SiMongodb />, familiarity: 75 }
        ]
    },
    {
        category: "Tools",
        items: [
            { name: "VS Code", icon: <BiLogoVisualStudio />, familiarity: 95 },
            { name: "Postman", icon: <SiPostman />, familiarity: 85 },
            { name: "Git", icon: <FaGitAlt />, familiarity: 80 },
            { name: "NPM", icon: <FaNpm />, familiarity: 85 }
        ]
    }
];

export default function Skills() {
    return (
        <div className="skills section" id="skills">
            <h2 className="heading">My Skills</h2>
            <div className="skills-grid">
                {skills.map((group, index) => (
                    <div
                        key={index}
                        className="skill-card"
                    >
                        <h3 className="skill-category">{group.category}</h3>
                        <div>
                            {group.items.map((skill, idx) => (
                                <div key={idx} className="skill-item">
                                    <div className="skill-info">
                                        <div className="skill-icon">{skill.icon}</div>
                                        <span className="text-lg">{skill.name}</span>
                                    </div>
                                    <div overflow="hidden" className="skill-bar">
                                        <div
                                            className="skill-bar-fill"
                                            style={{ width: `${skill.familiarity}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
