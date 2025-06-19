// import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <h2>SB.</h2>
            </div>
            <div className="socials">
                <a href="https://www.linkedin.com/in/sanju-burman" target="_blank" rel="noopener noreferrer" className="social-icon">

                    <FaLinkedin />
                </a>
                <a href="https://github.com/Sanju-Burman" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaGithub />
                </a>

            </div>
            <div className="footer-nav">
                <a href="#home">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="footer-copyright">
                <p>© 2025 SB. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
