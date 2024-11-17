import React from 'react'
import react from '../assets/react-svgrepo-com.png'
import video1 from '../assets/FRIENDLY POWS.mp4'
import { useAppStore } from '../store/AppStore';


export default function Project() {

    const { darkMode } = useAppStore();
    const text = "PROJECTS"
    const project = [
        {
            video: video1, projectName: "M&M restaurant",
            detailFrontend: "Frontend Structure : React Tailwind I18next Leaflet Stripe",
            detailBackend: "Backend Structure : Node.js Express bcryptjs jsonwebtoken joi nodemailer Prisma-ORM JestTDD"
        },
        {
            video: react, projectName: "Group Project",
            detailFrontend: "Frontend Structure : React Tailwind I18next Leaflet Stripe",
            detailBackend: "Backend Structure : Node.js Express bcryptjs jsonwebtoken joi nodemailer Prisma-ORM",
            Tasks: "Tasks : Scrum Master,Fullstack ,Login(google,facebook),Register,Joi validate and Authenticate ,Router ProtectRoute ,Change language,TDD,Nodemailer ,Stripe,I18next ,Map Leaflet,Reset Password,PDFKit,Export Excel"
        },
        {
            video: react, projectName: "Static Page",
            detailFrontend: "Only HTML and CSS Responsive ",
        },
    ]

    return (
        <div className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800 shadow-lg '} `}>

            <section className='text-center'>
                <h1 className='md:font-title py-16 md:py-32 wave-text text-3xl'>
                    {text.split("").map((letter, index) => (
                        <span key={index} className="wave-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                            {letter}
                        </span>
                    ))}
                </h1>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-10 mx-10 md:mx-32 '>
                {
                    project.map((item, index) => (
                        <div key={index} className={`flex flex-col gap-3 items-center justify-center border-2 rounded-lg p-4 outline-none  ${darkMode ? 'bg-white hover:outline-white text-gray-800' : 'bg-white hover:outline-gray-800 text-gray-800'} duration-300 shadow-lg font-second`}>
                            <video controls width="100%" className="mb-4 rounded">
                                <source src={item.video} type="video/mp4" />
                            </video>
                            <div className='text-center'>
                                <h1 className='font-head'>{item.projectName}</h1>
                            </div>
                            <div className='text-left ml-4 space-y-2'>
                                <p>{item.detailFrontend}</p>
                                <p>{item.detailBackend}</p>
                                <p>{item.Tasks}</p>
                            </div>
                            <button>GitHUB</button>
                        </div>
                    ))
                }
            </section>
            <hr className='mt-10 w-[85%] mx-auto ' />
        </div>
    )
}
