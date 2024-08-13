"use client";

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
  };

  const handleReject = () => {
    try {
      toast.error("Rejected");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className="border shadow-sm border-opacity-35 flex flex-col items-start justify-between w-full md:w-[320px] group cursor-pointer rounded-lg px-4 py-3 bg-white">
        <div className="flex justify-between items-center w-full py-2">
          <Skeleton className="w-16 h-16 rounded-full" />
          <Skeleton className="w-24 h-5" />
        </div>
        <Skeleton className="w-full h-4 mb-2" />
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </div>
        <div className="flex justify-between items-center w-full py-2">
          <Skeleton className="w-24 h-5" />
          <Skeleton className="w-24 h-5" />
        </div>
      </div>
    );
  }

  return (
    <div className="border shadow-md border-gray-300 flex flex-col items-start justify-between w-full md:w-[320px] group cursor-pointer rounded-lg px-4 py-3 bg-white hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col gap-2 w-full mt-2">
        <p className="text-sm font-semibold text-gray-800 flex items-center">
          <FaUser className="mr-2 text-xl" /> {applicant?.name}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaLanguage className="mr-2 text-xl" /> German Level - {applicant?.germanLanguageLevel}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaEnvelope className="mr-2 text-xl" /> {applicant?.email}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaPhone className="mr-2 text-xl" /> {applicant?.phone}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaBriefcase className="mr-2 text-xl" /> {applicant?.workExperience === 0 ? "No Work Experience" : applicant?.workExperience} Years
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaMapMarkerAlt className="mr-2 text-xl" /> {applicant?.location}
        </p>
      </div>
      <div className="flex justify-center items-center w-full py-1">
        <p className="italic underline cursor-pointer text-blue-500 hover:text-blue-600">View Resume</p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center rounded-md w-full mt-3">
        <button
          onClick={handleShortListed}
          className="flex items-center justify-center py-2 px-4 text-white rounded-md bg-green-600 hover:bg-green-500 transition-colors duration-200 gap-2 w-full"
        >
          Shortlist
          <FaCheck />
        </button>
        <button
          onClick={handleReject}
          className="flex items-center justify-center py-2 px-4 text-white rounded-md bg-red-600 hover:bg-red-500 transition-colors duration-200 gap-2 w-full"
        >
          Reject
          <MdNotInterested />
        </button>
      </div>
    </div>
  );
};

export default ApplicationCard;
