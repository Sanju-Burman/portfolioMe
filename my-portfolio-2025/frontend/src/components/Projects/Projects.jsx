import { useState, useEffect } from "react";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaChevronLeft,
    FaChevronRight,
    FaCalendarAlt,
    FaCode,
    FaCheckCircle,
    FaRocket
} from "react-icons/fa";
import "./Projects.css";
import { useFetch } from '../../hooks/useFetch';
import { portfolioApi } from '../../api/portfolio';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const fallbackProjects = [
    {
        title: "Happy Yatra — Destination Recommendation Platform",
        shortTitle: "Happy Yatra",
        category: "Full Stack Travel Engine",
        date: "April 2025",
        icon: "🌴",
        description: [
            "Architected a full-stack destination discovery engine with multi-criteria preference matching across budget, climate, and activity vectors.",
            "Integrated stateless JWT authentication with refresh-token rotation and HTTP-only cookies, securing all protected API endpoints.",
            "Designed a responsive React UI with dynamic client-side filtering, debounced search queries, and Cloudinary media optimization."
        ],
        image: "https://res.cloudinary.com/diyl4omcs/image/upload/v1750332631/Screenshot_2025-06-19_165713_fypid6.png",
        images: [
            "https://res.cloudinary.com/diyl4omcs/image/upload/v1787457353/yatra_image1_tqp8w5.webp",
            "https://res.cloudinary.com/diyl4omcs/image/upload/v1787457353/yatra_image2_lzxsdn.webp",
            "https://res.cloudinary.com/diyl4omcs/image/upload/v1787457353/yatra_image3_fkbhal.webp"
        ],
        github: "https://github.com/Sanju-Burman/happy-yatra",
        deploy: "https://happyyatra.netlify.app/",
        techStack: ["Node.js", "Express.js", "React.js", "MongoDB", "JWT", "REST API"],
        specs: {
            architecture: "MERN Stack Monorepo",
            role: "Lead Full-Stack Developer",
            security: "JWT with Refresh Tokens"
        }
    },
    {
        title: "NeighbourGov — Local Democracy Engagement Platform",
        shortTitle: "NeighbourGov",
        category: "Civic-Tech Platform",
        date: "February 2025",
        icon: "🏛️",
        description: [
            "Developed a civic-tech platform that generates accessible summaries of local legislation with structured community feedback channels.",
            "Implemented multi-role access control (citizens, representatives, moderators) using Firebase Auth and atomic Firestore write batches.",
            "Designed interactive voting modules and real-time discussion boards with optimistic UI updates and live listener synchronization."
        ],
        image: "https://res.cloudinary.com/diyl4omcs/image/upload/v1750332634/Screenshot_2025-06-19_165742_zhm3m4.png",
        images: [
            "https://res.cloudinary.com/diyl4omcs/image/upload/v1750332634/Screenshot_2025-06-19_165742_zhm3m4.png",
            "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1000&q=80"
        ],
        github: "https://github.com/Sanju-Burman/Local-Democracy-Engagement-Platform",
        deploy: "https://neighbourgov.netlify.app/",
        techStack: ["React.js", "Firebase", "JavaScript", "HTML5", "CSS3"],
        specs: {
            architecture: "React + Serverless Firebase",
            role: "Frontend & Integration Dev",
            security: "Firebase Multi-Role Auth"
        }
    },
    {
        title: "Portfolio Website & API Service",
        shortTitle: "Portfolio",
        category: "Full-Stack Web Application",
        date: "May 2025",
        icon: "🌌",
        description: [
            "Engineered a high-performance developer portfolio in React and Vite with dark/light themes and hardware-accelerated animations.",
            "Integrated a hybrid data-fetching architecture using custom React hooks with resilient fallback to static data when API is offline.",
            "Implemented rate-limited Express REST endpoints with input validation middleware and secure CORS policy."
        ],
        image: "https://res.cloudinary.com/diyl4omcs/image/upload/v1750332631/Screenshot_2025-06-19_165607_trrswx.png",
        images: [
            "https://res.cloudinary.com/diyl4omcs/image/upload/v1787456548/portfolio_image1_siknmi.webp",
            "https://res.cloudinary.com/diyl4omcs/image/upload/v1787456548/portfolio_image2_o79nsp.webp",
            "https://res.cloudinary.com/diyl4omcs/image/upload/v1787456547/portfolio_image3_aowrbu.webp"
        ],
        github: "https://github.com/Sanju-Burman/portfolioMe/tree/main/my-portfolio-2025/frontend",
        deploy: "https://portfolio-me-lilac-eta.vercel.app/",
        techStack: ["React", "Node.js", "Express", "CSS3", "Vite"],
        specs: {
            architecture: "Full-Stack MERN Architecture",
            role: "Creator & Designer",
            security: "Rate Limited CORS API"
        }
    }
];

