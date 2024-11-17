import React, { useRef } from 'react'
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
            />

            <div ref={homeRef}>
                <Profile />
            </div>
            <div ref={skillsRef}>
                <Skills />
            </div>
            <div ref={projectRef}>
                <Project />
            </div>
            <div ref={contactRef}>
                <SendEmail />
            </div>
            <Footer />
        </div>
    )
}
