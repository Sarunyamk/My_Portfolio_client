import React, { useState } from 'react'
import { useAppStore } from '../store/AppStore';
import logo from '../assets/Screenshot 2024-11-17 204951_preview_rev_1.png';
export default function Navbar({ onScrollToHome, onScrollToSkills, onScrollToProject, onScrollToContact }) {

    const { darkMode, toggleDarkMode } = useAppStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = (scrollFunction) => {
        scrollFunction();
        setIsMenuOpen(false);
    };

    return (
        <div className={`shadow-md w-full fixed top-0 left-0  ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} z-10`}>
            <nav className="flex justify-between items-center p-4 md:px-8">

                <div>
                    <a href="/"><img src={logo} alt="myLogo" className='w-18 h-16 md:w-20 md:h-18' /></a>
                </div>

                <ul className="hidden md:flex gap-6 items-center">
                    <li onClick={onScrollToHome} className="hover:text-blue-500 font-head cursor-pointer">Home</li>
                    <li onClick={onScrollToSkills} className="hover:text-blue-500 font-head cursor-pointer">Skills</li>
                    <li onClick={onScrollToProject} className="hover:text-blue-500 font-head cursor-pointer">Projects</li>
                    <li onClick={onScrollToContact} className="hover:text-blue-500 font-head cursor-pointer">Contact</li>
                </ul>

                <div className="flex items-center gap-4">
                    <div className="flex items-center">
                        <div className='flex flex-col items-center gap-2 me-4'>
                            <span className="text-xs md:text-sm">{darkMode ? "Dark Mode" : "Light Mode"}</span>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    onChange={toggleDarkMode}
                                    checked={darkMode} />
                                <div className="h-4 w-10 md:h-5 flex items-center bg-gray-300 rounded-full p-1 dark:bg-gray-600">
                                    <div className={`w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-md transform transition-transform ${darkMode ? 'translate-x-5' : 'translate-x-0'}`} ></div>
                                </div>
                            </label>
                        </div>
                        <div
                            className="md:hidden cursor-pointer"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <ul className={`flex flex-col items-center ${darkMode ? 'bg-slate-600 text-white' : 'bg-white text-black'}  md:hidden`}>
                    <li onClick={() => handleMenuClick(onScrollToHome)} className="py-2 text-center hover:text-blue-500 cursor-pointer border-b w-full">Home</li>
                    <li onClick={() => handleMenuClick(onScrollToSkills)} className="py-2 text-center hover:text-blue-500 cursor-pointer border-b w-full">Skills</li>
                    <li onClick={() => handleMenuClick(onScrollToProject)} className="py-2 text-center hover:text-blue-500 cursor-pointer border-b w-full">Projects</li>
                    <li onClick={() => handleMenuClick(onScrollToContact)} className="py-2 text-center hover:text-blue-500 cursor-pointer border-b w-full">Contact</li>
                </ul>
            )}
        </div>
    )
}