const Projects = () => {
    const ownerId = import.meta.env.VITE_OWNER_USER_ID;

    const { data: projects, loading } = useFetch(
        () => ownerId ? portfolioApi.fetchProjects(ownerId) : Promise.reject('No VITE_OWNER_USER_ID configured'),
        {
            fallbackData: fallbackProjects,
            immediate: !!ownerId
        }
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const selectorRevealRef = useScrollReveal('top');
    const detailsRevealRef = useScrollReveal('bottom');

    const resolvedProjects = (projects && projects.length > 0) ? projects : fallbackProjects;
    const activeProject = resolvedProjects[selectedIndex] || resolvedProjects[0];

    // Normalize images array
    const imageList = (activeProject.images && activeProject.images.length > 0)
        ? activeProject.images
        : [activeProject.image || "https://res.cloudinary.com/diyl4omcs/image/upload/v1750332631/Screenshot_2025-06-19_165607_trrswx.png"];

    // Reset current image index when project changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [selectedIndex]);

    // Auto-cycle image carousel every 5 seconds
    useEffect(() => {
        if (imageList.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [selectedIndex, imageList.length]);

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
    };

    if (loading) {
        return (
            <div className="projects-body section" id="projects">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className="projects-body section" id="projects">
            <h2 className="heading">Featured Projects</h2>
            <p className="projects-subheading">Select a project below to inspect architectural specifications & live demo</p>

            {/* SECTION 1: FIGMA-STYLE CIRCULAR PROJECT SELECTOR */}
            <div className="project-selector-wrapper" ref={selectorRevealRef}>
                <div className="project-selector-container" role="tablist" aria-label="Projects Selection">
                    {resolvedProjects.map((proj, idx) => {
                        const isSelected = idx === selectedIndex;
                        const iconDisplay = proj.icon || (proj.shortTitle ? proj.shortTitle.slice(0, 2).toUpperCase() : `P${idx + 1}`);

                        return (
                            <button
                                key={idx}
                                role="tab"
                                aria-selected={isSelected}
                                className={`figma-selector-btn ${isSelected ? 'active' : ''}`}
                                onClick={() => setSelectedIndex(idx)}
                                title={proj.title}
                                aria-label={`Select ${proj.title}`}
                            >
                                <div className="figma-icon-ring">
                                    <div className="figma-icon-inner">
                                        {proj.image && !proj.icon ? (
                                            <img src={proj.image} alt={proj.title} className="figma-btn-img" />
                                        ) : (
                                            <span className="figma-icon-symbol">{iconDisplay}</span>
                                        )}
                                    </div>
                                </div>
                                <span className="figma-btn-label">
                                    {proj.shortTitle || proj.title.split('—')[0].trim()}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* SECTION 2: SELECTED PROJECT DETAILS (SPLIT VIEW) */}
            <div className="project-details-card" ref={detailsRevealRef}>
                <div className="project-details-grid">

                    {/* LEFT SIDE: IMAGE CAROUSEL */}
                    <div className="carousel-column">
                        <div className="carousel-frame">
                            <img
                                src={imageList[currentImageIndex]}
                                alt={`${activeProject.title} screenshot ${currentImageIndex + 1}`}
                                className="carousel-main-img"
                            />

                            {imageList.length > 1 && (
                                <>
                                    <button
                                        className="carousel-arrow carousel-arrow-left"
                                        onClick={handlePrevImage}
                                        aria-label="Previous Slide"
                                    >
                                        <FaChevronLeft />
                                    </button>
                                    <button
                                        className="carousel-arrow carousel-arrow-right"
                                        onClick={handleNextImage}
                                        aria-label="Next Slide"
                                    >
                                        <FaChevronRight />
                                    </button>
                                </>
                            )}

                            {/* Carousel Indicators / Dots */}
                            {imageList.length > 1 && (
                                <div className="carousel-dots">
                                    {imageList.map((_, dotIdx) => (
                                        <button
                                            key={dotIdx}
                                            className={`carousel-dot ${dotIdx === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => setCurrentImageIndex(dotIdx)}
                                            aria-label={`Go to slide ${dotIdx + 1}`}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Progress bar pulse */}
                            {imageList.length > 1 && (
                                <div className="carousel-progress-bar-container">
                                    <div
                                        key={`${selectedIndex}-${currentImageIndex}`}
                                        className="carousel-progress-bar-fill"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Action Buttons Below Image Section */}
                        <div className="schematic-actions">
                            {activeProject.github && (
                                <a
                                    href={activeProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="schematic-btn btn-github"
                                >
                                    <FaGithub style={{ marginRight: '8px', fontSize: '1.1rem' }} />
                                    Source Code
                                </a>
                            )}
                            {activeProject.deploy && activeProject.deploy !== '#' && (
                                <a
                                    href={activeProject.deploy}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="schematic-btn btn-deploy"
                                >
                                    <FaExternalLinkAlt style={{ marginRight: '8px', fontSize: '0.9rem' }} />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    {/* RIGHT SIDE: OVERVIEW & SCHEMATIC SPECIFICATIONS */}
                    <div className="overview-column">
                        <div className="schematic-header">
                            <span className="schematic-badge">
                                <FaRocket style={{ marginRight: '6px' }} />
                                {activeProject.category || "Featured Work"}
                            </span>
                            <span className="schematic-date">
                                <FaCalendarAlt style={{ marginRight: '5px' }} />
                                {activeProject.date}
                            </span>
                        </div>

                        <h3 className="schematic-title">{activeProject.title}</h3>

                        {/* Specs Grid */}
                        {activeProject.specs && (
                            <div className="schematic-specs-row">
                                {activeProject.specs.architecture && (
                                    <div className="spec-chip">
                                        <span className="spec-chip-label">Architecture</span>
                                        <span className="spec-chip-value">{activeProject.specs.architecture}</span>
                                    </div>
                                )}
                                {activeProject.specs.role && (
                                    <div className="spec-chip">
                                        <span className="spec-chip-label">Role</span>
                                        <span className="spec-chip-value">{activeProject.specs.role}</span>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Overview Description */}
                        <div className="schematic-section">
                            <h4 className="schematic-subtitle">
                                <FaCheckCircle style={{ marginRight: '6px', color: 'var(--accent-color, #64ffda)' }} />
                                Key Highlights & Architecture
                            </h4>
                            {Array.isArray(activeProject.description) ? (
                                <ul className="schematic-list">
                                    {activeProject.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="schematic-paragraph">{activeProject.description}</p>
                            )}
                        </div>

                        {/* Tech Stack */}
                        <div className="schematic-section">
                            <h4 className="schematic-subtitle">
                                <FaCode style={{ marginRight: '6px', color: 'var(--accent-color, #64ffda)' }} />
                                Technologies Utilized
                            </h4>
                            <div className="schematic-tech-grid">
                                {activeProject.techStack && activeProject.techStack.map((tech, i) => (
                                    <span key={i} className="schematic-tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

