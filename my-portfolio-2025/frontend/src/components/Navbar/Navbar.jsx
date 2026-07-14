import './Navbar.css';
import { useEffect, useState } from 'react';
import {
    FaUser, FaCode, FaProjectDiagram, FaGraduationCap, FaBriefcase,
    FaBars, FaTimes,
    FaSun, FaMoon
} from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { darkMode, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            const sections = ['home', 'skills', 'projects', 'experience', 'education', 'contact'];
            const scrollPos = window.scrollY + window.innerHeight / 2;
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                <a className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <span className="logo-text">SB</span>
                </a>
                <button className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className={`desktop-menu ${isMobileMenuOpen ? 'show-menu' : ''}`}>
                    <a className={`desktop-list-item ${activeSection === 'home' ? 'active' : ''}`} href='#home'><FaUser title="About" /> Home</a>
                    <a className={`desktop-list-item ${activeSection === 'skills' ? 'active' : ''}`} href='#skills'><FaCode title="Skills" /> Skills</a>
                    <a className={`desktop-list-item ${activeSection === 'projects' ? 'active' : ''}`} href='#projects'><FaProjectDiagram title="Projects" /> Projects</a>
                    <a className={`desktop-list-item ${activeSection === 'experience' ? 'active' : ''}`} href='#experience'><FaBriefcase title="Experience" /> Experience</a>
                    <a className={`desktop-list-item ${activeSection === 'education' ? 'active' : ''}`} href='#education'><FaGraduationCap title="Education" /> Education</a>
                </div>
                <div className="navbar-actions">
                    <button className={`theme-toggle ${darkMode ? 'dark' : 'light'}`} onClick={toggleTheme} title="Toggle Theme">
                        <span className="toggle-icon-wrapper">
                            {darkMode ? <FaMoon /> : <FaSun />}
                        </span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
