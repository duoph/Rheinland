"use client";

import { Job } from "@/types";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { format } from "date-fns";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { HiBookmark, HiOutlineBanknotes, HiOutlineBookmark } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";
import { Skeleton } from "@/components/ui/skeleton";
import RelatedJobs from "@/components/RelatedJobs/RelatedJobs";
import toast from "react-hot-toast";

const SingleJobPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);

  const formattedDate = job?.createdAt ? format(new Date(job.createdAt), "dd/MM/yyyy") : "Date data failed to load";

  // Fetch job by ID
  const fetchJob = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/job/${jobId}`);
      if (res.data.success) {
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

  // Fetch related jobs
  const fetchRelatedJobs = async () => {
    try {
      const res = await axios.get(`/api/job`);
      if (res.data.success) {
        setJobs(res.data.jobs);
      } else {
        setError("Failed to load related jobs.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching related jobs.");
    }
  };

  // Fetch user data for saved jobs
  const fetchUser = async () => {
    try {
      const res = await axios.get('/api/user');
      setSavedJobs(res.data.user.savedJobs.map((job: Job) => job._id));
      console.log(res.data.user.savedJobs);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Handle saving or unsaving a job
  const handleSave = async () => {
    if (!job) return;

    try {
      await axios.put(`/api/job/${job._id}/user/save`);
      if (savedJobs.includes(job._id)) {
        setSavedJobs((prev) => prev.filter((id) => id !== job._id));
        toast.success("Job removed");
      } else {
        setSavedJobs((prev) => [...prev, job._id]);
        toast.success("Job saved");
      }

      fetchUser();
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  useEffect(() => {
    fetchJob();
    fetchRelatedJobs();
  }, [fetchJob]);

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-start gap-3 min-h-screen px-3 sm:px-5 pt-[90px]">
        <Skeleton className="w-full h-[40px] mb-3" />
        <div className="flex flex-row items-start w-full gap-5 flex-wrap">
          <Skeleton className="w-full h-[30px]" />
          <Skeleton className="w-[200px] h-[30px]" />
          <Skeleton className="w-[200px] h-[30px]" />
          <Skeleton className="w-[200px] h-[30px]" />
        </div>
        <Skeleton className="w-full h-[30px] mt-5 mb-3" />
        <Skeleton className="w-full h-[150px]" />
        <Skeleton className="w-[100px] h-[30px] mt-10" />
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
    <div className="relative min-h-screen flex flex-col gap-3 items-center justify-start px-3 sm:px-5 pb-[50px] pt-[90px]">
      <div className="flex items-start w-full">
        <h1 className="font-semibold text-[30px] md:text-[50px]">
          {job?.title}
        </h1>
      </div>

      <div className="flex flex-row items-start w-full gap-5 flex-wrap">
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
        <span className="flex gap-2 font-light">
          <HiOutlineBanknotes className="text-rheinland-red" size={24} />
          {job?.salary || "Salary not specified"}
        </span>
        <span className="flex gap-2 font-light">
          <SlCalender className="text-rheinland-red" size={24} />
          {formattedDate}
        </span>
        {(job?.minAge || job?.maxAge) && (
          <span className="flex gap-2 font-light">
            <MdAccessTime className="text-rheinland-red" size={24} /> Age: {job?.minAge} - {job?.maxAge}
          </span>
        )}
      </div>

      <div className="flex flex-col items-start justify-center w-full gap-3">
        <h1 className="font-medium">Preferred Skills</h1>
        <div className="font-light text-sm text-white flex flex-wrap gap-2 pb-3">
          {job?.skills?.length ? (
            job.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-3 bg-rheinland-blue rounded-sm"
              >
                {skill}
              </span>
            ))
          ) : (
            <span>No skills specified</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <h1 className="font-medium">Job Description</h1>
        <p className="font-light">
          {job?.description || "No description available"}
        </p>
      </div>

      <div className="w-full h-full flex items-center gap-5 justify-center py-10">
        <button className="bg-rheinland-red px-4 py-3 bottom-5 text-white rounded-sm">
          Apply Now
        </button>

        <div onClick={handleSave} className="cursor-pointer">
          {savedJobs.includes(job?._id || "") ? (
            <HiBookmark onClick={handleSave} className="text-[25px] text-rheinland-red cursor-pointer" />
          ) : (
            <HiOutlineBookmark className="text-[25px] text-rheinland-red cursor-pointer" onClick={handleSave} />
          )}
        </div>
      </div>

      {/* Related Jobs Section */}
      <RelatedJobs jobs={jobs} loading={loading} />
    </div>
  );
};

export default SingleJobPage;
