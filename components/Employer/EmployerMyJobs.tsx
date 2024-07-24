import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

function EmployerMyJobs() {
  return (
    // Main container
    <div className="flex flex-col w-[300px] h-[380px]   justify-around bg-[#f0f8ff] rounded-sm pt-5 px-3">
      {/* Job and Company  */}
      <div className="flex flex-col gap-1">
        <h1 className="text-[28px]">Full Stack Developer</h1>
        <div className="flex flex-row justify-between">
          <h1 className="flex flex-row items-center">
            <FaMapMarkerAlt />
            Berlin
          </h1>
        </div>
        {/* Number of Openings */}
        <div className="flex flex-row">
          <p className="flex flex-row items-center justify-center gap-2 text-gray-500">
            <FaRegUser />
            <span>10</span>openings
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <p className="italic underline cursor-pointer">More Details...</p>
      </div>
      {/* Buttons  */}
      <div className="flex flex-row gap-5 justify-between bg-white p-5 m-2 rounded-sm ">
        <button className="flex flex-row items-center p-2 px-5 text-white rounded-sm bg-green-500 gap-3">
          Edit <GoPencil />
        </button>
        <button className="flex flex-row items-center p-2 text-white rounded-sm bg-red-500 gap-3">
          Delete <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default EmployerMyJobs;
