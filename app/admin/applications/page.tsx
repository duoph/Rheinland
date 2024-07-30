"use client";

import React, { useState, useEffect } from "react";
import ApplicationCard from "@/components/ApplicationCard";

const ApplicationPage = () => {
  const [applicantsToDisplay, setApplicantsToDisplay] = useState<number>(16);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [applicants, setApplicants] = useState<any[]>([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedApplicantsType, setSelectedApplicantsType] = useState<string>('all');


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

      <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-5 rounded-md pt-3 px-5 md:px-10 w-full text-[15px] flex-wrap">
        <span
          onClick={() => setSelectedApplicantsType('all')}
          className={`px-2 py-2 rounded-md cursor-pointer border ${selectedApplicantsType === 'all' ? 'bg-rheinland-red text-white' : ''}`}
        >
          All
        </span>
        <span
          onClick={() => setSelectedApplicantsType('shortListed')}
          className={`px-3 py-2 rounded-md cursor-pointer border ${selectedApplicantsType === 'shortListed' ? 'bg-rheinland-red text-white' : ''}`}
        >
          Short Listed Applicants
        </span>
        <span
          onClick={() => setSelectedApplicantsType('contacted')}
          className={`px-3 py-2 rounded-md cursor-pointer border ${selectedApplicantsType === 'contacted' ? 'bg-rheinland-red text-white' : ''}`}
        >
          Contacted Applicants
        </span>
        <span
          onClick={() => setSelectedApplicantsType('rejected')}
          className={`px-3 py-2 rounded-md cursor-pointer border ${selectedApplicantsType === 'rejected' ? 'bg-rheinland-red text-white' : ''}`}
        >
          Rejected Applicants
        </span>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-3">
        {isLoading
          ? Array.from({ length: 18 }).map((_, index) => (
            <ApplicationCard key={index} />
          ))
          : Array.from({ length: 18 })?.map((applicant, index) => (
            <ApplicationCard key={index} isLoading={isLoading} />
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
