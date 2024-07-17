"use client"

import { useAccount } from '@/context/useAccount';
import Link from 'next/link';
import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLargeFill } from 'react-icons/ri';


const SliderMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const { LogOut, account } = useAccount()

    const AccountLogout = async () => {
        try {
            LogOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>

            {/* Global Slider Layout */}

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
                    className={`absolute right-0 top-[74px] flex items-start justify-start flex-col gap-3  px-5 py-3 bg-rheinland-yellow sm:w-[300px] w-full h-[calc(100vh-74px)]  transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-[0%]' : 'translate-x-[100%]'
                        }`}
                >
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Link href={'/login'}>Login</Link>
                    </div>
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Link href={'/create-account'}>Create Account</Link>
                    </div>
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Link href={'/jobs'}>Jobs</Link>
                    </div>

                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='w-full'>
                        <button className='bg-rheinland-red w-full py-3 ' onClick={AccountLogout}>
                            Logout
                        </button>
                    </div>

                    {account.type === "employer" && (<div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Link href={'/employer'}>{account.type}</Link>
                    </div>)}

                </div>
            </div>

        </ClickAwayListener>
    );
};

export default SliderMenu;