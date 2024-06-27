import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

function CandidateCard() {
  return (
    <div className="w-[300px]">
      <div className="flex flex-col justify-center items-center ">
        <Image
          src="/person-icon.jpg"
          alt="Rheinland Logo"
          height={100}
          width={100}
        />
        <h1 className="text-[22px] font-semibold">Hadi Razal</h1>

        <p className="flex flex-row justify-center items-center text-[14px] text-gray-500">
          <IoLocationSharp />
          Ponnani,Kerala
        </p>
      </div>
    </div>
  );
}

export default CandidateCard;
