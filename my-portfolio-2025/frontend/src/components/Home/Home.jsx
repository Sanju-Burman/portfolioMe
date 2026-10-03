import './Home.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail, MdPhoneAndroid } from 'react-icons/md';
import profilePic from '../../assets/sanjuPic.png';
import { useFetch } from '../../hooks/useFetch';
import { portfolioApi } from '../../api/portfolio';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const fallbackAbout = {
    name: "Sanju Burman",
    role: "Software Engineer",
    badge: "Software Engineer • Systems & Backend",
    aboutMe: "Software Engineer with 1+ year of production experience engineering fault-tolerant transaction pipelines, hardware-integrated dispensing state machines, and resilient offline-first synchronization systems. Focused on building reliable, idempotent services with Go, Node.js, PostgreSQL, and SQLite.",
    resumeLink: "https://drive.google.com/file/d/1sAO6Br4GErz6svTdRE7BlqV1Mo6HS-Ml/view?usp=sharing",
    image: profilePic,
    socials: {
        linkedin: "https://www.linkedin.com/in/sanju-burman",
        github: "https://github.com/Sanju-Burman",
        email: "sanjuburman01@gmail.com",
        phone: "+91-8085319797"
    }
};

const Home = () => {
    const ownerId = import.meta.env.VITE_OWNER_USER_ID;

    // fetchAbout only if ownerId is defined, otherwise fallback to local mock data immediately
    const { data: about, loading } = useFetch(
        () => ownerId ? portfolioApi.fetchAbout(ownerId) : Promise.reject('No VITE_OWNER_USER_ID configured'),
        {
            fallbackData: fallbackAbout,
            immediate: !!ownerId
        }
    );

    if (loading) return <section className="home-section section" id="home"><LoadingSpinner /></section>;

    const name = about?.name || fallbackAbout.name;
    const aboutMe = about?.aboutMe || fallbackAbout.aboutMe;
    const resumeLink = (about?.resumeLink && !about.resumeLink.includes('view?usp=sharinghttps'))
        ? about.resumeLink
        : fallbackAbout.resumeLink;
    const image = about?.image || profilePic;
    const socials = { ...fallbackAbout.socials, ...about?.socials };
    const badge = fallbackAbout.badge;

    const revealLeft = useScrollReveal('left');
    const revealRight = useScrollReveal('right');

    return (
        <section className="home-section section" id="home">
            <div className="home-container">
                <div className="home-image-wrapper" ref={revealLeft}>
                    <div className="home-image-ring"></div>
                    <img src={image} alt={`Profile photo of ${name}`} className="home-image" />
                </div>

                <div className="home-content" ref={revealRight}>
                    <div className="home-role-badge">{badge}</div>
                    <h1 className="home-name">Hi, I&apos;m <span className="home-name-highlight">{name}</span></h1>
                    <p className="home-about">{aboutMe}</p>
                    
                    <div className="home-actions">
                        <a href="#experience" className="home-btn primary-btn">
                            View Production Work
                        </a>
                        {resumeLink && (
                            <a
                                href={resumeLink}
                                target='_blank'
                                rel="noopener noreferrer"
                                className="home-btn secondary-btn"
                                aria-label="Download Sanju Burman Resume PDF"
                            >
                                Download Resume
                            </a>
                        )}
                    </div>

                    <div className="home-socials" aria-label="Social Profiles">
                        {socials.linkedin && (
                            <a
                                href={socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="home-social-icon"
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedin title="LinkedIn" />
                            </a>
                        )}
                        {socials.github && (
                            <a
                                href={socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="home-social-icon"
                                aria-label="GitHub Profile"
                            >
                                <FaGithub title="GitHub" />
                            </a>
                        )}
                    </div>

                    <div className="home-contact-info">
                        {socials.email && (
                            <p>
                                <MdAlternateEmail style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                <a href={`mailto:${socials.email}`}>{socials.email}</a>
                            </p>
                        )}
                        {socials.phone && (
                            <p>
                                <MdPhoneAndroid style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                <a href={`tel:${socials.phone}`}>{socials.phone}</a>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
