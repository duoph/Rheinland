"use client";
import { useAccount } from "@/context/useAccount";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { AiOutlineLogout } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaUser, FaBriefcase, FaBookmark, FaRegClipboard } from "react-icons/fa"; // Import additional icons
import { TbCategoryFilled } from "react-icons/tb";

const UserSliderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { LogOut, account } = useAccount();

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
            href={`/user/profile`}
            className={`w-full px-5 py-2 text-center ${pathname?.startsWith("/user/profile") && "bg-rheinland-red text-white"
              }`}
          >
            <span className="flex items-center justify-start gap-8">
              <FaUser size={20} />
              <p>Profile</p>
            </span>
          </Link>

          <Link
            href={"/jobs"}
            className={`w-full px-5 py-2 text-center ${pathname?.startsWith("/jobs") && "bg-rheinland-red text-white"
              }`}
          >
            <span className="flex items-center justify-start gap-8">
              <FaBriefcase size={20} />
              <p>Jobs</p>
            </span>
          </Link>

          <Link
            href={"/category"}
            className={`w-full px-5 py-2 text-center ${pathname?.startsWith("/category") && "bg-rheinland-red text-white"
              }`}
          >
            <span className="flex items-center justify-start gap-8">
              <TbCategoryFilled size={20} />
              <p>Browse Category</p>
            </span>
          </Link>

          <Link
            href={"/user/saved-jobs"}
            className={`w-full px-5 py-2 text-center ${pathname?.startsWith("/user/saved-jobs") && "bg-rheinland-red text-white"
              }`}
          >
            <span className="flex items-center justify-start gap-8">
              <FaBookmark size={20} />
              <p>Saved Jobs</p>
            </span>
          </Link>

          <Link
            href={"/user/applied-jobs"}
            className={`w-full px-5 py-2 text-center ${pathname?.startsWith("/user/applied-jobs") && "bg-rheinland-red text-white"
              }`}
          >
            <span className="flex items-center justify-start gap-8">
              <FaRegClipboard size={20} />
              <p>Applied Jobs</p>
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

export default UserSliderMenu;
