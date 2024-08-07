import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

import { FaRegFilePdf } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaCheck,
  FaBriefcase,
  FaPhone,
  FaLanguage,
  FaEnvelope,
} from "react-icons/fa";

function CandidateCard() {
  return (
    <div
      className="w-[300px] flex flex-col rounded-sm justify-center items-center py-5 px-2 border-2 shadow-sm\]
     shadow-rheinland-gray"
    >
      <div className="flex flex-col justify-center items-center ">
        <Image
          src="/person-icon.jpg"
          alt="Rheinland Logo"
          height={100}
          width={100}
          className="rounded-[50px]"
        />
        <h1 className="text-[22px] font-semibold cursor-default">Hadi Razal</h1>

        <p className="flex flex-row justify-center items-center text-[14px] text-rheinland-blue cursor-default">
          <IoLocationSharp />
          Ponnani,Kerala
        </p>
        <p className="flex flex-row justify-center items-center text-[14px] cursor-default">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          asperiores, nemo esse eum obcaecati.
        </p>
      </div>
      <div className="flex flex-col items-start justify-center w-full gap-1 mt-2">
        <p className="text-sm text-gray-600 flex items-center">
          <FaLanguage className="mr-2" /> Language Level: {"Not Specified"}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaEnvelope className="mr-2" /> {"duoph@duoph.com"}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaPhone className="mr-2" /> {"84834834249"}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaBriefcase className="mr-2" />
          Experience: {"2 Years"}
        </p>
      </div>

      <div className="pt-5 flex flex-col justify-center items-center gap-2">
        <p className=" flex flex-row justify-center gap-2 items-center w-[200px] bg-rheinland-red text-white rounded-lg py-2">
          View Resume...
          <FaRegFilePdf className="text-[20px]" />
        </p>
      </div>
    </div>
  );
}

export default CandidateCard;
