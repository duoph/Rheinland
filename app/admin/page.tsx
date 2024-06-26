import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";


function adminPage() {
  return (
    // Sidebar

    <div className="pt-[110px] w-[300px] h-screen bg-[#fcfaf6] flex flex-col px-5">

        {/* Logo and Name  */}

      <div className="flex flex-col justify-center items-center pb-20 gap-5">
        <img src="/RheinlandLogoHeader.png" alt="" className="w-[150px]" />
        <h1 className="font-bold text-[25px]">Dashboard</h1>
      </div>

      {/* Options  */}
      <div className="flex flex-col gap-5 px-5">
        
        <p className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px] ">
          <FaUserGraduate className="text-[28px] "/>
          Candidates
        </p>
        <p className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px] ">
          <IoDocumentTextSharp className="text-[28px] " />
          Applications
        </p>
        <p className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px] ">
          <HiMiniBuildingOffice2 className="text-[28px] " />
          Companies
        </p>
        <p className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px] ">
          <MdWork className="text-[28px] " />
          Jobs
        </p>
        <p className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px] ">
          <FaPowerOff className="text-[28px] " />
          Logout
        </p>
      </div>
    </div>
  );
}

export default adminPage;
