import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./projects.css";

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            title: "Portfolio Website",
            date: "May 2025",
            description: "A responsive personal portfolio built using React, Node.js, and Express.",
            position: "left",
            image: "https://via.placeholder.com/600x300?text=Portfolio+Website",
            github: "https://github.com/Sanju-Burman/portfolioMe/tree/main/my-portfolio-2025/frontend",
            deploy: "#"
        },
        {
            title: "Destination Recommender",
            date: "April 2025",
            description: "A personalized platform helping travelers discover their ideal travel destinations based on unique preferences like interests, travel style, budget, and past travel history. This project solves the problem of overwhelming choices by offering smart, tailored suggestions — enhancing trip planning and discovery.",
            position: "right",
            image: "https://via.placeholder.com/600x300?text=Destination+Recommender",
            github: "https://github.com/Sanju-Burman/happy-yatra",
            deploy: "https://happyyatra.netlify.app/"
        },
        {
            title: "Local Democracy Engagement",
            date: "February 2025",
            description: "A modern, responsive web application designed to facilitate community voting, logistics management, news updates, and user profiles. Built with React, Vite, Firebase Realtime Database, and Chart.js, this platform ensures seamless interaction for both voters and administrators.",
            position: "left",
            image: "https://via.placeholder.com/600x300?text=E-Commerce+Analytics",
            github: "https://github.com/Sanju-Burman/Local-Democracy-Engagement-Platform",
            deploy: "https://neighbourgov.netlify.app/"
        }
        // {
        //     title: "Task Manager",
        //     date: "January 2025",
        //     description: "JWT-authenticated app with user roles and notifications.",
        //     position: "right",
        //     image: "https://via.placeholder.com/600x300?text=Task+Manager",
        //     github: "https://github.com/Sanju-Burman/Loan-Application-System",
        //     deploy: "https://taskmanager.io"
        // },
    ]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/api/projects")
    //         .then(res => res.json())
    //         .then(data => setProjects(data))
    //         .catch(err => console.error("Error fetching projects:", err));
    // }, []);

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
