import React from 'react'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useAppStore } from '../store/AppStore';

export default function Footer() {
    const { darkMode } = useAppStore();
    return (
        <div>
            <footer className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black '} border-t px-10 pt-10 pb-4 flex flex-col gap-8`}>
                <div className='flex flex-col gap-6 md:flex-row md:justify-between md:mx-20 items-center'>
                    <div className='text-center'>
                        <h1 className='font-head'>Contact</h1>
                        <p>Email: sarunya46mk@gmail.com</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='font-head mb-4'>Follow Us</h1>
                        <div className='flex gap-4 justify-center'>
                            <div className={`border-2 w-12 h-12 ${darkMode ? 'border-white' : 'border-black'} p-2 rounded-full flex justify-center items-center`}>
                                <FaFacebook className='w-8 h-8 hover:text-blue-700' />
                            </div>
                            <div className={`border-2 w-12 h-12 ${darkMode ? 'border-white' : 'border-black'} p-2 rounded-full flex justify-center items-center`}>
                                <FaGithub className='w-8 h-8 hover:text-pink-700' />
                            </div>
                            <div className={`border-2 w-12 h-12 ${darkMode ? 'border-white' : 'border-black'} p-2 rounded-full flex justify-center items-center`}>
                                <MdOutlineEmail className='w-8 h-8 hover:text-yellow-700' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='text-center'>
                    <p>&copy; {new Date().getFullYear()} Sarunya. All rights reserved.</p>
                    <hr className='mt-2' />

                </div>
            </footer>
        </div>
    )
}
