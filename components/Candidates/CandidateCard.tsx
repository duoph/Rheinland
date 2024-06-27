import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

function CandidateCard() {
  return (
    <div className="w-[300px] flex flex-col rounded-lg justify-center items-center py-5 px-2 border-2 shadow-xl shadow-rheinland-red">
      <div className="flex flex-col justify-center items-center ">
        <Image
          src="/person-icon.jpg"
          alt="Rheinland Logo"
          height={100}
          width={100}
          className="rounded-[50px]"
        />
        <h1 className="text-[22px] font-semibold cursor-default">Hadi Razal</h1>

        <p className="flex flex-row justify-center items-center text-[14px] text-gray-500 cursor-default">
          <IoLocationSharp />
          Ponnani,Kerala
        </p>
        <p className="flex flex-row justify-center items-center text-[14px] cursor-default">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          asperiores, nemo esse eum obcaecati tempora.
        </p>
      </div>
      <div className="flex flex-row gap-5 pt-5">
        <p className="w-28 bg-red-600 flex justify-center items-center p-1 text-[18px] text-white cursor-default">
          A1
        </p>
        {/* Change Content or Items Later  */}
        <p className="w-28 bg-red-600 flex justify-center items-center p-1 text-[18px] text-white cursor-default">
          Nurse
        </p>
      </div>
      <div className="pt-5 flex flex-col justify-center items-center gap-2">
        <button className=" flex flex-row justify-center gap-2 items-center w-[200px] bg-rheinland-black text-white rounded-lg py-2">Download Resume<FaFileDownload  className="text-[20px]"/></button>
        <p className="cursor-pointer">View Profile...</p>
      </div>
    </div>
  );
}

export default CandidateCard;
