import React, { useState } from 'react'
import { TypeAnimation } from "react-type-animation";
import { useAppStore } from '../store/AppStore';
import profile1 from '../assets/profile.jpg'
import profile2 from '../assets/S__19365892.jpg'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';



export default function Profile() {

    const { t } = useTranslation();
    const { darkMode } = useAppStore();
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlipImage = () => {
        setIsFlipped(!isFlipped);
    };
    console.log(darkMode, "darkMode")
    return (

        <div className={`mt-16 ${darkMode ? 'bg-white shadow-lg' : 'bg-gray-800 text-white '} `}>
            <motion.div initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                className='relative md:h-96 py-12 px-8 grid md:grid-cols-2 items-center gap-4 '>
                <div className={`card-container w-32 h-32 md:w-48 md:h-48 mx-auto cursor-pointer outline-double rounded-full outline-2 outline-offset-2 ${darkMode ? 'outline-slate-600' : 'outline-white'}`}
                    onClick={handleFlipImage} >
                    <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
                        <div className="card-front">
                            <img
                                className="rounded-full w-full h-full object-cover"
                                src={profile1}
                                alt="front" />
                        </div>
                        <div className="card-back">
                            <img
                                className="rounded-full w-full h-full object-cover"
                                src={profile2}
                                alt="back" />
                        </div>
                    </div>


                </div>
                <div className='text-center md:mr-16'>
                    <h1 className='font-head md:font-main font-bold mb-2'>
                        {t("profile.name")}
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
                        <span className='font-bold'>{t("profile.aboutTitle")}</span> {t("profile.aboutDesc")} </p>
                </div>
            </motion.div>

        </div>
    )
}

