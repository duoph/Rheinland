import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";

function AppliedJobsCard() {
  return (
    // Outer container
    <div className="flex gap-5 bg-[#f0f8ff] w-[500px] h-[150px] p-5">
      <div className="rounded-sm flex justify-center items-start">
        <Image src="/corporate.jpg" alt="company" height={80} width={80} />
      </div>
      <div className="flex flex-col items-start justify-between">
        <div className="flex flex-col items-start">
          <h1 className="text-[24px] font-semibold">Full Stack Developer</h1>
          <p className="flex flex-row justify-center items-center text-[14px] text-gray-500 cursor-default">
            <IoLocationSharp />
            Raunheim,Germany
          </p>
        </div>
        <div>
          <button className="flex flex-row items-center p-2 text-white rounded-sm bg-red-500 gap-3">
            Delete Application <FaRegTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppliedJobsCard;
