"use client"

import { useAccount } from '@/context/useAccount';
import { useRouter } from 'next/navigation';
import React from 'react'

const MyJobs = () => {


    const { account } = useAccount();

    const router = useRouter();


    return (
        <div>page</div>
    )
}

export default MyJobs