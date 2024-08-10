"use client";
import { useAccount } from "@/context/useAccount";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { AiOutlineLogout } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { BsBuildingsFill } from "react-icons/bs";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa"; // Import additional icons

const AdminSliderMenu = () => {
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
            href={"/admin/dashboard"}
            className={`w-full px-5 py-2 text-center ${pathname?.startsWith("/admin/dashboard") &&
              "bg-rheinland-red text-white"
              }`}
          >
            <span className="flex items-center justify-start gap-8">
              <IoDocumentAttachOutline size={20} />
              <p>Dashboard</p>
            </span>
          </Link>

          <Link
            href={`/admin/registered-users`}
            className={`w-full px-5 py-2 text-center ${pathname?.startsWith("/admin/registered-users") &&
              "bg-rheinland-red text-white"
              }`}
          >
            <span className="flex items-center justify-start gap-8">
              <PiStudentFill size={26} />
              <p>Registered User</p>
            </span>
          </Link>
          <Link
            href={`/admin/registered-employers`}
            className={`w-full px-5 py-2 text-center ${pathname?.startsWith("/admin/registered-employers") &&
              "bg-rheinland-red text-white"
              }`}
          >
            <span className="flex items-center justify-start gap-8">
              <BsBuildingsFill size={26} />
              <p>Registered Companies</p>
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

export default AdminSliderMenu;
