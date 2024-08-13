"use client"

import React from "react";
import { MdNotInterested } from "react-icons/md";
import { FaMapMarkerAlt, FaCheck, FaBriefcase, FaPhone, FaUser, FaLanguage, FaEnvelope } from "react-icons/fa";
import { Skeleton } from "./ui/skeleton";
import toast from "react-hot-toast";

interface ApplicationCardProps {
  applicant?: any;
  isLoading?: boolean;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ applicant, isLoading }) => {
  const handleShortListed = () => {
    try {
      toast.success("Shortlisted");
    } catch (error) {
      console.log(error);
    }
  }

  const handleReject = () => {
    try {
      toast.error("Rejected");
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoading) {
    return (
      <div className="border shadow-sm border-opacity-35 flex flex-col items-start justify-between md:min-w-[320px] w-full md:max-w-[320px] group cursor-pointer rounded-lg px-4 py-3 bg-white">
        <div className="flex justify-between items-center w-full py-2">
          <Skeleton className="w-[60px] h-[60px] rounded-md" />
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
     
      <div className="flex justify-start items-center w-full">
        <span className="font-light text-xs">Applied On : {applicant?.appliedOn || "20-10-2024 at 10:00 AM"}</span>
      </div>
     
      <div className="flex flex-col items-start justify-center w-full gap-1 mt-2">
        <p className="text-sm font-medium text-gray-700 flex items-center">
          <FaUser className="mr-2" /> {applicant?.name || "Praveen Prasad"}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaLanguage className="mr-2" /> Language Level: {applicant?.languageLevel || "Not Specified"}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaEnvelope className="mr-2" /> {applicant?.email || "praveenprasad@gmail.com"}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaPhone className="mr-2" /> {applicant?.phone || "84834834249"}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaBriefcase className="mr-2" /> {applicant?.experience || "2 Years of work Experience"}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaMapMarkerAlt className="mr-2" /> {applicant?.location || "Berlin"}
        </p>
      </div>
      <div className="flex justify-center items-center w-full py-1">
        <p className="italic underline cursor-pointer text-blue-500">View Resume</p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center rounded-md w-full mt-3">
        <button onClick={handleShortListed} className="flex items-center justify-center py-2 px-4 text-white rounded-md bg-green-700 hover:bg-green-600 transition-colors duration-200 gap-2 w-full">
          Shortlist
          <FaCheck />
        </button>
        <button onClick={handleReject} className="flex items-center justify-center py-2 px-4 text-white rounded-md bg-rheinland-red hover:bg-red-600 transition-colors duration-200 gap-2 w-full">
          Reject
          <MdNotInterested />
        </button>
      </div>
    </div>
  );
}

export default ApplicationCard;
