"use client";

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdArrowBack } from 'react-icons/io';
import { countries } from "@/data/countries";

const CreateEmployerAccount = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        employerName: '',
        email: '',
        phone: '',
        website: '',
        location: '',
        password: '',
        confirmPassword: '',
        countryCode: ''
    });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.employerName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword || !formData.countryCode) {
            toast.error("Please fill all required fields");
            return;
        }

        if (!passwordsMatch()) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            setIsLoading(true);

            const formDataToSend = new FormData();
            formDataToSend.append('employerName', formData.employerName);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('email', formData.email.toLowerCase());
            formDataToSend.append('password', formData.password);
            formDataToSend.append('website', formData.website);
            formDataToSend.append('address', formData.location);
            formDataToSend.append('countryCode', formData.countryCode);

            const res = await axios.post('/api/employer/account', formDataToSend);

            if (!res.data.success) {
                toast.error("Error creating account");
            } else {
                toast.success(res.data.message);
                router.push('/login');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Error submitting form");
        } finally {
            setIsLoading(false);
        }
    };

    const passwordsMatch = () => {
        return formData.password === formData.confirmPassword;
    };

    return (
        <div className='relative min-h-screen pt-[80px] flex flex-col items-center justify-center'>
            <div className='absolute top-[80px] left-[10px] cursor-pointer md:flex hidden'>
                <span onClick={() => router.push("/")} className='flex items-center justify-center gap-2'>
                    <IoMdArrowBack /> Back
                </span>
            </div>
            <div className='rounded-sm flex flex-col items-center justify-center gap-4 sm:w-[400px] w-full px-4 py-7'>
                <div className='flex flex-col items-start justify-center w-full'>
                    <span className='text-[30px] font-semibold'>Create your Employer Account</span>
                    <span className='text-sm font-light'>Explore new business opportunities</span>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
                    <div className='flex flex-col'>
                        <label htmlFor="employerName" className='text-sm font-medium mb-1'>Employer Name</label>
                        <input
                            type="text"
                            id="employerName"
                            name="employerName"
                            value={formData.employerName}
                            onChange={handleChange}
                            className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
                            placeholder="Enter employer name"
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="email" className='text-sm font-medium mb-1'>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="countryCode" className="text-sm font-medium mb-1">Country Code</label>
                        <select
                            id="countryCode"
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
                        >
                            <option value="">Select Country Code</option>
                            {countries.map((country) => (
                                <option key={country.code} value={country.code}>{country.code + " - " + country.country}</option>
                            ))}
                        </select>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="phone" className='text-sm font-medium mb-1'>Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
                            placeholder="Enter phone number"
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="website" className='text-sm font-medium mb-1'>Website</label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
                            placeholder="Enter website URL"
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="address" className='text-sm font-medium mb-1'>Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
                            placeholder="Enter address"
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="password" className='text-sm font-medium mb-1'>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
                            placeholder="Enter password"
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="confirmPassword" className='text-sm font-medium mb-1'>Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors ${!passwordsMatch() && formData.confirmPassword ? 'border-rheinland-red' : ''}`}
                            placeholder="Confirm your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className='px-5 py-3 w-full bg-rheinland-red text-white rounded-sm'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>
                <div className='flex flex-col items-center justify-center text-sm gap-1 mt-4'>
                    <span className='font-light'>
                        Already have an account?{" "}
                        <Link href='/login' className='text-blue-500 underline'>
                            Login
                        </Link>
                    </span>
                    <span className='font-light'>
                        Register as a job seeker?{" "}
                        <Link href='/create-account' className='text-blue-500 underline'>
                            Register
                        </Link>
                    </span>
                    <span className='text-blue-500 underline cursor-pointer font-light mt-2'>
                        Forgot Password
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CreateEmployerAccount;
