"use client"

import Image from 'next/image'
import Link from 'next/link'
import SliderMenu from './SliderMenu';
import { useAccount } from '@/context/useAccount';
import { CgProfile } from 'react-icons/cg';
import { Router } from 'next/router';



const Header = () => {

    const { account } = useAccount()

    return (

        <div className='flex bg-white border-b shadow-sm fixed top-0 left-0 w-full items-center justify-between lg:px-5 pl-3 pr-3 py-3 z-50' >
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-center gap-10 '>
                    <Link href={'/'} className='flex items-center min-w-1/3'>
                        <Image src={'/RheinlandLogoHeader.png'} alt='Logo' height={100} width={100} />
                    </Link>
                    <div className="hidden lg:flex justify-center items-center gap-4 font-light`">
                        <Link href={'/jobs'}>Find Jobs</Link>
                        <Link href={'/'}>Browse Companies</Link>
                        <Link href={'/'}>Are you a student?</Link>
                    </div>
                </div>
            </div>


            {(!account.token || !account.id) && (
                <div className='sm:w-3/6  flex items-center justify-end gap-3 font-light' >
                    <Link href={'/login'} className='rounded-sm px-3 py-2 text-rheinland-red'>Login</Link>
                    <Link href={'/create-account'} className='rounded-sm bg-rheinland-red text-white px-3 py-2'>Sign Up</Link>
                </div>
            )}


            {account.token && account.id && (
                <div className='sm:w-[40px] flex items-end justify-end  gap-3 font-light cursor-pointer' >
                    <SliderMenu />
                </div>
            )}
            {/* 
            <div className='sm:w-[40px] flex  items-end justify-end  gap-3 font-light cursor-pointer' >
                <SliderMenu />
            </div> */}


        </div>
    )
}

export default Header