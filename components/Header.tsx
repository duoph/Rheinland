"use client";

import Image from "next/image";
import Link from "next/link";
import { useAccount } from "@/context/useAccount";
import AdminSliderMenu from "./SliderMenus/adminSliderMenu";
import UserSliderMenu from "./SliderMenus/userSliderMenu";
import EmployerSliderMenu from "./SliderMenus/employerSliderMenu";
import { usePathname, useRouter } from "next/navigation"; // Correct import for usePathname

const Header = () => {
  const { account } = useAccount();
  const path = usePathname();
  const router = useRouter()

  const handleLogoRoute = () => {
    if (path === "/admin/jobs" && account.type === "admin") {
      return
    }
    if (path === "/employer/my-jobs" && account.type === "employer") {
      return
    }
    if (path === "/jobs" && account.type === "user") {
      return
    }
    router.push('/')
  }

  return (
    <div className="flex bg-white border-b shadow-sm fixed top-0 left-0 w-full items-center justify-between lg:px-5 px-3 min-h-[70px] z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-10">
          <div onClick={handleLogoRoute} className="flex items-center min-w-1/3 cursor-pointer">

            <Image
              src={"/RheinlandEnlarged.png"}
              alt="Logo"
              height={110}
              width={110}
              sizes="(max-width: 768px) 100vw, 33vw"
            />

          </div>


          {!account.token && !account.id && (
            <div className="hidden lg:flex justify-center items-center gap-4 font-light">
              <Link href={"/jobs"}>Find Jobs</Link>
              <Link href={"/"}>Are you a student?</Link>
            </div>
          )}

        </div>
      </div>

      {(!account.token || !account.id) && (
        <div className="sm:w-3/6 flex items-center justify-end gap-3 font-light">
          <div onClick={() => router.replace('/login')} className="rounded-sm px-3 py-2 text-rheinland-red cursor-pointer">
            Login
          </div>
          <div onClick={() => router.replace('/create-account')}
            className="rounded-sm bg-rheinland-red text-white px-3 py-2 cursor-pointer"
          >
            Sign Up
          </div>
        </div>
      )}

      {account.token && account.type == "user" && (
        <div className="sm:w-[40px] flex items-end justify-end gap-3 font-light cursor-pointer">
          <UserSliderMenu />
        </div>
      )}

      {account.token && account.type === "employer" && (
        <div className="sm:w-[40px] flex items-end justify-end gap-3 font-light cursor-pointer">
          <EmployerSliderMenu />
        </div>
      )}

      {account.token && account.id && account.type === "admin" && (
        <div className="sm:w-[40px] flex items-end justify-end gap-3 font-light cursor-pointer">
          <AdminSliderMenu />
        </div>
      )}
    </div>
  );
};

export default Header;
