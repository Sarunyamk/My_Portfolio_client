import React, { useState } from 'react'
import { useAppStore } from '../store/AppStore';
import logo from '../assets/Screenshot 2024-11-17 204951_preview_rev_1.png';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../i18n';
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

export default function Navbar({ onScrollToHome, onScrollToSkills, onScrollToProject, onScrollToContact }) {
    const { darkMode, toggleDarkMode } = useAppStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('home');
    const { t, i18n } = useTranslation();


    const handleMenuClick = (scrollFunction, menu) => {
        scrollFunction();
        setActiveMenu(menu);
        setIsMenuOpen(false);
    };

    const handleChangeLanguage = (lng) => {
        changeLanguage(lng);
    };

    return (
        <div className={`shadow-md w-full fixed top-0 left-0  ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} z-10`}>
            <nav className="flex justify-between items-center p-4 md:px-8">
                <div>
                    Portfolio
                </div>

                <ul className="hidden md:flex gap-6 items-center">
                    <li
                        onClick={() => handleMenuClick(onScrollToHome, 'home')}
                        className={`hover:text-blue-500 font-head cursor-pointer ${activeMenu === 'home' ? 'text-blue-500' : ''}`}
                    >
                        {t("navbar.home")}
                    </li>
                    <li
                        onClick={() => handleMenuClick(onScrollToSkills, 'skills')}
                        className={`hover:text-blue-500 font-head cursor-pointer ${activeMenu === 'skills' ? 'text-blue-500' : ''}`}
                    >
                        {t("navbar.skills")}
                    </li>
                    <li
                        onClick={() => handleMenuClick(onScrollToProject, 'projects')}
                        className={`hover:text-blue-500 font-head cursor-pointer ${activeMenu === 'projects' ? 'text-blue-500' : ''}`}
                    >
                        {t("navbar.projects")}
                    </li>
                    <li
                        onClick={() => handleMenuClick(onScrollToContact, 'contact')}
                        className={`hover:text-blue-500 font-head cursor-pointer ${activeMenu === 'contact' ? 'text-blue-500' : ''}`}
                    >
                        {t("navbar.contact")}
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    <div className="flex items-center">
                        <div className="flex items-center sm:justify-end space-x-2 me-4">
                            <button onClick={() => handleChangeLanguage('en')} className={`hover:text-blue-800 ${i18n.language === 'en' ? 'font-bold text-blue-700' : ''} text-sm md:text-base`}>EN</button>
                            <p>/</p>
                            <button onClick={() => handleChangeLanguage('th')} className={`hover:text-blue-800 ${i18n.language === 'th' ? 'font-bold text-blue-700' : ''} text-sm md:text-base`}>TH</button>
                        </div>
                        <div className='flex items-center gap-2 me-4'>
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
                            <span className="text-xs md:text-sm"> {darkMode ? <FaMoon className="w-3 h-3 text-yellow-500" /> : <IoSunnyOutline className="w-5 h-5 text-yellow-500" />}</span>
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
                    <li
                        onClick={() => handleMenuClick(onScrollToHome, 'home')}
                        className={`py-2 text-center hover:text-blue-500 cursor-pointer border-b w-full ${activeMenu === 'home' ? 'text-blue-500' : ''}`}
                    >
                        {t("navbar.home")}
                    </li>
                    <li
                        onClick={() => handleMenuClick(onScrollToSkills, 'skills')}
                        className={`py-2 text-center hover:text-blue-500 cursor-pointer border-b w-full ${activeMenu === 'skills' ? 'text-blue-500' : ''}`}
                    >
                        {t("navbar.skills")}
                    </li>
                    <li
                        onClick={() => handleMenuClick(onScrollToProject, 'projects')}
                        className={`py-2 text-center hover:text-blue-500 cursor-pointer border-b w-full ${activeMenu === 'projects' ? 'text-blue-500' : ''}`}
                    >
                        {t("navbar.projects")}
                    </li>
                    <li
                        onClick={() => handleMenuClick(onScrollToContact, 'contact')}
                        className={`py-2 text-center hover:text-blue-500 cursor-pointer border-b w-full ${activeMenu === 'contact' ? 'text-blue-500' : ''}`}
                    >
                        {t("navbar.contact")}
                    </li>
                </ul>
            )}
        </div>
    )
}
