import axios from '../utils/axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Swal from "sweetalert2";
import { useAppStore } from '../store/AppStore';
import { useTranslation } from 'react-i18next';

export default function SendEmail() {

    const { t } = useTranslation();
    const { darkMode } = useAppStore();
    const [input, setInput] = useState({
        email: "",
        name: "",
        subject: "",
        message: ""
    });
    const text = t("contact.text");
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value.trim(),
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, name, subject, message } = input;

        if (!email || !name || !subject || !message) {
            toast.error(t("contact.error"));
            return;
        }
        console.log('input in submit:>> ', input);
        setLoading(true);
        try {
            const resp = await axios.post("/send-email", input);
            toast.success(t("contact.success"));

            setLoading(false);

            const reply = await axios.post("/send-email/back", { email });
            Swal.fire({
                title: t("contact.success"),
                text: t("contact.message"),
                icon: "success",
                confirmButtonText: t("contact.confirmButton"),
                background: "#fff",
                color: "#333"
            });
            setInput({ email: "", name: "", subject: "", message: "" });
        } catch (error) {
            toast.error(t("contact.failure"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800 shadow-lg '} py-16 md:py-32`}>

            <section className='text-center'>
                <h1 className='md:font-title pb-16 wave-text text-3xl'>
                    {text.split("").map((letter, index) => (
                        <span key={index} className="wave-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                            {letter}
                        </span>
                    ))}
                </h1>
            </section>
            <form onSubmit={handleSubmit}
                className='w-[80%] mx-auto md:w-1/3 gap-4 flex flex-col border-2 rounded-lg p-4 mb-16 shadow-lg'>

                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className={`h-4 w-4 opacity-70 ${darkMode ? 'text-gray-800' : 'text-gray-800'}`}>
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" name='email' value={input.email} onChange={handleChange} className="grow text-gray-800" placeholder={t("contact.emailPlaceholder")} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className={`h-4 w-4 opacity-70 ${darkMode ? 'text-gray-800' : 'text-gray-800'}`}>
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" name='name' value={input.name} onChange={handleChange} className="grow text-gray-800" placeholder={t("contact.namePlaceholder")} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" name='subject' value={input.subject} onChange={handleChange} className="grow text-gray-800" placeholder={t("contact.subjectPlaceholder")} />
                </label>
                <textarea className="textarea textarea-bordered text-gray-800" name='message' value={input.message} onChange={handleChange} placeholder={t("contact.messagePlaceholder")} ></textarea>
                <button type="submit" className="btn outline-none  hover:outline-sky-600 hover:bg-blue-700 bg-blue-700 text-white duration-300">{loading ? t("contact.loading") : t("contact.buttonText")}</button>
            </form>
        </div>
    )
}
