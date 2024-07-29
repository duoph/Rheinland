"use client";

import React, { useState, useEffect } from "react";
import ApplicationCard from "@/components/ApplicationCard";

const ApplicationPage = () => {
  const [applicantsToDisplay, setApplicantsToDisplay] = useState<number>(16);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [applicants, setApplicants] = useState<any[]>([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/applications");
      const data = await response.json();
      setApplicants(data);
      setSearchResults(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching applications:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleLoadMore = () => {
    setApplicantsToDisplay((prev) => prev + 18);
  };

  const displayedApplicants = searchResults?.slice(0, applicantsToDisplay);

  return (
    <div className="pt-[95px] flex flex-col gap-5 items-center px-3 pb-10">
      <h1 className="font-semibold text-[30px]">All Applications</h1>

      <div className="flex items-center justify-center flex-wrap gap-3">
        {isLoading
          ? Array.from({ length: 18 }).map((_, index) => (
            <ApplicationCard key={index} />
          ))
          : Array.from({ length: 18 })?.map((applicant, index) => (
            <ApplicationCard key={index}  />
          ))}
      </div>

      {displayedApplicants?.length > 0 && applicants?.length > applicantsToDisplay && (
        <button onClick={handleLoadMore} className="w-[200px] bg-rheinland-red text-white rounded-sm px-3 py-3">
          Load more
        </button>
      )}


    </div>
  );
};

export default ApplicationPage;
