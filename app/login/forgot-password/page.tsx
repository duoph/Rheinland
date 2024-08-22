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
    const [stage, setStage] = useState<number>(1); // 1: Email, 2: OTP, 3: New Password
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    const handleEmailSumbit = async () => {
        setIsLoading(true);
        try {
            const emailResponse = await axios.post('/api/login/forgot-password', { email });
            if (emailResponse.data.success) {
                toast.success('OTP sent to your email');
                setStage(2);
            }

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    const handleOTPSubmit = async () => {
        setIsLoading(true);
        try {
            const emailResponse = await axios.post('/api/login/forgot-password/verify', { email, otp });

            if (emailResponse.data.success) {
                toast.success('OTP verified. Enter new password for your email');
                setStage(3);
            }

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    const handleNewPassword = async () => {
        setIsLoading(true);
        try {
            const emailResponse = await axios.post('/api/login/forgot-password/new-password', { email, newPassword });

            if (emailResponse.data.success) {
                toast.success('Password changed successfully');
                router.push('/login')
            }

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
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
                    onClick={stage === 1 ? handleEmailSumbit : stage === 2 ? handleOTPSubmit : handleNewPassword}
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
