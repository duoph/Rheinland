"use client";

import { useAccount } from "@/context/useAccount";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { AiOutlineLogout } from "react-icons/ai";
import {  FaPlusSquare, FaRegListAlt, FaUserTie } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";

const EmployerSliderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const { LogOut } = useAccount();

  const handleLogout = async () => {
    try {
      await LogOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>
      <div className="flex items-center justify-center w-full">
        {isMenuOpen ? (
          <RiCloseLargeFill
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-rheinland-red z-10"
            size={28}
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-rheinland-red z-10"
            size={28}
          />
        )}

        <div
          onClick={() => setIsMenuOpen(false)}
          className={`absolute right-0 top-[70px] flex items-start justify-start flex-col gap-1 py-3 bg-gray-200 sm:w-[300px] w-full h-[calc(100vh-74px)] transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-[0%]" : "translate-x-[100%]"
            }`}
        >
          <Link
            href={`/employer/profile`}
            className={`w-full px-10 py-2 text-center ${pathname?.startsWith("/employer/profile") && "bg-rheinland-red text-white"
              }`}
          >
            <span className="flex items-center justify-start gap-8">
              <FaUserTie size={20} />
              <p>Profile</p>
            </span>
          </Link>

          <Link
            href={"/employer/job/my-jobs"}
            className={`w-full px-10 py-2 text-center ${pathname?.startsWith("/employer/job/my-jobs") && "bg-rheinland-red text-white"
              }`}
          >
            <span className="flex items-center justify-start gap-8">
              <FaRegListAlt size={20} />
              <p>My Job Listings</p>
            </span>
          </Link>

          <Link
            href={"/employer/job/create-job"}
            className={`w-full px-10 py-2 text-center ${pathname?.startsWith("/employer/job/create-job") && "bg-rheinland-red text-white"
              }`}
          >
            <span className="flex items-center justify-start gap-8">
              <FaPlusSquare size={20} />
              <p>Create Job</p>
            </span>
          </Link>

          <button
            className="bg-rheinland-red w-full px-10 py-2 text-white text-center flex items-center justify-center gap-3"
            onClick={handleLogout}
          >
            LogOut
            <AiOutlineLogout size={20} />
          </button>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default EmployerSliderMenu;
