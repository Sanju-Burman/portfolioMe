import './navbar.css';
import { useEffect, useState } from 'react';
import { FaUser, FaCode, FaProjectDiagram, FaGraduationCap, FaEnvelope, FaBars, FaTimes, /*FaSun, FaMoon*/ } from 'react-icons/fa';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const [darkMode, setDarkMode] = useState(() => {
    //     return localStorage.getItem('theme') === 'dark';
    // });

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'skills', 'projects', 'education', 'contact'];
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

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    // useEffect(() => {
    //     document.body.classList.toggle('dark-theme', darkMode);
    //     localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    // }, [darkMode]);

    return (
        <header className='header'>
            <nav className="navbar">
                <a href="#home" className="logo">SB</a>
                <button className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className={`desktop-menu ${isMobileMenuOpen ? 'show-menu' : ''}`}>
                    <a className={`desktop-list-item ${activeSection === 'home' ? 'active' : ''}`} href='#home'><FaUser title="About" /></a>
                    <a className={`desktop-list-item ${activeSection === 'skills' ? 'active' : ''}`} href='#skills'><FaCode title="Skills" /></a>
                    <a className={`desktop-list-item ${activeSection === 'projects' ? 'active' : ''}`} href='#projects'><FaProjectDiagram title="Projects" /></a>
                    <a className={`desktop-list-item ${activeSection === 'education' ? 'active' : ''}`} href='#education'><FaGraduationCap title="Education" /></a>
                </div>
                <div className="navbar-actions">
                    <button className='desktop-menu-btn' onClick={scrollToContact} title="Contact">
                        <FaEnvelope />
                    </button>
                    {/* <button className='theme-toggle' onClick={() => setDarkMode(!darkMode)} title="Toggle Theme">
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button> */}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
