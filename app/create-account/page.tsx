"use client"


import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'

const CreateAccountPage = () => {


    const router = useRouter()


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
                    <span className='text-[30px] font-semibold'>Create your account.</span>
                    <span className='text-sm font-light'>Explore open career opportunities</span>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <input type="text" className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none" placeholder="Full Name" />
                    <input type="text" className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none" placeholder="Email" />
                    <input type="nummber" className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none" placeholder="Phone" />
                    <input type="text" className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none" placeholder="Password" />
                    <input type="text" className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none" placeholder="Cofirm Password" />
                </div>

                <button className='px-5 py-3 w-full bg-rheinland-red text-white'>Create Account</button>
                <div className='flex flex-col items-center justify-center text-sm gap-1'>
                    <span className='font-light'>Already have an account? <Link href={'/login'} className='text-blue-500 underline'>Login</Link></span>
                    <span className='font-light'>Register as a employer? <Link href={'/create-account/employer'} className='text-blue-500 underline'>Register</Link></span>
                    <span className='text-blue-500 underline cursor-pointer font-light'>Forgot Password</span>

                </div>
            </div>
        </div>
    )
}

export default CreateAccountPage