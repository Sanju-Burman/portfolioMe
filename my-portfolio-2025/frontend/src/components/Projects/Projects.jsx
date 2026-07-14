import { FaGithub } from "react-icons/fa";
import "./Projects.css";
import { useFetch } from '../../hooks/useFetch';
import { portfolioApi } from '../../api/portfolio';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const fallbackProjects = [
    {
        title: "Portfolio Website",
        date: "May 2025",
        description: "A responsive personal portfolio built using React, Node.js, and Express.",
        image: "https://res.cloudinary.com/diyl4omcs/image/upload/v1750332631/Screenshot_2025-06-19_165607_trrswx.png",
        github: "https://github.com/Sanju-Burman/portfolioMe/tree/main/my-portfolio-2025/frontend",
        deploy: "#",
        techStack: ["React", "Node.js", "Express", "MongoDB", "CSS3"]
    },
    {
        title: "Destination Recommender",
        date: "April 2025",
        description: "A platform helping travelers discover ideal destinations based on unique preferences like interests, travel style, and budget.",
        image: "https://res.cloudinary.com/diyl4omcs/image/upload/v1750332631/Screenshot_2025-06-19_165713_fypid6.png",
        github: "https://github.com/Sanju-Burman/happy-yatra",
        deploy: "https://happyyatra.netlify.app/",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Axios"]
    },
    {
        title: "Local Democracy Engagement",
        date: "February 2025",
        description: "A web app for community voting, logistics, news, and user profiles using Firebase Realtime Database.",
        image: "https://res.cloudinary.com/diyl4omcs/image/upload/v1750332634/Screenshot_2025-06-19_165742_zhm3m4.png",
        github: "https://github.com/Sanju-Burman/Local-Democracy-Engagement-Platform",
        deploy: "https://neighbourgov.netlify.app/",
        techStack: ["React", "Vite", "Firebase"]
    }
];

const ProjectCard = ({ project, index }) => {
    const position = index % 2 === 0 ? "left" : "right";
    const revealRef = useScrollReveal(position);

    return (
        <div className={`timeline-container ${position}`} ref={revealRef}>
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
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                            <FaGithub style={{ verticalAlign: 'middle', marginRight: '4px' }}/> Code
                        </a>
                    )}
                    {project.deploy && (
                        <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="deploy-link">
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const ownerId = import.meta.env.VITE_OWNER_USER_ID;

    const { data: projects, loading } = useFetch(
        () => ownerId ? portfolioApi.fetchProjects(ownerId) : Promise.reject('No VITE_OWNER_USER_ID configured'),
        {
            fallbackData: fallbackProjects,
            immediate: !!ownerId
        }
    );

    if (loading) return <div className="projects-body section" id="projects"><LoadingSpinner /></div>;

    const resolvedProjects = projects || fallbackProjects;

    return (
        <div className="projects-body section" id="projects">
            <h2 className="heading">Projects</h2>
            <div className="projects-timeline">
                {resolvedProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
