import './home.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
import profilePic from '../../assets/sanjuPic.png';
import resume from '../../assets/Sanju_Burman.pdf';

const Home = () => {
    return (
        <section className="home section" id="home">
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
                    <a href={resume} download className="home-resume-btn">
                        Download Resume
                    </a>
                    <div className="home-socials">
                        <a href="https://www.linkedin.com/in/sanju-burman" target="_blank" rel="noopener noreferrer" className="home-social-icon">

                            <FaLinkedin title="Linkedin" />
                        </a>
                        <a href="https://github.com/Sanju-Burman" target="_blank" rel="noopener noreferrer" className="home-social-icon">
                            <FaGithub title="GitHub" />
                        </a>
                        {/* <a href="https://gmail.com" target="_blank" rel="noopener noreferrer" className="home-social-icon">
                            <MdEmail />
                        </a> */}
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
