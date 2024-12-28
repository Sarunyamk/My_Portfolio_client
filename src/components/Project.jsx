import React, { useState } from 'react'
import video1 from '../assets/FRIENDLY POWS.mp4'
import video2 from '../assets/1119.mp4'
import video3 from '../assets/11190.mp4'
import video4 from '../assets/1228.mp4'
import video5 from '../assets/camping.mp4'
import { useAppStore } from '../store/AppStore';
import { useTranslation } from 'react-i18next';
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function Project() {

    const { t } = useTranslation();
    const { darkMode } = useAppStore();
    const text = t("project.text");
    const isThai = (text) => /^[ก-๙]+$/.test(text);
    const project = [
        {
            video: video2,
            projectName: t("project.single"),
            detailFrontend: `${t("project.frontend")} : React.js , TailwindCSS , I18next , Map Leaflet , Stripe`,
            detailBackend: `${t("project.backend")} : Node.js , Express.js , Bcryptjs , Jsonwebtoken , Joi , Nodemailer , Prisma-ORM , JestTDD`,
            description1: t("project.desc1"),
            desc1Detail: t("project.desc1Detail"),
            description2: t("project.desc2"),
            link: "https://github.com/Sarunyamk/Single_Project_restaurant-client",
        },
        {
            video: video1, projectName: t("project.group"),
            detailFrontend: `${t("project.frontend")} : React.js , TailwindCSS , I18next , Map Leaflet , Stripe`,
            detailBackend: `${t("project.backend")} : Node.js , Express.js , Bcryptjs , Jsonwebtoken , Joi , Nodemailer , Prisma-ORM`,
            tasks: `${t("project.task")} Scrum Master,Fullstack ,Login(google,facebook),Register,Joi validate and Authenticate ,Router ProtectRoute ,Change language,TDD,Nodemailer ,Stripe,I18next ,Map Leaflet,Reset Password,PDFKit,Export Excel`,
            description1: t("project.desc3"),
            desc1Detail: t("project.desc4"),
            description2: t("project.desc5"),
            link: "https://github.com/Sarunyamk/Friend_Pow_Client",
        },
        {
            video: video4, projectName: t("project.ecom"),
            detailFrontend: `${t("project.frontend")} : Vue3.js , TailwindCSS , Pinia`,
            description1: t("project.desc7"),
            link: "https://github.com/Sarunyamk/ecommerce-vue.js.git",
        },
        {
            video: video5, projectName: t("project.camp"),
            detailFrontend: `${t("project.frontend")} : Next.js , Typescript , TailwindCSS , Map Leaflet , Clerk , Supabase , Prisma-ORM `,
            description1: t("project.desc8"),
            link: "https://github.com/Sarunyamk/workshop_camping-next.js-typescript-.git",
        },
        {
            video: video3, projectName: t("project.static"),
            detailFrontend: "Only HTML and CSS Responsive ",
            description1: t("project.desc6"),
            link: "https://github.com/Sarunyamk/CC18_Responsive_homeworkCSS.git",
        },
    ]
    const [flippedCards, setFlippedCards] = useState(project.map(() => false));
    const handleFlip = (index) => {
        const updatedFlippedCards = flippedCards.map((flipped, i) =>
            i === index ? !flipped : flipped
        );
        setFlippedCards(updatedFlippedCards);
    };

    return (
        <div className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800 shadow-lg '} `}>

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

                <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10 md:mx-32">
                    {project.map((item, index) => (
                        <div key={index}
                            className="card-container relative w-full h-[450px] md:h-[500px] lg:h-[600px] bg-white shadow-lg rounded-lg cursor-pointer overflow-hidden">
                            <div className={`card-inner w-full h-full ${flippedCards[index] ? "is-flipped" : ""} border-2 border-gray-800 text-gray-800`}>
                                {/* Card Front */}
                                <div className="relative card-front flex flex-col items-center justify-center p-4">
                                    <video controls width="100%" className="my-4 rounded">
                                        <source src={item.video} type="video/mp4" />
                                    </video>
                                    <h2 className="font-head">{item.projectName}</h2>
                                    <p className="font-second mt-4">
                                        {item.detailFrontend}
                                        <br />
                                        {item.detailBackend}
                                    </p>
                                    <div className='absolute bottom-2 right-2'>
                                        {/* Click on GitHub icon to flip */}
                                        <FaGithub
                                            className='w-10 h-10 cursor-pointer'
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent click event from propagating
                                                handleFlip(index); // Flip the card
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Card Back */}
                                <div className="card-back flex flex-col items-center justify-center p-6 bg-gray-100">
                                    <h2 className="font-head text-lg mb-4 text-center lg:font-main">
                                        {item.projectName}
                                    </h2>
                                    <p className="font-second text-sm text-center">
                                        {item?.tasks}
                                    </p>
                                    <p className="font-second text-sm text-center">
                                        {item.description1}
                                    </p>
                                    <p className="font-second text-sm text-center">
                                        {item.desc1Detail}
                                    </p>
                                    <p className="font-second text-sm text-center">
                                        {item.description2}
                                    </p>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <button className={`text-white py-2 px-4 rounded mt-10 hover:scale-105 duration-300 ${darkMode ? 'bg-black hover:bg-gray-800' : 'bg-blue-500 hover:bg-blue-700'}`} >
                                            {t("project.git")}
                                        </button>
                                    </a>
                                    {/* Button to go back to the front */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleFlip(index); // Flip back to front
                                        }}
                                        className="text-white py-2 px-4 rounded mt-10 bg-gray-500 hover:bg-gray-600">
                                        {t("project.back")} {/* You can adjust the label text */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </motion.div>
            <hr className='mt-10 w-[85%] mx-auto ' />
        </div>
    )
}
