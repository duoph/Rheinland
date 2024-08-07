import React from "react";

import { MdNotInterested } from "react-icons/md";
import toast from "react-hot-toast";

import {
  FaMapMarkerAlt,
  FaCheck,
  FaBriefcase,
  FaPhone,
  FaLanguage,
  FaEnvelope,
} from "react-icons/fa";

function JobsCard() {
  const handleShortListed = () => {
    try {
      toast.success("Shortlisted");
    } catch (error) {
      console.log(error);
    }
  };
  const handleReject = () => {
    try {
      toast.error("Rejected", {});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // Main container
    <div className="border shadow-md border-gray-300 flex flex-col items-start justify-between md:min-w-[320px] w-full md:max-w-[320px] group cursor-pointer rounded-lg px-4 py-3 bg-white hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-start items-center w-full">
        <span className="font-light text-xs">
          Posted On : 20-10-2024 at 10:00 AM
        </span>
      </div>

      <div className="flex flex-col items-center justify-center w-full py-2">
        <h1 className="text-[20px] font-semibold text-gray-800">
          Full Stack Engineer
        </h1>
        <h3 className="text-[16px] text-gray-500">Duoph Technologies</h3>
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
        <p className="text-sm text-gray-600 flex items-center">
          <FaMapMarkerAlt className="mr-2" /> {"Berlin"}
        </p>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center rounded-md w-full mt-3">
        <button
          onClick={handleShortListed}
          className="flex items-center justify-center py-2 px-4 text-white rounded-md bg-green-700 hover:bg-green-600 transition-colors duration-200 gap-2 w-full"
        >
          Approve
          <FaCheck />
        </button>
        <button
          onClick={handleReject}
          className="flex items-center justify-center py-2 px-4 text-white rounded-md bg-rheinland-red hover:bg-red-600 transition-colors duration-200 gap-2 w-full"
        >
          Reject
          <MdNotInterested />
        </button>
      </div>
    </div>
  );
}

export default JobsCard;
