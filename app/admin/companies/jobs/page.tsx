"use client";

import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import JobsCard from "@/components/Admin/Companies/Jobs/JobsCard";

const ApplicationPage = () => {
  const [jobsToDisplay, setJobsToDisplay] = useState<number>(16);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [applicants, setApplicants] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedJobType, setSelectedJobType] = useState<string>("all");

  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/job");
      const data = await response.json();
      setApplicants(data);
      setSearchResults(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching Jobs:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleLoadMore = () => {
    setJobsToDisplay((prev) => prev + 18);
  };

  // const displayedJobs = searchResults?.slice(0, jobsToDisplay);

  return (
    <div className="pt-[95px] flex flex-col gap-5 items-center px-3 pb-10">
      <h1 className="font-semibold text-[30px]">
        All Job Posts from Companies
      </h1>

      <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-5 rounded-md pt-3 px-5 md:px-10 w-full text-[15px] flex-wrap">
        <span
          onClick={() => setSelectedJobType("all")}
          className={`px-2 py-2 rounded-md cursor-pointer border ${
            selectedJobType === "all" ? "bg-rheinland-red text-white" : ""
          }`}
        >
          All
        </span>
        <span
          onClick={() => setSelectedJobType("approved")}
          className={`px-3 py-2 rounded-md cursor-pointer border ${
            selectedJobType === "approved" ? "bg-rheinland-red text-white" : ""
          }`}
        >
          Approved Jobs
        </span>
        <span
          onClick={() => setSelectedJobType("rejected")}
          className={`px-3 py-2 rounded-md cursor-pointer border ${
            selectedJobType === "rejected" ? "bg-rheinland-red text-white" : ""
          }`}
        >
          Rejected Jobs
        </span>
      </div>

      <div className="rounded-md flex items-center justify-center cursor-pointer gap-3 bg-rheinland-red pr-3 w-full lg:w-1/2 md:w-2/3">
        <input
          type="text"
          placeholder="Name,Job,Location"
          className="border px-4 py-4 rounded-md w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CiSearch className="rounded-md text-[30px] cursor-pointer text-white" />
      </div>

      <div className="flex items-center justify-center flex-wrap gap-3">
        {isLoading
          ? Array.from({ length: 18 }).map((_, index) => (
              <JobsCard key={index} />
            ))
          : Array.from({ length: 18 })?.map((applicant, index) => (
              <JobsCard key={index} />
            ))}
      </div>

      {/* {displayedJobs?.length > 0 && applicants?.length > jobsToDisplay && ( */}
      <button
        onClick={handleLoadMore}
        className="w-[200px] bg-rheinland-red text-white rounded-sm px-3 py-3"
      >
        Load more
      </button>
      {/* )} */}
    </div>
  );
};

export default ApplicationPage;
