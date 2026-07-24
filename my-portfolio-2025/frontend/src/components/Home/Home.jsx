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
    aboutMe: "Full Stack Software Developer with a focus on Java and JavaScript and experience in creating highly available backend services, APIs, and web applications. Excellent skills in designing fault-tolerant systems, engineering payment gateway workflows, and working within a hardware and software ecosystem. Passionate about problem-solving using proper architecture and offline-first databases.",
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
    const resumeLink = about?.resumeLink || fallbackAbout.resumeLink;
    const image = about?.image || profilePic;
    const socials = { ...fallbackAbout.socials, ...about?.socials };

    const revealLeft = useScrollReveal('left');
    const revealRight = useScrollReveal('right');

    return (
        <section className="home-section section" id="home">
            <div className="home-container">
                <div className="home-image-wrapper" ref={revealLeft}>
                    <div className="home-image-ring"></div>
                    <img src={image} alt="Profile" className="home-image" />
                </div>

                <div className="home-content" ref={revealRight}>
                    <h1 className="home-name">Hi, I&apos;m {name}</h1>
                    <p className="home-about">{aboutMe}</p>
                    {resumeLink && (
                        <a
                            href={resumeLink}
                            target='_blank'
                            rel="noopener noreferrer"
                            className="home-resume-btn"
                        >
                            Download Resume
                        </a>
                    )}
                    <div className="home-socials">
                        {socials.linkedin && (
                            <a
                                href={socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="home-social-icon"
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
