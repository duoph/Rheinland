"use client";

import { useAccount } from "@/context/useAccount";
import { Job } from "@/types";
import axios from "axios";
import { useParams } from "next/navigation";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { CiBookmark, CiBookmarkCheck, CiLocationOn } from "react-icons/ci";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

const SingleJobPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { account } = useAccount();

  const fetchJob = useCallback(async () => {
    try {
      const res = await axios.get(`/api/job/${jobId}`);
      console.log(jobId);
      if (res.data.success === true) {
        setJob(res.data.job);
      } else {
        setError("Failed to load job data.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching job data.");
    } finally {
      setLoading(false);
    }
  }, [jobId]);

  useEffect(() => {
    fetchJob();
  }, [fetchJob]);

  async function handleSave() {
    try {
      const res = await axios.post(`/api/job/${jobId}/user/save`);
      fetchJob();
      console.log(res);
    } catch (error) {
      console.error(error);
      setError("An error occurred while handling save job.");
    }
  }

  if (loading) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        {error}
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col gap-3 items-center justify-start px-3 sm:px-5 pt-[90px]">
      <div className="flex items-start justify-between w-full">
        <h1 className="font-semibold text-[30px] md:text-[50px]">
          {job?.title}
        </h1>
        <div onClick={() => handleSave()} className="cursor-pointer">
          {job?.savedUsers?.includes(account.id) ? (
            <CiBookmarkCheck className="text-red-500" size={30} />
          ) : (
            <CiBookmark className="text-red-500" size={30} />
          )}
        </div>
      </div>

      <div className="flex flex-row items-start  w-full gap-2">
        <span className="flex gap-2 font-light">
          <PiSuitcaseSimpleFill className="text-rheinland-red" size={24} />
          {job?.category || "Unable to load category"}
        </span>
        <span className="flex gap-2 font-light">
          <CiLocationOn className="text-rheinland-red" size={24} />
          {job?.location || "Location not specified"}
        </span>
        <span className="flex gap-2 font-light">
          <CiUser className="text-rheinland-red" size={24} />
          {job?.gender || "Gender data failed to load"}
        </span>
      </div>

      <div className="flex flex-col items-start justify-center w-full gap-2">
        <h1 className="font-medium">Salary</h1>
        <span className="flex gap-2 font-light">Undefined</span>
      </div>

      {(job?.minAge || job?.minAge) && (
        <div className="flex flex-col items-start justify-center w-full gap-2">
          <h1 className="font-medium">Prefered Age</h1>
          <span className="flex flex-col gap-2 text-sm font-light">
            <span>Minimum - {job?.minAge}</span>
            <span>Maximum - {job?.maxAge}</span>
          </span>
        </div>
      )}

      <div className="flex flex-col items-start justify-center w-full gap-3">
        <h1 className="font-medium">Preferred Skills</h1>
        <div className="font-light text-sm text-white flex gap-2 flex-wrap pb-3">
          {job?.skills?.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-3 bg-rheinland-blue rounded-sm cursor-pointer"
            >
              {skill}
            </span>
          )) || <span>No skills specified</span>}
        </div>
      </div>

      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <h1 className="font-medium">Job Description</h1>
        <p className="font-light">
          {job?.description || "No description available"}
        </p>
      </div>

      <div className="w-full h-full flex justify-center py-10">
        <button className="bg-rheinland-red px-4 py-3 bottom-5 text-white rounded-sm">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default SingleJobPage;
