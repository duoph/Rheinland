"use client";

import { FaUserGraduate } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { RiMenu4Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import CandidatesPage from "./candidates/page";
import ApplicationPage from "./applications/page"
import LoginPage from "../login/page";
import { FaRegFileAlt } from "react-icons/fa";
import CompaniesPage from "./companies/page";
// Import other components for Applications, Companies, and Jobs
// import ApplicationsPage from "./applications/page";
// import CompaniesPage from "./companies/page";
// import JobsPage from "./jobs/page";

function AdminPage() {
  const [sliderOpen, setSliderOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("candidates");

  const renderComponent = () => {
    switch (currentComponent) {
      case "candidates":
        return <CandidatesPage />;
      case "applications":
        return <ApplicationPage />;
      case "companies":
        return <CompaniesPage />;
      case "jobs":
        return <LoginPage />;
      default:
        return <CandidatesPage />;
    }
  };

  return (
    <>
      <div className="flex flex-row h-screen">
        {/* Sidebar  */}
        <div>
          <div className="pt-[80px] md:hidden">
            <button
              className="z-50 bg-red-50 p-2 cursor-pointer md:hidden"
              onClick={() => setSliderOpen(!sliderOpen)}
            >
              <RiMenu4Line className="text-[30px] text-black z-50" />
            </button>
          </div>

          <div
            className={`fixed inset-0 z-[99] md:z-0 transform ${
              sliderOpen ? "translate-x-0" : "-translate-x-full"
            } w-[280px] transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:flex-col md:w-[300px] md:h-screen bg-[#fcfaf6]`}
          >
            {/* Logo and Name  */}
            <div className="flex flex-col justify-center items-center pt-[110px] pb-20 gap-5">
              <div className="flex flex-row justify-center items-center gap-10">
                <Image
                  src="/RheinlandLogoHeader.png"
                  alt="Rheinland Logo"
                  height={150}
                  width={150}
                />
                <button onClick={() => setSliderOpen(false)}>
                  <RxCross2 className="text-[30px] md:hidden" />
                </button>
              </div>
              <h1 className="font-bold text-[25px]">Dashboard</h1>
            </div>

            {/* Options  */}
            <div className="flex flex-col gap-5 px-5">
              <button
                className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px]"
                onClick={() => setCurrentComponent("candidates")}
              >
                <FaUserGraduate className="text-[28px]" />
                Candidates
              </button>
              <button
                className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px]"
                onClick={() => setCurrentComponent("applications")}
              >
                <FaRegFileAlt className="text-[28px]" />
                Applications
              </button>
              <button
                className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px]"
                onClick={() => setCurrentComponent("companies")}
              >
                <HiMiniBuildingOffice2 className="text-[28px]" />
                Companies
              </button>
              <button
                className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px]"
                onClick={() => setCurrentComponent("jobs")}
              >
                <MdWork className="text-[28px]" />
                Jobs
              </button>
              <button className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px]">
                <FaPowerOff className="text-[28px]" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Interchanging Components */}
        <div className="flex-grow p-5 overflow-y-auto">{renderComponent()}</div>
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

export default AdminPage;
