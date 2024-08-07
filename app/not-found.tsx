"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
    const [countdown, setCountdown] = useState(3);
    const router = useRouter();

    useEffect(() => {
        // Timer for redirect
        const timer = setTimeout(() => {
            if (countdown > 0) {
                setCountdown(prev => prev - 1);
            } else {
                router.push('/');
            }
        }, 1000); // Update every second

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, [countdown, router]);

    return (
        <div className='flex flex-col items-center justify-center  min-h-screen'>
            <h1>404 - Page Not Found</h1>
            <p>You will be redirected to the home page in {countdown} seconds...</p>
        </div>
    );
};

export default NotFoundPage;
