"use client"

import React from "react";
import { MdNotInterested } from "react-icons/md";
import { FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import { Skeleton } from "./ui/skeleton";

interface ApplicationCardProps {
  applicant?: any;
  isLoading?: boolean;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ applicant, isLoading }) => {
  if (isLoading) {
    return (
      <div className="border shadow-sm border-opacity-35 flex flex-col items-start justify-between md:min-w-[320px] w-full md:max-w-[320px] group cursor-pointer rounded-lg px-4 py-3 bg-white">
        <div className="flex justify-between items-center w-full py-2">
          <Skeleton className="w-[60px] h-[60px] rounded-full" />
          <Skeleton className="w-[100px] h-[20px]" />
        </div>
        <Skeleton className="w-full h-[20px] mb-2" />
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <Skeleton className="w-[150px] h-[20px]" />
          <Skeleton className="w-[200px] h-[20px]" />
          <Skeleton className="w-[250px] h-[20px]" />
          <Skeleton className="w-[100px] h-[20px]" />
          <Skeleton className="w-[100px] h-[20px]" />
        </div>
        <div className="flex justify-between items-center w-full py-2">
          <Skeleton className="w-[100px] h-[20px]" />
          <Skeleton className="w-[100px] h-[20px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="border shadow-md border-gray-300 flex flex-col items-start justify-between md:min-w-[320px] w-full md:max-w-[320px] group cursor-pointer rounded-lg px-4 py-3 bg-white hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col items-center justify-center w-full py-2">
        <h1 className="text-[20px] font-semibold text-gray-800">Full Stack Engineer</h1>
        <h3 className="text-[16px] text-gray-500">Duoph Technologies</h3>
      </div>
      <div className="flex flex-col items-start justify-center w-full gap-1 mt-2">
        <p className="text-sm font-medium text-gray-700">{applicant?.name || "Praveen Prasad"}</p>
        <p className="text-sm text-gray-600">Language Level: {applicant?.languageLevel || "Not Specified"}</p>
        <p className="text-sm text-gray-600">{applicant?.email || "praveenprasad@gmail.com"}</p>
        <p className="text-sm text-gray-600">{applicant?.phone || "84834834249"}</p>
        <p className="text-sm text-gray-600">{applicant?.experience || "2 Years of work Experience"}</p>
        <p className="text-sm text-gray-600"><FaMapMarkerAlt className="inline-block mr-1" /> {applicant?.location || "Berlin"}</p>
      </div>
      <div className="flex justify-center items-center w-full py-2 mt-2">
        <p className="italic underline cursor-pointer text-blue-500">View Resume</p>
      </div>
      <div className="flex gap-2 justify-between rounded-md w-full mt-3">
        <button className="flex items-center justify-center py-2 px-4 text-white rounded-md bg-green-700 hover:bg-green-600 transition-colors duration-200 gap-2">
          Shorlist <FaCheck />
        </button>
        <button className="flex items-center justify-center py-2 px-4 text-white rounded-md bg-rheinland-red hover:bg-red-600 transition-colors duration-200 gap-2">
          Reject <MdNotInterested />
        </button>
      </div>
    </div>
  );
}

export default ApplicationCard;
