"use client";

import React, { useState } from "react";
import { MdNotInterested } from "react-icons/md";
import { FaCheck, FaPhone, FaUser, FaEnvelope, FaLanguage } from "react-icons/fa";
import { Skeleton } from "./ui/skeleton";
import toast from "react-hot-toast";
import Link from "next/link";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";

interface Applicant {
  _id: string;
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  germanLanguageLevel: string;
  location: string;
  resumeURL?: string;
}

interface ApplicationCardProps {
  applicant: Applicant;
  isLoading: boolean;
  jobId: string;
  isShortlisted: boolean;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({
  applicant,
  isLoading,
  jobId,
  isShortlisted,
}) => {
  const [isShortlisting, setIsShortlisting] = useState(false);
  const [shortlisted, setShortlisted] = useState(isShortlisted);

  const handleShortlistToggle = async () => {
    setIsShortlisting(true);
    try {
      const response = shortlisted
        ? await axios.delete(`/api/admin/job/${jobId}/shortlist-users`, {
            data: { userId: applicant._id },
          })
        : await axios.put(`/api/admin/job/${jobId}/shortlist-users`, {
            userId: applicant._id,
          });

      if (response.data.success) {
        setShortlisted(!shortlisted);
        toast.success(
          shortlisted ? "Removed from shortlist" : "Added to shortlist"
        );
      } else {
        toast.error("Unable to update shortlist status.");
      }
    } catch (error) {
      console.error("Shortlist toggle error:", error);
      toast.error("An error occurred while updating the shortlist status.");
    } finally {
      setIsShortlisting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="border shadow-sm border-opacity-35 flex flex-col items-start justify-between w-full md:w-[320px] group cursor-pointer rounded-sm px-4 py-3 bg-white">
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
    <div className="border shadow-md border-gray-300 flex flex-col items-start justify-between w-full md:w-[320px] group cursor-pointer rounded-sm px-4 py-3 bg-white hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col gap-2 w-full mt-2">
        <p className="text-sm font-semibold text-gray-800 flex items-center">
          <FaUser className="mr-2 text-xl" /> {applicant.name || "N/A"}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaEnvelope className="mr-2 text-xl" /> {applicant.email || "N/A"}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaPhone className="mr-2 text-xl" /> {applicant.countryCode} {applicant.phone || "N/A"}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FaLanguage className="mr-2 text-xl" /> German Level: {applicant.germanLanguageLevel || "N/A"}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <IoLocationSharp className="mr-2 text-xl" /> {applicant.location || "N/A"}
        </p>
      </div>
      {applicant.resumeURL ? (
        <div className="flex justify-center items-center w-full py-1">
          <Link target="_blank" href={applicant.resumeURL}>
            <span className="italic underline cursor-pointer text-blue-500 hover:text-blue-600">
              View Resume
            </span>
          </Link>
        </div>
      ) : (
        <p className="text-sm text-gray-500 italic">No resume available</p>
      )}
      <div className="flex flex-col gap-2 items-center justify-center rounded-md w-full mt-3">
        <button
          onClick={handleShortlistToggle}
          disabled={isShortlisting}
          className={`flex items-center justify-center py-2 px-4 text-white rounded-md ${
            isShortlisting
              ? "bg-gray-400 cursor-not-allowed"
              : shortlisted
              ? "bg-red-600 hover:bg-red-500"
              : "bg-green-600 hover:bg-green-500"
          } transition-colors duration-200 gap-2 w-full`}
        >
          {isShortlisting ? "Processing..." : shortlisted ? "Remove from Shortlist" : "Shortlist"}
          {!isShortlisting && (shortlisted ? <MdNotInterested /> : <FaCheck />)}
        </button>
      </div>
    </div>
  );
};

export default ApplicationCard;
