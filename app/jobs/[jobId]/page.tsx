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
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);
  const [applying, setApplying] = useState<boolean>(false);

  const formattedDate = job?.createdAt ? format(new Date(job.createdAt), "dd/MM/yyyy") : "Date data failed to load";

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const jobRes = await axios.get(`/api/job/${jobId}`);
      console.log(jobRes.data);
      const relatedJobsRes = await axios.get(`/api/job`);
      const userRes = await axios.get('/api/user');

      if (jobRes.data.success && relatedJobsRes.data.success && userRes.data.success) {
        setJob(jobRes.data.job);
        setJobs(relatedJobsRes.data.jobs);
        setSavedJobs(userRes.data.user.savedJobs.map((job: Job) => job._id));
        setAppliedJobs(userRes.data.user.appliedJobs.map((job: Job) => job._id));
      } else {
        setError("Failed to load data.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  }, [jobId]);

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
    } catch (error) {
      toast.error("Error saving job");
      console.error('Error saving job:', error);
    }
  };

  const handleApply = async () => {
    if (!job) return;

    setApplying(true);
    try {
      const response = await axios.put(`/api/job/${jobId}/user/apply`);
      if (response.data.success) {
        toast.success("Applied");
        setAppliedJobs((prev: any) => [...prev, jobId]); // Update appliedJobs state
      } else {
        toast.error("Failed to apply");
      }
    } catch (error) {
      toast.error("Error applying job");
      console.error('Error applying job:', error);
    } finally {
      setApplying(false);
    }
  };

  const isJobApplied = job && appliedJobs.includes(job._id);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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





      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <h1 className="font-medium">Job Description</h1>
        <p className="font-light">
          {job?.description || "No description available"}
        </p>
      </div>

      {job?.skills && job.skills.length > 0 ? (
        job.skills.map((skill, index) => (
          <span key={index} className="px-3 py-3 bg-rheinland-blue rounded-sm">
            {skill === "" && null}
          </span>
        ))
      ) : (
        <span>No skills specified</span>
      )}

      <div className="w-full h-full flex items-center gap-5 justify-center py-10">
        <button
          onClick={handleApply}
          disabled={applying as boolean || isJobApplied as boolean}
          className={`bg-rheinland-red px-4 py-3 text-white rounded-sm ${applying || isJobApplied ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {applying ? "Applying..." : isJobApplied ? "Applied" : "Apply Now"}
        </button>

        <div onClick={handleSave} className="cursor-pointer">
          {savedJobs.includes(job?._id || "") ? (
            <HiBookmark className="text-[25px] text-rheinland-red" />
          ) : (
            <HiOutlineBookmark className="text-[25px] text-rheinland-red" />
          )}
        </div>
      </div>

      {/* Related Jobs Section */}
      <RelatedJobs jobs={jobs} loading={loading} />
    </div>
  );
};

export default SingleJobPage;
