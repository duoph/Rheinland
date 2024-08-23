"use client";

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdArrowBack } from 'react-icons/io';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState<string>('');
    const [otp, setOtp] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [stage, setStage] = useState<number>(1); 
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    const handleEmailSubmit = async () => {
        if (!email) {
            toast.error('Please enter your email.');
            return;
        }

        setIsLoading(true);
        try {
            const emailResponse = await axios.post('/api/login/forgot-password', { email });
            if (emailResponse.data.success) {
                toast.success(emailResponse.data.message);
                setStage(2);
            }
            if (emailResponse.data.success === false) {
                toast.error(emailResponse.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleOTPSubmit = async () => {
        if (!otp) {
            toast.error('Please enter the OTP.');
            return;
        }

        setIsLoading(true);
        try {
            const otpResponse = await axios.post('/api/login/forgot-password/verify', { email, otp });

            if (otpResponse.data.success) {
                toast.success(otpResponse.data.message);
                setStage(3);
            }
            if (otpResponse.data.success === false) {
                toast.error(otpResponse.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleNewPassword = async () => {
        if (!newPassword) {
            toast.error('Please enter a new password.');
            return;
        }

        setIsLoading(true);
        try {
            const passwordResponse = await axios.post('/api/login/forgot-password/new-password', { email, newPassword });


            if (passwordResponse.data.success) {
                toast.success(passwordResponse.data.message);
                router.push('/login');
            }
            if (passwordResponse.data.success === false) {
                toast.error(passwordResponse.data.message);
            }


        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='relative min-h-screen flex flex-col items-center justify-center'>
            <div className='absolute top-[80px] left-[10px] cursor-pointer md:flex hidden'>
                <span onClick={() => router.push("/login")} className='flex items-center justify-center gap-2'>
                    <IoMdArrowBack /> Back to Login
                </span>
            </div>

            <div className='rounded-sm flex flex-col items-center justify-center gap-4 sm:w-[400px] w-full px-4 py-7'>
                <div className='flex flex-col items-start justify-center w-full'>
                    <span className='text-[30px] font-semibold'>
                        {stage === 1 ? 'Forgot Password?' : stage === 2 ? 'Enter OTP' : 'Set New Password'}
                    </span>
                    <span className='text-sm font-light'>
                        {stage === 1 && 'Enter your email to receive a verification code'}
                        {stage === 2 && 'We sent a verification code to your email'}
                        {stage === 3 && 'Enter your new password'}
                    </span>
                </div>

                <div className='flex flex-col gap-2 w-full'>
                    {stage === 1 && (
                        <div className='flex flex-col w-full'>
                            <label className='text-sm font-medium'>Email</label>
                            <input
                                type="email"
                                className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </div>
                    )}
                    {stage === 2 && (
                        <div className='flex flex-col w-full'>
                            <label className='text-sm font-medium'>OTP</label>
                            <input
                                type="text"
                                className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="Enter the OTP"
                            />
                        </div>
                    )}

                    {stage === 3 && (
                        <div className='flex flex-col w-full'>
                            <label className='text-sm font-medium'>New Password</label>
                            <input
                                type="password"
                                className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter your new password"
                            />
                        </div>
                    )}
                </div>

                <button
                    onClick={stage === 1 ? handleEmailSubmit : stage === 2 ? handleOTPSubmit : handleNewPassword}
                    className='px-5 py-3 h-[50px] w-full bg-rheinland-red text-white'
                    disabled={isLoading}
                >
                    {isLoading ? 'Processing...' : stage === 1 ? 'Send OTP' : stage === 2 ? 'Verify OTP' : 'Reset Password'}
                </button>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
