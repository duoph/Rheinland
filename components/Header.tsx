"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";



const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <div className='flex sticky bg-white top-0 right-0 left-0 w-full items-center justify-between px-5 py-3' >
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-center gap-10 '>
                    <Link href={'/'} className='flex items-center min-w-1/3'>
                        <Image src={'/RheinlandLogoHeader.png'} alt='Logo' height={100} width={100} />
                    </Link>
                    <div className="hidden md:flex justify-center items-center gap-4 font-light`">
                        <Link href={'/'}>Find Jobs</Link>
                        <Link href={'/'}>Browse Companies</Link>
                    </div>
                </div>
            </div>
            <div className='sm:w-3/6 hidden md:flex items-center justify-end gap-3 font-light' >
                <Link href={'/'} className='rounded-sm px-3 py-2 text-rheinland-red'>Login</Link>
                <Link href={'/'} className='rounded-sm bg-rheinland-red text-white px-3 py-2'>Sign Up</Link>
            </div>
            <div className='sm:w-3/6 flex md:hidden items-center justify-end gap-3 font-light cursor-pointer' >
                {isMenuOpen ? (<RiCloseLargeFill onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-rheinland-red ' size={28} />) : (<GiHamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-rheinland-red ' size={28} />)}
            </div>
        </div>
    )
}

export default Header