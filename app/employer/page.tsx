import Link from "next/link";
import React from "react";
import { LiaUserTieSolid } from "react-icons/lia";
import { HiOutlineBriefcase } from "react-icons/hi";
import { GoPencil } from "react-icons/go";
import { FaPowerOff } from "react-icons/fa6";
import Sidebar from "./sidebar/page";

const EmployerPage = () => {
  return (
    <>
      <div className="flex flex-row w-screen">
        <Sidebar />
        <div className="bg-[#f5f7fc] w-screen h-screen">
          
        </div>
      </div>
    </>
  );
};

export default EmployerPage;
