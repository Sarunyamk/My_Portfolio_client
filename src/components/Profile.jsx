import React, { useState } from 'react'
import { TypeAnimation } from "react-type-animation";
import { useAppStore } from '../store/AppStore';


export default function Profile() {

    const { darkMode } = useAppStore();
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlipImage = () => {
        setIsFlipped(!isFlipped);
    };
    console.log(darkMode, "darkMode")
    return (
        <div className={`mt-16 ${darkMode ? 'bg-white shadow-lg' : 'bg-gray-800 text-white '} md:h-96 py-12 px-8 grid md:grid-cols-2 items-center gap-4 `}>
            <div className={`card-container w-32 h-32 md:w-48 md:h-48 mx-auto cursor-pointer outline-double rounded-full outline-2 outline-offset-2 ${darkMode ? 'outline-slate-600' : 'outline-white'}`}
                onClick={handleFlipImage} >
                <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
                    <div className="card-front">
                        <img
                            className="rounded-full w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Woman" />
                    </div>
                    <div className="card-back">
                        <img
                            className="rounded-full w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fHx8fDA%3D%3D"
                            alt="Man" />
                    </div>
                </div>

            </div>
            <div className='text-center md:mr-16'>
                <h1 className='font-head md:font-main font-bold mb-2'>
                    Sarunya Vajapattana
                </h1>
                <TypeAnimation
                    sequence={[
                        "Full Stack Developer",
                        1500,
                        "Frontend Developer",
                        1500,
                        "Backend Developer",
                        1500,
                        "Web Developer",
                        1500,
                        "UI/UX Designer",
                        1500,
                    ]}
                    speed={50}
                    omitDeletionAnimation={true}
                    repeat={Infinity}
                    className="md:font-head text-muted-foreground mb-6"
                />
                <p className='leading-7  md:text-left'>
                    <span className='font-bold'>I am a web developer</span> specializing in React and Node.js, seeking a position as a Full Stack Developer. I am passionate about this field and enjoy developing websites while continuously learning new skills to meet the company's needs. I aspire to be a part of creating high-quality and impactful projects for your company                </p>
            </div>

        </div>
    )
}
