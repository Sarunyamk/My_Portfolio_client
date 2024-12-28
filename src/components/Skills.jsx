import React from 'react'
import react from '../assets/react-svgrepo-com.png'
import prisma from '../assets/Screenshot 2024-11-17 071459.png'
import { useAppStore } from '../store/AppStore';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';



export default function Skills() {

    const { t } = useTranslation();
    const { darkMode } = useAppStore();
    const text = t("skills.text");
    const isThai = (text) => /^[ก-๙]+$/.test(text);
    const skill = [
        { img: react, name: "React.js" },
        { img: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg", name: "Javascript" },
        { img: "https://vuejs.org/images/logo.png", name: "Vue3.js" },
        { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png", name: "HTML" },
        { img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", name: "CSS" },
        { img: "https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png", name: "Bootstrap" },
        { img: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png", name: "TailwindCSS" },
        { img: "https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format", name: "Figma" },
        { img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", name: "Version Control Git" },
        { img: "https://www.svgrepo.com/show/354202/postman-icon.svg", name: "Postman" },
        { img: "https://miro.medium.com/v2/resize:fit:1000/1*TGwJKcxY8kGEenRLLedeLw.png", name: "Node.js" },
        { img: "https://i0.wp.com/saixiii.com/wp-content/uploads/2017/04/mysql.png?ssl=1", name: "MySQL" },
        { img: prisma, name: "Prisma" },
    ]

    return (
        <div className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800 shadow-lg'}`}>
            <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                className='relative'
            >
                <section className='text-center'>
                    <h1 className='md:font-title my-16 md:my-32 wave-text text-3xl'>
                        {text.split("").map((letter, index) => (
                            <span key={index} className={isThai(letter) ? "" : "wave-letter"}
                                style={isThai(letter) ? {} : { animationDelay: `${index * 0.1}s` }}>
                                {letter}
                            </span>
                        ))}
                    </h1>
                </section>
                <section className='grid grid-cols-2 md:grid-cols-5 gap-6 mx-8 md:mx-32'>
                    {
                        skill.map((item, index) => (
                            <div key={index} className={`flex flex-col items-center justify-center border-2 rounded-lg gap-2 md:gap-6 p-3 md:p-6 hover:scale-105 ${darkMode ? 'bg-white text-gray-800 hover:text-gray-800 hover:outline-double hover:outline-2 hover:outline-offset-2 hover:outline-blue-600' : 'hover:bg-gray-600 hover:text-white'} duration-500 shadow-lg`}>
                                <img src={item.img} alt={item.name} className="w-24 h-24 md:w-36 md:h-36 object-contain" />
                                <h1 className='font-second md:font-head'>{item.name}</h1>
                            </div>
                        ))
                    }
                </section>
            </motion.div>
            <hr className='mt-10 w-[85%] mx-auto ' />
        </div>

    )
}
