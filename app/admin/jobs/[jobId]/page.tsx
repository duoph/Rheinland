"use client";

import { Job } from "@/types";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";
import ApplicationCard from "@/components/ApplicationCard";

const SingleJobPage: React.FC = () => {
  const { jobId } = useParams() as { jobId: string };

  const [job, setJob] = useState<Job | null>(null);
  const [appliedUsers, setAppliedUsers] = useState<any>(null);
  const [shortlistedUsers, setShortlistedUsers] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedApplicantsType, setSelectedApplicantsType] =
    useState<string>("Applicants");
  const [showMoreSkills, setShowMoreSkills] = useState<boolean>(false);

  const router = useRouter();

  const formattedDate = job?.createdAt
    ? format(new Date(job.createdAt), "dd/MM/yyyy")
    : "Date data failed to load";

  const fetchData = async () => {
    setLoading(true);
    try {
      const jobRes = await axios.get(`/api/admin/job/${jobId}`);
      console.log(jobRes.data);
      if (jobRes.data.success) {
        setJob(jobRes.data.job);
        console.log(jobRes.data.job);
        setAppliedUsers(jobRes.data.job.appliedUsers);
        setShortlistedUsers(jobRes.data.job.shortlistedUsers);
      } else {
        toast.error("Failed to fetch job data");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while fetching job data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const candidatesToDisplay =
    selectedApplicantsType === "Applicants" ? appliedUsers : shortlistedUsers;

  // Function to format text with line breaks
  const formatTextWithLineBreaks = (text: string) => {
    return text.replace(/\n/g, "<br>");
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-start gap-3 min-h-screen px-3 sm:px-5 pt-[90px] pb-10">
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

  return (
    <div className="relative min-h-screen flex flex-col gap-3 items-center justify-start px-3 sm:px-5 pb-[50px] pt-[90px]">
      <div className="flex items-start w-full">
        <h1 className="font-semibold text-[30px] md:text-[50px]">
          {job?.title}
        </h1>
      </div>

      <span className="text-start font-light w-full">
        Posted by :{" "}
        <span
          onClick={() => router.push(`/admin/employers/${job?.employerId._id}`)}
          className="font-normal cursor-pointer underline"
        >
          {job?.employerId.employerName}
        </span>{" "}
      </span>

      <div className="flex flex-row items-start w-full gap-5 flex-wrap">
        <span className="flex gap-2 font-light">
          <PiSuitcaseSimpleFill className="text-rheinland-red" size={24} />
          {job?.jobType ? job.jobType : "Full Time"}
        </span>

        <span className="flex gap-2 font-light">
          <CiLocationOn className="text-rheinland-red" size={24} />
          {job?.location}
        </span>

        {job?.gender && job?.gender !== "Any" && (
          <span className="flex gap-2 font-light">
            <CiUser className="text-rheinland-red" size={24} />
            {job?.gender}
          </span>
        )}

        {job?.salary && (
          <span className="flex gap-2 font-light">
            <HiOutlineBanknotes className="text-rheinland-red" size={24} />
            {job?.salary}
          </span>
        )}

        <span className="flex gap-2 font-light">
          <SlCalender className="text-rheinland-red" size={24} />
          {formattedDate}
        </span>
      </div>

      <div className="flex flex-col items-start justify-center w-full gap-3">
        {job?.skills && (
          <div className="flex flex-col items-start justify-center w-full pt-2">
            <h3 className="font-semibold">Skills</h3>
            <div className="font-light text-sm text-white flex flex-wrap gap-2 py-3">
              {job.skills
                .filter((skill) => skill !== "")
                .slice(0, 10)
                .map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-3 bg-rheinland-blue rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        )}

        {job?.qualifications && (
          <div className="flex flex-col items-start justify-center w-full pt-2">
            <h3 className="font-semibold">Qualifications</h3>
            <div className="font-light text-sm text-white flex flex-wrap gap-2 py-3">
              {job.qualifications
                .filter((qualification) => qualification !== "")
                .slice(0, 10)
                .map((qualification, index) => (
                  <span
                    key={index}
                    className="px-3 py-3 bg-rheinland-blue rounded-sm"
                  >
                    {qualification}
                  </span>
                ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2 items-start justify-center w-full">
          <p
            className="font-light"
            dangerouslySetInnerHTML={{
              __html: formatTextWithLineBreaks(
                job?.description || "No description available"
              ),
            }}
          />
        </div>

        <div className="flex gap-3 flex-col items-center justify-center w-full py-10">
          <h1 className="text-3xl font-semibold text-center">Applications</h1>
          <div className="flex items-center justify-center gap-2 md:gap-5 lg:gap-10 rounded-md pt-3 px-5 md:px-10 w-full text-[15px] flex-wrap">
            <span
              onClick={() => setSelectedApplicantsType("Applicants")}
              className={`px-2 py-2 rounded-md cursor-pointer border ${
                selectedApplicantsType === "Applicants"
                  ? "bg-rheinland-red text-white"
                  : ""
              }`}
            >
              Applicants
            </span>

            <span
              onClick={() => setSelectedApplicantsType("shortlisted")}
              className={`px-3 py-2 rounded-md cursor-pointer border ${
                selectedApplicantsType === "shortlisted"
                  ? "bg-rheinland-red text-white"
                  : ""
              }`}
            >
              Shortlisted
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 w-full">
            {candidatesToDisplay.length > 0 ? (
              candidatesToDisplay.map((user: any) => (
                <ApplicationCard
                  jobId={jobId}
                  key={user._id}
                  applicant={user}
                  isShortlisted={selectedApplicantsType === "shortlisted"}
                />
              ))
            ) : (
              <p className="text-xl font-semibold">No candidates to display.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJobPage;
