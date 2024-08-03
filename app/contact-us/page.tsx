"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { IoMdArrowBack } from 'react-icons/io';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await axios.post('/api/contact', formData);
            if (response.data.success) {
                setSubmitMessage('Thank you for reaching out! We will get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form
            } else {
                setSubmitMessage('Something went wrong. Please try again later.');
            }
        } catch (error) {
            console.error(error);
            setSubmitMessage('An error occurred. Please try again later.');
        }

        setIsSubmitting(false);
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
            <div className="absolute top-[80px] left-[10px] cursor-pointer md:flex hidden">
                <span onClick={() => router.push('/')} className="flex items-center justify-center gap-2 ">
                    <IoMdArrowBack /> Back
                </span>
            </div>
            <div className="rounded-sm flex flex-col items-center justify-center gap-4 sm:w-[400px] w-full px-4 py-7">
                <div className="flex flex-col items-start justify-center w-full mb-4">
                    <span className="text-[30px] font-semibold text-red-600">Contact Us</span>
                    <span className="text-sm font-light">We love to hear from you</span>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border px-3 py-3 rounded-sm focus:outline-none"
                        placeholder="Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border px-3 py-3 rounded-sm focus:outline-none"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border px-3 py-3 rounded-sm focus:outline-none"
                        placeholder="Subject"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border px-3 py-3 rounded-sm focus:outline-none"
                        placeholder="Message"
                        rows={4}
                        required
                    />
                    <button
                        type="submit"
                        className="px-5 py-3 w-full bg-red-600 text-white rounded-sm"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                {submitMessage && (
                    <p className={`mt-4 ${submitMessage.startsWith('Thank') ? 'text-green-500' : 'text-red-500'}`}>
                        {submitMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ContactPage;
