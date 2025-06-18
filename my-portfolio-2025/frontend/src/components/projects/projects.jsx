import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./projects.css";

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            title: "Portfolio Website",
            date: "March 2025",
            description: "A responsive personal portfolio built using React, Node.js, and Express.",
            position: "left",
            image: "https://via.placeholder.com/600x300?text=Portfolio+Website",
            github: "https://github.com/yourusername/portfolio",
            deploy: "https://yourportfolio.com"
        },
        {
            title: "E-Commerce Analytics API",
            date: "February 2025",
            description: "Node.js backend with MongoDB aggregation for sales insights.",
            position: "right",
            image: "https://via.placeholder.com/600x300?text=E-Commerce+Analytics",
            github: "https://github.com/yourusername/ecommerce-api",
            deploy: "https://ecommerce-insights.com"
        },
        {
            title: "Task Manager",
            date: "January 2025",
            description: "JWT-authenticated app with user roles and notifications.",
            position: "left",
            image: "https://via.placeholder.com/600x300?text=Task+Manager",
            github: "https://github.com/yourusername/task-manager",
            deploy: "https://taskmanager.io"
        },
        {
            title: "Destination Recommender",
            date: "April 2025",
            description: "Full-stack project with React survey UI and personalized suggestions.",
            position: "right",
            image: "https://via.placeholder.com/600x300?text=Destination+Recommender",
            github: "https://github.com/yourusername/destination-recommender",
            deploy: "https://recommendme.now.sh"
        }
    ]);

    useEffect(() => {
        fetch("http://localhost:5000/api/projects")
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error("Error fetching projects:", err));
    }, []);

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
