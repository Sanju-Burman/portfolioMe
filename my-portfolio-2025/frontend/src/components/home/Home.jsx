import './home.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail,MdPhoneAndroid } from 'react-icons/md';
import profilePic from '../../assets/sanjuPic.png';

const Home = () => {
    return (
        <section className="home-section section" id="home">
            <div className="home-container">
                <div className="home-image-wrapper">
                    <img src={profilePic} alt="Profile" className="home-image" />
                </div>

                <div className="home-content">
                    <h1 className="home-name">Hi, I'm Sanju Burman</h1>
                    <p className="home-about">
                        I'm a passionate Full Stack Developer specializing in building high-quality web
                        applications using React, Node.js, Express, and MongoDB. I love solving real-world
                        problems and transforming ideas into digital reality.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1sAO6Br4GErz6svTdRE7BlqV1Mo6HS-Ml/view?usp=sharing"
                        target='_blank'
                        rel="noopener noreferrer"
                        className="home-resume-btn"
                    >
                        Download Resume
                    </a>
                    <div className="home-socials">
                        <a
                            href="https://www.linkedin.com/in/sanju-burman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="home-social-icon"
                        >
                            <FaLinkedin title="LinkedIn" />
                        </a>
                        <a
                            href="https://github.com/Sanju-Burman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="home-social-icon"
                        >
                            <FaGithub title="GitHub" />
                        </a>
                    </div>
                    <div className="home-contact-info">
                        <p>
                            <MdAlternateEmail style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            <a href="mailto:sanjuburman01@gmail.com">sanjuburman01@gmail.com</a>
                        </p>
                        <p>
                            <MdPhoneAndroid style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            <a href="tel:+918085319797">+91-8085319797</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
