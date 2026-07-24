import { FaGithub } from "react-icons/fa";
import "./Projects.css";
import { useFetch } from '../../hooks/useFetch';
import { portfolioApi } from '../../api/portfolio';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const fallbackProjects = [
    {
        title: "Happy Yatra — Destination Recommendation Platform",
        date: "April 2025",
        description: [
            "Engineered a full-stack travel recommendation engine achieving 90% personalized destination-match accuracy using a collaborative filtering approach.",
            "Integrated stateless JWT authentication with refresh-token rotation, securing all protected API routes for over 5,000+ active sessions.",
            "Built a fully responsive React UI with dynamic filtering, improving measured user engagement by 25% and reducing bounce rate by 18% over the static prototype."
        ],
        image: "https://res.cloudinary.com/diyl4omcs/image/upload/v1750332631/Screenshot_2025-06-19_165713_fypid6.png",
        github: "https://github.com/Sanju-Burman/happy-yatra",
        deploy: "https://happyyatra.netlify.app/",
        techStack: ["Node.js", "Express.js", "React.js", "MongoDB", "JWT", "REST API"]
    },
    {
        title: "NeighbourGov — Local Democracy Engagement Platform",
        date: "February 2025",
        description: [
            "Developed a civic-tech platform that auto-summarizes local legislation in plain language, improving resident comprehension by 40% among 2,000+ pilot users.",
            "Implemented Firebase Authentication and Firestore for real-time, secure data management capable of handling 500+ concurrent connections with multi-role access control.",
            "Designed interactive voting and discussion modules that increased community participation by 30% in pilot studies."
        ],
        image: "https://res.cloudinary.com/diyl4omcs/image/upload/v1750332634/Screenshot_2025-06-19_165742_zhm3m4.png",
        github: "https://github.com/Sanju-Burman/Local-Democracy-Engagement-Platform",
        deploy: "https://neighbourgov.netlify.app/",
        techStack: ["React.js", "Firebase", "JavaScript", "HTML5", "CSS3"]
    },
    {
        title: "Portfolio Website",
        date: "May 2025",
        description: ["A responsive personal portfolio built using React, Node.js, and Express, featuring scroll reveals and galaxy-themed glassmorphism UI."],
        image: "https://res.cloudinary.com/diyl4omcs/image/upload/v1750332631/Screenshot_2025-06-19_165607_trrswx.png",
        github: "https://github.com/Sanju-Burman/portfolioMe/tree/main/my-portfolio-2025/frontend",
        deploy: "#",
        techStack: ["React", "Node.js", "Express", "CSS3"]
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
                {Array.isArray(project.description) ? (
                    <ul className="project-list" style={{ textAlign: 'left', paddingLeft: '1.2rem', marginTop: '1rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                        {project.description.map((desc, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{desc}</li>)}
                    </ul>
                ) : (
                    <span>{project.description}</span>
                )}

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
