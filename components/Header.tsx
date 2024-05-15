"use client"

import Image from 'next/image'
import Link from 'next/link'
import SliderMenu from './SliderMenu';



const Header = () => {

    return (
        <div className='flex bg-white fixed top-0 left-0 w-full items-center justify-between pl-10 pr-5 py-3' >
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
            <div className='sm:w-1/6 flex md:hidden items-center justify-end gap-3 font-light cursor-pointer' >
                <SliderMenu />
            </div>
        </div>
    )
}

export default Header