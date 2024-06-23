"use client";

import { useState } from "react";
import Link from "next/link";
import { LiaUserTieSolid } from "react-icons/lia";
import { HiOutlineBriefcase } from "react-icons/hi";
import { GoPencil } from "react-icons/go";
import { FaPowerOff } from "react-icons/fa6";
import Profile from "../profile/page"
const Sidebar = () => {
  const [option, setOption] = useState(1);

  const nextOption = () => {
    setOption(option + 1);
  };

  return (
    <div className="flex  flex-row ">
      <div className=" flex items-start  justify-center  h-screen ">
        <div className="flex flex-col items-center justify-center gap-3 text-white">
          {/* Sidebar  */}
          <div className="flex flex-col justify-center t items-center w-screen bg-[#ffffe4] h-screen text-black">
            {/* Profile  */}
            <div className="flex flex-row w-[100%] justify-center items-center cursor-pointer  gap-3 ">
              <img
                src="/person-icon.jpg"
                alt=""
                className="w-16 rounded-[50px]"
              />
              <h2 className="text-lg font-semibold">Company Name</h2>
            </div>

            {/* Options  */}

            <div className="flex flex-col pt-10 w-full justify-center items-center pl-9">
              <Link href={""} className=" px-4 py-3 rounded-sm ">
                <button className=" flex flex-row justify-center text-[20px] font-normal items-center gap-5">
                  <LiaUserTieSolid className="text-[30px]" />
                  Profile
                </button>
              </Link>
              <Link href={""} className=" px-4 py-3 rounded-sm">
                <button className=" flex flex-row justify-center text-[20px] font-normalitems-center gap-5">
                  <HiOutlineBriefcase className="text-[30px]" />
                  My Jobs
                </button>
              </Link>
              <hr />
              <Link
                href={"/employer/job/create-job"}
                className=" px-4 py-3 rounded-sm"
              >
                <button className=" flex flex-row justify-center text-[20px] font-normal items-center gap-5">
                  <GoPencil className="text-[30px]" />
                  Create Job
                </button>
              </Link>
              <hr />
              {/* Logout  */}

              <div className="flex flex-row">
                <Link href={""} className=" px-4 py-3 rounded-sm">
                  <button className=" flex flex-row justify-center text-[20px] font-normal items-center gap-5">
                    <FaPowerOff className="text-[20px]" />
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Sidebar;
