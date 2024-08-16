import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaRegFilePdf,
  FaPhone,
  FaLanguage,
  FaEnvelope,
} from "react-icons/fa";

const CandidateCard = () => {
  return (
    <div className="w-[320px] bg-white flex flex-col rounded-lg justify-center items-center py-6 px-4 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col justify-center items-center mb-2">
        <Image
          src="/person-icon.jpg"
          alt="Profile Picture"
          height={120}
          width={120}
          className="rounded-full shadow-md"
        />
        <h1 className="text-[24px] font-semibold mt-4">Hadi Razal</h1>
        <p className="text-[14px] text-gray-500 mt-3 text-center px-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          asperiores, nemo esse eum obcaecati.
        </p>
      </div>
      <div className="flex flex-col items-start w-full mt-4 gap-2">
        <p className="flex items-center text-[15px] text-gray-600">
          <IoLocationSharp className="mr-1 text-rheinland-blue" />
          Ponnani, Kerala
        </p>
        <p className="text-sm text-gray-700 flex items-center">
          <FaLanguage className="mr-2 text-rheinland-blue" /> Language Level: {"Not Specified"}
        </p>
        <p className="text-sm text-gray-700 flex items-center">
          <FaEnvelope className="mr-2 text-rheinland-blue" /> duoph@duoph.com
        </p>
        <p className="text-sm text-gray-700 flex items-center">
          <FaPhone className="mr-2 text-rheinland-blue" /> 84834834249
        </p>
      </div>

      <div className="pt-6 flex flex-col justify-center items-center gap-3">
        <button className="flex items-center justify-center w-[220px] bg-rheinland-red text-white rounded-full py-3 text-sm font-medium shadow-sm hover:bg-red-600 transition-colors duration-300">
          View Resume
          <FaRegFilePdf className="ml-2 text-[18px]" />
        </button>
      </div>
    </div>
  );
}

export default CandidateCard;
