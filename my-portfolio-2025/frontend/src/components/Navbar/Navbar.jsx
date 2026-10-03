import './Navbar.css';
import { useEffect, useState } from 'react';
import {
    FaUser, FaCode, FaProjectDiagram, FaGraduationCap, FaBriefcase,
    FaBars, FaTimes, FaEnvelope,
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
            const sections = ['home', 'experience', 'projects', 'skills', 'education', 'contact'];
            const scrollPos = window.scrollY + 200;
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="navbar" aria-label="Main Navigation">
                <a className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Sanju Burman Portfolio Home">
                    <span className="logo-text">SB</span>
                </a>
                <button
                    className="hamburger"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className={`desktop-menu ${isMobileMenuOpen ? 'show-menu' : ''}`}>
                    <a className={`desktop-list-item ${activeSection === 'home' ? 'active' : ''}`} href='#home' onClick={() => setIsMobileMenuOpen(false)}><FaUser title="Home" /> Home</a>
                    <a className={`desktop-list-item ${activeSection === 'experience' ? 'active' : ''}`} href='#experience' onClick={() => setIsMobileMenuOpen(false)}><FaBriefcase title="Experience" /> Experience</a>
                    <a className={`desktop-list-item ${activeSection === 'projects' ? 'active' : ''}`} href='#projects' onClick={() => setIsMobileMenuOpen(false)}><FaProjectDiagram title="Projects" /> Projects</a>
                    <a className={`desktop-list-item ${activeSection === 'skills' ? 'active' : ''}`} href='#skills' onClick={() => setIsMobileMenuOpen(false)}><FaCode title="Skills" /> Skills</a>
                    <a className={`desktop-list-item ${activeSection === 'education' ? 'active' : ''}`} href='#education' onClick={() => setIsMobileMenuOpen(false)}><FaGraduationCap title="Education" /> Education</a>
                    <a className={`desktop-list-item ${activeSection === 'contact' ? 'active' : ''}`} href='#contact' onClick={() => setIsMobileMenuOpen(false)}><FaEnvelope title="Contact" /> Contact</a>
                </div>
                <div className="navbar-actions">
                    <button
                        className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
                        onClick={toggleTheme}
                        title="Toggle Theme"
                        aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
                    >
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
