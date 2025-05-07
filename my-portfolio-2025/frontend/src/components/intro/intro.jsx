import { useState, useEffect } from 'react';
import profilePic from '../../assets/sanjuPic.png';
import '../intro/intro.css';
import linkedin from '../../assets/linkedin.svg';
import whatsapp from '../../assets/whatsapp.svg';
import instagram from '../../assets/instagram.svg';
import hire from '../../assets/love.png';

const Intro = () => {
    const words = ['Java Developer', 'Web Developer', 'Tech Enthusiast', 'Problem Solver'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenWords = 2000;

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[currentWordIndex];
            if (isDeleting) {
                setDisplayedText(currentWord.substring(0, displayedText.length - 1));
            } else {
                setDisplayedText(currentWord.substring(0, displayedText.length + 1));
            }

            if (!isDeleting && displayedText === currentWord) {
                setTimeout(() => setIsDeleting(true), delayBetweenWords);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting]);

    return (
        <div id="intro">
            <div className='intro-in'>
                <div className="introContent">
                    <span className="hello">Hello,</span>
                    <span className="intro-text">I'm</span>
                    <span className="introName">Sanju Burman</span>
                    <span className="introP">{displayedText}</span>
                    <p className='introPara'>I am a skilled Java developer</p>
                </div>
                <div className='socialMedia'>
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
                <div className='btn-div'>
                    <button className='btn'><img src={hire} alt='hiring' className='hireImg' /><span>Hire Me</span></button>
                </div>
            </div>
            <div className='profilePic-div'>
                <img src={profilePic} alt="profile" className="profilePic" />
            </div>
        </div>
    );
}

export default Intro;
