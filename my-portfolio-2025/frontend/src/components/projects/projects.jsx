// import { useEffect, useState } from "react";
import "./projects.css";

const Projects = () => {
    const projects = [
        {
            title: "Portfolio Website",
            date: "March 2025",
            description: "A responsive personal portfolio built using React, Node.js, and Express.",
            position: "left"
        },
        {
            title: "E-Commerce Analytics API",
            date: "February 2025",
            description: "Node.js backend with MongoDB aggregation for sales insights.",
            position: "right"
        },
        {
            title: "Task Manager",
            date: "January 2025",
            description: "JWT-authenticated app with user roles and notifications.",
            position: "left"
        },
        {
            title: "Destination Recommender",
            date: "April 2025",
            description: "Full-stack project with React survey UI and personalized suggestions.",
            position: "right"
        }
    ];
    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/api/projects")
    //         .then(res => res.json())
    //         .then(data => setProjects(data))
    //         .catch(err => console.error("Error fetching projects:", err));
    // }, []);

    return (
        <div className="projects section" id="projects">
            <h2 className="heading">Projects</h2>
            <div className="projects-timeline">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`timeline-container ${project.position}`}
                    >
                        <div className="projects text-box">
                            <h2>{project.title}</h2>
                            <small>{project.date}</small>
                            <span>{project.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
