"use client"

import { useAccount } from '@/context/useAccount';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { AiOutlineLogout } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLargeFill } from 'react-icons/ri';


const EmployerSliderMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const pathname = usePathname()

    const { LogOut, account } = useAccount()

    const handleLogout = async () => {
        try {
            await LogOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>

            {/* user Slider Layout */}

            <div className="flex items-center justify-center w-full">
                {isMenuOpen ? (
                    <RiCloseLargeFill
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='text-rheinland-red z-10'
                        size={28}
                    />
                ) : (
                    <GiHamburgerMenu
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='text-rheinland-red z-10'
                        size={28}
                    />
                )}
                <div
                    onClick={() => setIsMenuOpen(false)}
                    className={`absolute right-0 top-[74px] flex items-start justify-start flex-col gap-1 py-3 bg-rheinland-blue sm:w-[300px] w-full h-[calc(100vh-74px)]  transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-[0%]' : 'translate-x-[100%]'
                        }`}
                >

                    <Link
                        href={'/login'}
                        className={`w-full px-10 py-2 text-white text-center ${pathname?.startsWith('/admin/applications') && 'bg-red-600'
                            }`}
                    >
                        <span className="flex items-center justify-start gap-8">
                            <p>Login</p>
                        </span>
                    </Link>

                    <Link
                        href={'/create-account'}
                        className={`w-full px-10 py-2 text-white text-center ${pathname?.startsWith('/admin/applications') && 'bg-red-600'
                            }`}
                    >
                        <span className="flex items-center justify-start gap-8">
                            <p>Craete Account</p>
                        </span>
                    </Link>

                    <Link
                        href={'/jobs'}
                        className={`w-full px-10 py-2 text-white text-center ${pathname?.startsWith('/admin/applications') && 'bg-red-600'
                            }`}
                    >
                        <span className="flex items-center justify-start gap-8">
                            <p>Jobs</p>
                        </span>
                    </Link>


                    <button
                        className="bg-red-600 w-full px-10 py-2 text-white text-center flex items-center justify-center gap-3"
                        onClick={handleLogout}
                    >
                        LogOut
                        <AiOutlineLogout />
                    </button>

                    <div className="bg-red-600 w-full px-10 py-2 text-white text-center flex items-center justify-center gap-3"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Link href={'/employer'}>User Account</Link>
                    </div>

                </div>
            </div>






        </ClickAwayListener>
    );
};

export default EmployerSliderMenu;