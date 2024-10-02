"use client";

import { Job } from "@/types";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
// import { HiOutlineBookmark, HiBookmark } from "react-icons/hi2";
import { Skeleton } from "./ui/skeleton";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useAccount } from "@/context/useAccount";
// import { useRouter } from "next/navigation";

interface JobCardProps {
  job: Job | null;
  isLoading?: boolean;
  reFectch?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, isLoading, reFectch }) => {
  // const [savedJobs, setSavedJobs] = useState<string[]>([]);
  // const { account } = useAccount();

  // Helper function to update local storage
  // const updateSavedJobsCache = (jobs: string[]) => {
  //   localStorage.setItem("savedJobs", JSON.stringify(jobs));
  // };

  // Fetch saved jobs either from API or localStorage
  // const fetchUserSavedJobs = async () => {
  //   if (account.token) {
  //     try {
  //       const res = await axios.get('/api/user');
  //       const userSavedJobs = res?.data?.user?.savedJobs?.map((job: Job) => job._id) || [];
  //       // setSavedJobs(userSavedJobs);
  //       // updateSavedJobsCache(userSavedJobs);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   } else {
  //     const cachedSavedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
  //     // setSavedJobs(cachedSavedJobs);
  //   }
  // };

  // useEffect(() => {
  //   fetchUserSavedJobs();
  // }, [account.token]);

  // const handleSave = async (e: React.MouseEvent<SVGElement>) => {
  //   e.stopPropagation();
  //   if (!job) return;

  //   if (!account.token) {
  //     toast.error("Please login to save job");
  //     router.push('/login');
  //     return;
  //   }

  //   try {
  //     const response = await axios.put(`/api/job/${job._id}/user/save`);

  //     if (savedJobs.includes(job._id)) {
  //       setSavedJobs((prev) => prev.filter((id) => id !== job._id));
  //       toast.success("Job Removed");
  //     } else {
  //       setSavedJobs((prev) => [...prev, job._id]);
  //       toast.success("Job Saved");
  //     }

  //     // Update local storage cache
  //     updateSavedJobsCache(savedJobs);

  //     if (reFectch) {
  //       reFectch();
  //     }
  //   } catch (error) {
  //     console.error('Error saving job:', error);
  //   }
  // };

  // Render skeleton while loading
  if (isLoading) {
    return (
      <div className="border shadow-sm border-opacity-35 flex flex-col items-start justify-between md:min-w-[320px] w-full md:max-w-[320px] min-h-[250px] max-h-[250px] group cursor-pointer rounded-sm px-3 py-2">
        {/* Loading Skeleton */}
        <div className="flex justify-between items-center w-full py-2">
          <Skeleton className="w-[60px] h-[60px]" />
          <Skeleton className="w-[70px] h-[30px]" />
        </div>
        <Skeleton className="w-full h-[20px] mb-2" />
        <div className="flex flex-row items-center justify-between gap-2 w-full">
          <Skeleton className="w-[20px] h-[20px]" />
          <Skeleton className="w-[100px] h-[20px]" />
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
    <div className="border shadow-sm border-opacity-35 flex flex-col items-start justify-between md:min-w-[320px] w-full md:max-w-[320px] min-h-[200px] max-h-[200px] group rounded-sm px-3 py-2 cursor-pointer">
      <Link href={`/jobs/${job._id}`} className="w-full">
        <div className="flex flex-col w-full py-2 space-y-2">
          <span className="text-lg font-semibold text-gray-800">{job.title}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600 gap-2">
          <CiLocationOn />
          {job.location}
        </div>
        <div className="h-[80px] w-full py-2">
          <p
            className="font-light text-sm text-gray-700 overflow-hidden"
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
        {/* {savedJobs.includes(job._id) ? (
          <HiBookmark onClick={handleSave} className="text-[25px] text-rheinland-red cursor-pointer" />
        ) : (
          <HiOutlineBookmark className="text-[25px] text-rheinland-red cursor-pointer" onClick={handleSave} />
        )} */}
      </div>
    </div>
  );
};

export default JobCard;
