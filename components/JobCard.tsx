"use client";

import { Job } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice2, HiOutlineBookmark, HiBookmark } from "react-icons/hi2";
import { Skeleton } from "./ui/skeleton";
import axios from "axios";
import toast from "react-hot-toast";
import { useAccount } from "@/context/useAccount";

interface JobCardProps {
  job: Job | null;
  isLoading?: boolean;
  reFectch?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, isLoading, reFectch }) => {

  const [savedJobs, setSavedJobs] = useState<string[]>([]);

  const { account } = useAccount()

  const fetchUser = async () => {
    if (!account.token) return

    try {
      const res = await axios.get('/api/user');
      setSavedJobs(res?.data?.user?.savedJobs?.map((job: Job) => job._id) || []);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    if (!account.token) return;
    fetchUser();
  }, []);

  const handleSave = async (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    if (!job) return;

    try {
      const response = await axios.put(`/api/job/${job._id}/user/save`);
      console.log(response?.data);

      if (savedJobs?.includes(job._id)) {
        setSavedJobs((prev) => prev.filter((id) => id !== job._id));
        toast.success("Job Removed");
      } else {
        setSavedJobs((prev) => [...prev, job._id]);
        toast.success("Job Saved");
      }
      if (reFectch) {
        reFectch();
      }
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };



  if (isLoading) {
    return (
      <div className="border shadow-sm border-opacity-35 flex flex-col items-start justify-between md:min-w-[320px] w-full md:max-w-[320px] min-h-[250px] max-h-[250px] group cursor-pointer rounded-sm px-3 py-2 hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <div className="flex justify-between items-center w-full py-2">
          <Skeleton className="w-[60px] h-[60px]" />
          <Skeleton className="w-[70px] h-[30px]" />
        </div>
        <Skeleton className="w-full h-[20px] mb-2" />
        <div className="flex flex-row items-center justify-between gap-2 w-full">
          <div className="flex flex-row items-center gap-2">
            <Skeleton className="w-[20px] h-[20px]" />
            <Skeleton className="w-[100px] h-[20px]" />
          </div>
          <div className="flex flex-row items-center gap-2">
            <Skeleton className="w-[20px] h-[20px]" />
            <Skeleton className="w-[100px] h-[20px]" />
          </div>
        </div>
        <Skeleton className="w-full h-[60px] mt-3" />
        <Skeleton className="w-[100px] h-[20px] mt-2" />
      </div>
    );
  }

  if (!job) {
    return null;
  }

  return (
    <div className="border shadow-sm border-opacity-35 flex flex-col items-start justify-between md:min-w-[320px] w-full md:max-w-[320px] min-h-[250px] max-h-[250px] group rounded-sm px-3 py-2 cursor-pointer  md:hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <Link href={`/jobs/${job._id}`} className="w-full">
        <div className="flex justify-between items-center w-full py-2">
          <Image
            src={"/RheinlandEnlarged.png"}
            alt="Logo"
            height={70}
            width={70}
          />
          <span className="border px-2 py-1 rounded-sm text-rheinland-blue border-rheinland-blue">
            Full Time
          </span>
        </div>
        <div className="flex justify-start items-center font-semibold gap-2 w-full">
          <span>{job.title}</span>
        </div>
        <div className="flex font-light text-sm gap-2 w-full py-1">
          <span className="flex items-center justify-center gap-[6px]">
            <CiLocationOn />
            {job.location}
          </span>
        </div>
        <div className="h-[80px] w-full py-1">
          <p
            className="font-light h-full overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
            }}
          >
            {job.description}
          </p>
        </div>
      </Link>
      <div className="pt-2 font-extralight flex items-end justify-between text-sm w-full">
        <span>{new Date(job.createdAt).toLocaleDateString()}</span>
        {savedJobs.includes(job._id) ? (
          <HiBookmark onClick={handleSave} className="text-[25px] text-rheinland-red cursor-pointer" />
        ) : (
          <HiOutlineBookmark className="text-[25px] text-rheinland-red cursor-pointer" onClick={handleSave} />
        )}
      </div>
    </div>
  );
};

export default JobCard;
