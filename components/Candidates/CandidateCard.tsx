import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

function CandidateCard() {
  return (
    <div className="w-[300px] flex flex-col rounded-lg bg-red-400 justify-center items-center">
      <div className="flex flex-col justify-center items-center ">
        <Image
          src="/person-icon.jpg"
          alt="Rheinland Logo"
          height={100}
          width={100}
          className="rounded-[50px]"
        />
        <h1 className="text-[22px] font-semibold">Hadi Razal</h1>

        <p className="flex flex-row justify-center items-center text-[14px] text-gray-500">
          <IoLocationSharp />
          Ponnani,Kerala
        </p>
        <p className="flex flex-row justify-center items-center text-[14px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          asperiores, nemo esse eum obcaecati tempora.
        </p>
      </div>
      <div className="flex flex-row gap-5 pt-5">
        <p className="w-28 bg-red-600 flex justify-center items-center p-1 text-[18px] text-white">
          A1
        </p>
        {/* Change Content or Items Later  */}
        <p className="w-28 bg-red-600 flex justify-center items-center p-1 text-[18px] text-white">
          Nurse
        </p>
      </div>
    </div>
  );
}

export default CandidateCard;
