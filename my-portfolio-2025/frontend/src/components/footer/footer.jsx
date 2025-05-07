// import React from 'react';
import './footer.css';
import linkedin from '../../assets/linkedin.svg'
import whatsapp from '../../assets/whatsapp.svg'
import instagram from '../../assets/instagram.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <h2>SB.</h2>
            </div>
            <div className="footer-socials">
                <a href="https://www.linkedin.com/in/sanju-burman" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="Linkedin" />
                </a>
                <a href="https://wa.me/+918085319797" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="Whatsapp" />
                </a>
                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" />
                </a>
            </div>
            <div className="footer-nav">
                <a href="#about">About</a>
                <a href="#Skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#education-body">Education</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="footer-copyright">
                <p>© 2024 SB. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
