import Link from "next/link";
import React from "react";
import { LiaUserTieSolid } from "react-icons/lia";
import { HiOutlineBriefcase } from "react-icons/hi";
import { GoPencil } from "react-icons/go";
import { FaPowerOff } from "react-icons/fa6";

const EmployerPage = () => {
  return (
    <div className=" flex items-start  justify-start  h-screen ">
      <div className="flex flex-col items-center justify-center gap-3 text-white">
        {/* Sidebar  */}
        <div className="flex flex-col justify-start items-center w-[300px] bg-[#ffffe4] h-screen text-black">
          {/* Profile  */}
          <div className="flex flex-row w-[100%] justify-center items-center cursor-pointer pt-32 gap-3 ">
            <img
              src="/person-icon.jpg"
              alt=""
              className="w-16 rounded-[50px]"
            />
            <h2 className="text-lg font-semibold">Company Name</h2>
          </div>
      
          {/* Options  */}

          <div className="flex flex-col pt-10 w-full pl-9">
            <Link href={""} className=" px-4 py-3 rounded-sm ">
              <button className=" flex flex-row justify-center text-[20px] font-normal items-center gap-5">
                <LiaUserTieSolid className="text-[30px]" />
                Profile
              </button>
            </Link>
            <hr className="w-[100%]"/>
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
  );
};

export default EmployerPage;
