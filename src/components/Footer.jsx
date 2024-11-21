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
                                <a href="https://www.facebook.com/miksun.nomore" target='_blank'><FaFacebook className='w-8 h-8 hover:text-blue-700' /></a>
                            </div>
                            <div className={`border-2 w-12 h-12 ${darkMode ? 'border-white' : 'border-black'} p-2 rounded-full flex justify-center items-center`}>
                                <a href="https://github.com/Sarunyamk" target='_blank'><FaGithub className='w-8 h-8 hover:text-black' /></a>
                            </div>
                            <div className={`border-2 w-12 h-12 ${darkMode ? 'border-white' : 'border-black'} p-2 rounded-full flex justify-center items-center`}>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sarunya46mk@gmail.com" target='_blank'><MdOutlineEmail className='w-8 h-8 hover:text-red-500' /></a>
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