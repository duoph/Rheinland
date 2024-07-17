"use client";

import { FaUserGraduate, FaRegFileAlt, FaPowerOff } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import { ReactNode, useState } from "react";

/**
 * Component for the admin page slider layout.
 * @param children - Child components to render within the layout.
 * @returns The rendered admin page slider layout.
 */
const AdminSliderLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [sliderOpen, setSliderOpen] = useState<boolean>(false);

    return (
        <>
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
                    className={`absolute top-[75px] z-50 inset-0 md:z-0 transform ${sliderOpen ? "translate-x-0" : "-translate-x-full"
                        } w-[280px] transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:flex-col md:w-[300px] bg-[#fcfaf6]`}
                >
                    <div className="relative flex flex-col items-start bg-gray-100 h-full gap-5 px-5 ">
                        <div onClick={() => setSliderOpen(false)} className="absolute top-5 right-5 cursor-pointer md:hidden">
                            <IoCloseSharp />
                        </div>

                        <h1 className="font-bold text-[25px]">Dashboard</h1>
                        <button
                            className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px]"
                            onClick={() => {
                                setSliderOpen(false);
                            }}
                        >
                            <FaUserGraduate className="text-[28px]" />
                            Candidates
                        </button>
                        <button
                            className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px]"
                            onClick={() => {
                                setSliderOpen(false);
                            }}
                        >
                            <FaRegFileAlt className="text-[28px]" />
                            Applications
                        </button>
                        <button
                            className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px]"
                            onClick={() => {
                                setSliderOpen(false);
                            }}
                        >
                            <HiMiniBuildingOffice2 className="text-[28px]" />
                            Companies
                        </button>
                        <button
                            className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px]"
                            onClick={() => {
                                setSliderOpen(false);
                            }}
                        >
                            <MdWork className="text-[28px]" />
                            Jobs
                        </button>
                        <button
                            className="flex justify-start items-center gap-2 cursor-pointer font-regular hover:text-rheinland-red text-[22px]"
                            onClick={() => {
                                setSliderOpen(false);
                            }}
                        >
                            <FaPowerOff className="text-[28px]" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {children}
        </>
    );
};

export default AdminSliderLayout;

