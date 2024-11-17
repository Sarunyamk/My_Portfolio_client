import React, { useRef, useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Profile from './../components/Profile';
import Skills from '../components/Skills'
import Project from '../components/Project'
import SendEmail from './../components/SendEmail';
import Footer from './../components/Footer';

export default function HomePage() {
    const homeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const scrollToSection = (section) => {
        section.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>
            <Navbar
                onScrollToHome={() => scrollToSection(homeRef)}
                onScrollToSkills={() => scrollToSection(skillsRef)}
                onScrollToProject={() => scrollToSection(projectRef)}
                onScrollToContact={() => scrollToSection(contactRef)}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />


            <div ref={homeRef}>
                <Profile darkMode={darkMode} />
            </div>
            <div ref={skillsRef}>
                <Skills darkMode={darkMode} />
            </div>
            <div ref={projectRef}>
                <Project darkMode={darkMode} />
            </div>
            <div ref={contactRef}>
                <SendEmail darkMode={darkMode} />
            </div>
            <Footer darkMode={darkMode} />
        </div>
    )
}
