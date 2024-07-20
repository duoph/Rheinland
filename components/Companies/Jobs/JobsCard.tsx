import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdNotInterested } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function JobsCard() {
  return (
    // Main container
    <div className="flex flex-col w-[300px] h-[380px]   justify-around bg-[#f6eed8] rounded-sm pt-5 px-3">
      {/* Job and Company  */}
      <div className="flex flex-col gap-1">
        <h1 className="text-[28px]">Full Stack Developer</h1>
        <div className="flex flex-row justify-between">
          <h3 className="text-[20px] text-rheinland-blue">Microsoft</h3>
          <h1 className="flex flex-row items-center">
            <FaMapMarkerAlt />
            Berlin
          </h1>
        </div>
      </div>
      {/* Personal Details  */}
      <div className="flex flex-col gap-4 pt-7">
        {/* Name and Highest German language level  */}
        <div className="flex  flex-row justify-between ">
          <h1 className="text-[18px] text-rheinland-red font-semibold">
            Hadi Razal
          </h1>
          <p>A2</p>
        </div>
        {/* Location & Experience */}
        <div className="flex  flex-row justify-between">
          <p>Fresher</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <p className="italic underline cursor-pointer">More Details...</p>
      </div>
      {/* Buttons  */}
      <div className="flex flex-row gap-5 justify-between bg-white p-5 m-2 rounded-sm ">
        <button className="flex flex-row items-center p-2 text-white rounded-sm bg-green-500 gap-3">
          Accept <FaCheck />
        </button>
        <button className="flex flex-row items-center p-2 text-white rounded-sm bg-red-500 gap-3">
          Reject <MdNotInterested />
        </button>
      </div>
    </div>
  );
}

export default JobsCard;
