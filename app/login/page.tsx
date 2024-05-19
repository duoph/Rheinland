"use client"

import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoMdArrowBack } from 'react-icons/io'
import { PuffLoader } from 'react-spinners';
import { useAccount } from '@/context/useAccount';

const LoginPage = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { setAccountData } = useAccount()


    const router = useRouter()

    const handleSubmit = async () => {
        setIsLoading(true)
        try {

            if (!email || !password) {
                setIsLoading(false)
                return toast.error("Fill all inputs")
            }

            const res = await axios.post('/api/login', {
                email, password
            })


            if (res.data.success === true && res.data.isAdmin === true) {
                toast.success(res.data.message)
                router.push('/admin-panel')
                setAccountData(res.data.accountId, res.data.token)
                localStorage.setItem('currentAccount', JSON.stringify({ accountId: res.data.accountId, token: res.data.token }));
            }

            if (res.data.success === true && !res.data.isAdmin) {
                toast.success(res.data.message)
                router.push('/jobs')
                setAccountData(res.data.accountId, res.data.token)
                localStorage.setItem('currentAccount', JSON.stringify({ accountId: res.data.accountId, token: res.data.token }));
            }


            if (res.data.success === false) {
                toast.error(res.data.message)
            }

            console.log(res.data)

            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    }

    return (
        <div className='relative min-h-screen flex flex-col items-center justify-center'>
            <div className='absolute top-[80px] left-[10px] cursor-pointer md:flex hidden'>
                <span onClick={() => router.push("/")} className='flex items-center justify-center gap-2'> <IoMdArrowBack /> Back</span>
            </div>

            <div className='rounded-sm flex flex-col items-center justify-center gap-4 sm:w-[400px]  w-full px-4 py-7 '>
                {/* <div className='flex items-start justify-start w-full'>
                    <Image src={'/RheinlandLogoHeader.png'} alt='Logo' height={100} width={100} />
                </div> */}
                <div className='flex flex-col items-start justify-center w-full'>
                    <span className='text-[30px] font-semibold'>Login to your account.</span>
                    <span className='text-sm font-light'>Explore open career opportunities</span>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <input type="email" className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>

                {
                    isLoading &&
                    <button onClick={handleSubmit} className='px-5 py-3 w-full bg-rheinland-red text-white'>
                        <PuffLoader color='white' />
                    </button>
                }

                {
                    !isLoading &&
                    <button onClick={handleSubmit} className='px-5 py-3 w-full bg-rheinland-red text-white'>Login</button>
                }

                <div className='flex flex-col items-center justify-center text-sm'>
                    <span className='font-light'>Don&apos;t have an account yet? <Link href={'/create-account'} className='text-blue-500 underline'>Register</Link></span>
                    <span className='text-blue-500 underline cursor-pointer font-light'>Forgot Password</span>

                </div>
            </div>
        </div>

    )
}

export default LoginPage