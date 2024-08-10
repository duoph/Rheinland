"use client";

import { Job } from "@/types";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { HiBookmark, HiOutlineBanknotes, HiOutlineBookmark } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";
import { useAccount } from "@/context/useAccount";
import RelatedJobs from "@/components/RelatedJobs/RelatedJobs";


const SingleJobPage = () => {

  const { account } = useAccount();

  const { jobId } = useParams();

  const [job, setJob] = useState<Job | null>(null);
  const [relatedJobs, setRelatedJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);
  const [applying, setApplying] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showMoreSkills, setShowMoreSkills] = useState(false);

  const formattedDate = job?.createdAt ? format(new Date(job.createdAt), "dd/MM/yyyy") : "Date data failed to load";

  const fetchData = async () => {
    setLoading(true);
    try {
      if (account?.token) {
        const userRes = await axios.get("/api/user");

        if (userRes.data.success) {
          setSavedJobs(userRes.data.user.savedJobs?.map((job: Job) => job._id) || []);
          setAppliedJobs(userRes.data.user.appliedJobs?.map((job: Job) => job._id) || []);
        } else {
          console.error("Failed to load user data:", userRes.data.message);
        }
      }


      const relatedJobsRes = await axios.get(`/api/job`);
      if (relatedJobsRes.data.success) {
        setRelatedJobs(relatedJobsRes.data.jobs);
      } else {
        setError("Failed to load job data.");
      }




      const jobRes = await axios.get(`/api/job/${jobId}`);
      if (jobRes.data.success) {
        setJob(jobRes.data.job);
      } else {
        setError("Failed to load job data.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  const handleSave = async () => {
    if (!job) return;

    if (!account.token) {
      toast.error("Login to save job");
      return;
    }

    try {
      const response = await axios.put(`/api/job/${job._id}/user/save`);

      if (response.data.success) {
        setSavedJobs((prev) =>
          savedJobs.includes(job._id)
            ? prev.filter((id) => id !== job._id)
            : [...prev, job._id]
        );
        toast.success(savedJobs.includes(job._id) ? "Job removed" : "Job saved");
      } else {
        toast.error("Error saving job");
      }
    } catch (error) {
      toast.error("Error saving job");
      console.error("Error saving job:", error);
    }
  };

  const handleApply = async () => {
    if (!job) return;

    setApplying(true);
    try {
      const response = await axios.put(`/api/job/${jobId}/user/apply`, null, {
        headers: {
          Authorization: `Bearer ${account.token}`,
        },
      });

      if (response.data.success) {
        toast.success("Applied");
        setAppliedJobs((prev: any) => [...prev, jobId]);
      } else {
        toast.error("Failed to apply");
      }
    } catch (error) {
      toast.error("Error applying job");
      console.error("Error applying job:", error);
    } finally {
      setApplying(false);
    }
  };

  // Function to format text with line breaks
  const formatTextWithLineBreaks = (text: any) => {
    return text.replace(/\n/g, '<br>');
  };


  const isJobApplied = job && appliedJobs.includes(job._id);

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
      <div className="flex flex-col items-center justify-center min-h-screen px-3 sm:px-5 pt-[90px]">
        <h1 className="text-red-500 text-lg">{error}</h1>
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
        {/* <h1 className="font-medium">Preferred Skills</h1> */}
        <div className="font-light text-sm text-white flex flex-wrap gap-2 py-3">

          {job?.skills && job.skills.length > 0 ? (
            <>
              {job.skills
                .filter(skill => skill !== "")
                .slice(0, showMoreSkills ? undefined : 10)
                .map((skill, index) => (
                  <span key={index} className="px-3 py-3 bg-rheinland-blue rounded-sm">
                    {skill}
                  </span>
                ))}
              {job.skills.length > 10 && (
                <button className="text-rheinland-red font-light underline px-3 py-3" onClick={() => setShowMoreSkills(!showMoreSkills)}>
                  {showMoreSkills ? "Show Less" : "Show More"}
                </button>
              )}
            </>
          ) : (
            <p>No skills listed</p>
          )}

        </div>

        <div className="flex flex-col gap-2 items-start justify-center w-full">
          {/* <h1 className="font-medium">Job Description</h1> */}
          <p className="font-light" dangerouslySetInnerHTML={{ __html: formatTextWithLineBreaks(job?.description || "No description available") }} />
        </div>

        <div className="w-full h-full flex items-center gap-5 justify-center py-10">
          <button
            onClick={handleApply}
            disabled={applying || isJobApplied || !account?.token} // Disable button if not logged in
            className={`bg-rheinland-red px-4 py-3 text-white rounded-sm ${applying || isJobApplied || !account?.token ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {applying ? "Applying..." : isJobApplied ? "Applied" : !account?.token ? "Login to Apply" : "Apply Now"}
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
        <RelatedJobs jobs={relatedJobs} loading={loading} />
      </div>

    </div>
  );
};

export default SingleJobPage;
