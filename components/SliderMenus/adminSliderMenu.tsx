import React, { useState } from 'react'
import Link from "next/link"
import ClickAwayListener from 'react-click-away-listener'
import { CiCirclePlus, CiCircleRemove, CiMenuBurger, CiShop, CiShoppingCart } from 'react-icons/ci'
import { AiOutlineLogout } from 'react-icons/ai'
import { usePathname, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { RiCloseLargeFill } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useAccount } from '@/context/useAccount'


const AdminSliderMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();


    const { LogOut, account } = useAccount()


    const handleLogout = async () => {
        try {
            LogOut()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>

            <div className="flex items-center justify-center">

                {isMenuOpen ? (
                    <RiCloseLargeFill
                        onClick={() => setIsMenuOpen(false)}
                        className="text-red-500 z-10"
                        size={28}
                    />
                ) : (
                    <GiHamburgerMenu
                        onClick={() => setIsMenuOpen(true)}
                        className="text-red-500 z-10"
                        size={28}
                    />
                )}

                <div
                    onClick={() => setIsMenuOpen(false)}
                    className={`absolute right-0 top-[74px] flex items-start justify-start flex-col gap-1 py-3 bg-rheinland-blue sm:w-[300px] w-full h-[calc(100vh-74px)]  transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-[0%]' : 'translate-x-[100%]'
                        }`}
                >
                    <Link
                        href="/admin/applications"
                        className={`w-full px-10 py-2 text-white text-center ${pathname?.startsWith('/admin/applications') && 'bg-red-600'
                            }`}
                    >
                        <span className="flex items-center justify-start gap-8">
                            <CiShoppingCart />
                            <p>Applicants</p>
                        </span>
                    </Link>

                    <Link
                        href="/admin/candidates"
                        className={`w-full px-10 py-2 text-white text-center ${pathname?.startsWith('/admin/candidates') && 'bg-red-600'
                            }`}
                    >
                        <span className="flex items-center justify-start gap-8">
                            <CiCirclePlus />
                            <p>Candidates</p>
                        </span>
                    </Link>

                    <Link
                        onClick={() => setIsMenuOpen(false)}
                        href="/admin/companies"
                        className={`w-full px-10 py-2 text-white text-center ${pathname?.startsWith('/admin/companies') && 'bg-red-600'
                            }`}
                    >
                        <span className="flex items-center justify-start gap-8">
                            <CiCirclePlus />
                            <p>Companies</p>
                        </span>
                    </Link>


                    <button
                        className="bg-red-600 w-full px-10 py-2 text-white text-center flex items-center justify-center gap-3"
                        onClick={handleLogout}
                    >
                        LogOut
                        <AiOutlineLogout />
                    </button>
                </div>

            </div>
        </ClickAwayListener>
    )
}

export default AdminSliderMenu
