import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./projects.css";

const Projects = () => {
    const [projects] = useState([
        {
            title: "Portfolio Website",
            date: "May 2025",
            description: "A responsive personal portfolio built using React, Node.js, and Express.",
            position: "left",
            image: "https://res.cloudinary.com/diyl4omcs/image/upload/v1750332631/Screenshot_2025-06-19_165607_trrswx.png",
            github: "https://github.com/Sanju-Burman/portfolioMe/tree/main/my-portfolio-2025/frontend",
            deploy: "#",
            techStack: ["React", "Node.js", "Express", "MongoDB", "CSS3"]
        },
        {
            title: "Destination Recommender",
            date: "April 2025",
            description: "A platform helping travelers discover ideal destinations based on unique preferences like interests, travel style, and budget.",
            position: "right",
            image: "https://res.cloudinary.com/diyl4omcs/image/upload/v1750332631/Screenshot_2025-06-19_165713_fypid6.png",
            github: "https://github.com/Sanju-Burman/happy-yatra",
            deploy: "https://happyyatra.netlify.app/",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Axios"]
        },
        {
            title: "Local Democracy Engagement",
            date: "February 2025",
            description: "A web app for community voting, logistics, news, and user profiles using Firebase Realtime Database.",
            position: "left",
            image: "https://res.cloudinary.com/diyl4omcs/image/upload/v1750332634/Screenshot_2025-06-19_165742_zhm3m4.png",
            github: "https://github.com/Sanju-Burman/Local-Democracy-Engagement-Platform",
            deploy: "https://neighbourgov.netlify.app/",
            techStack: ["React", "Vite", "Firebase"]
        }
    ]);

    return (
        <div className="projects-body section" id="projects">
            <h2 className="heading">Projects</h2>
            <div className="projects-timeline">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`timeline-container ${project.position}`}
                    >
                        <div className="text-box">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h2>{project.title}</h2>
                            <small>{project.date}</small>
                            <span>{project.description}</span>

                            <div className="tech-stack">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="tech-item">{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                                    <FaGithub />
                                </a>
                                <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="deploy-link">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
