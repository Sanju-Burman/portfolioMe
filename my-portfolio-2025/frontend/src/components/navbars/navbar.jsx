import { ContactMe } from '../contact/ContactMe';
import './navbar.css';

const Navbar = () => {
    return (
        <header className='header'>
            <nav className="navbar" >
                <span alt="Logo" className="logo">SB.</span>
                <div className="desktop-menu">
                    <a className="desktop-list-item" href='#'>About</a>
                    <a className="desktop-list-item" href='#'>Skills</a>
                    <a className="desktop-list-item" href='#'>Projects</a>
                    <a className="desktop-list-item" href='#'>Education</a>
                </div>
                <button className='desktop-menu-btn' onClick={<ContactMe/>}>
                    Contact Me
                </button>
            </nav >
        </header>
    );
}

export default Navbar;