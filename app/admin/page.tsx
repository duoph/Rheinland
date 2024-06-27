"use client";
import { FaUserGraduate } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { IoMenuSharp } from "react-icons/io5";

function adminPage() {
  const [sliderOpen, setSliderOpen] = useState(false);

  return (
    <>
      <div>
        <button className="md:hidden z-50">
          <IoMenuSharp
            className="text-[50px] pt-[150px] bg-red-50 cursor-pointer md:hidden text-black"
            onClick={() => setSliderOpen(!sliderOpen)}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[99] md:z-0 transform ${
          sliderOpen ? "translate-x-0" : "-translate-x-full"
        } w-[280px] transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:flex-col md:w-[300px] md:h-screen bg-[#fcfaf6]`}
      >
        {/* Logo and Name  */}
        <div className="flex flex-col justify-center items-center pt-[110px] pb-20 gap-5">
          <img src="/RheinlandLogoHeader.png" alt="" className="w-[150px]" />
          <h1 className="font-bold text-[25px]">Dashboard</h1>
        </div>

        {/* Options  */}
        <div className="flex flex-col gap-5 px-5">
          <p className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px] ">
            <FaUserGraduate className="text-[28px] " />
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

      {/* Overlay for mobile view */}
      {sliderOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setSliderOpen(false)}
        />
      )}
    </>
  );
}

export default adminPage;
