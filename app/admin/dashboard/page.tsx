"use client";

import React, { useState, useEffect } from "react";
import ApplicationCard from "@/components/ApplicationCard";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import AdminJobCard from "@/components/Admin/AdminJobCard";

const AdminDashboard = () => {
  const [applicantsToDisplay, setApplicantsToDisplay] = useState<number>(16);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [applicants, setApplicants] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedApplicantsType, setSelectedApplicantsType] = useState<string>('all');

  const fetchApplications = async () => {
    try {
      const response = await axios.get("/api/job/appliedJobs");
      setApplicants(response.data.appliedJobs);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching applications:", error);
      setIsLoading(false);
    }
  };

  const fetchAllJobs = async () => {
    try {
      const response = await axios.get("/api/job/");
      setJobs(response.data.jobs);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllJobs();
    fetchApplications();
  }, []);

  useEffect(() => {
    if (selectedApplicantsType === 'all') {
      setSearchResults(applicants);
    } else {
      setSearchResults(applicants.filter(applicant => applicant.status === selectedApplicantsType));
    }
  }, [selectedApplicantsType, applicants]);

  useEffect(() => {
    if (search) {
      setSearchResults(prevResults => prevResults.filter(applicant => 
        applicant.name.toLowerCase().includes(search.toLowerCase()) ||
        applicant.job.toLowerCase().includes(search.toLowerCase()) ||
        applicant.location.toLowerCase().includes(search.toLowerCase())
      ));
    } else {
      setSearchResults(applicants);
    }
  }, [search]);

  const handleLoadMore = () => {
    setApplicantsToDisplay(prev => prev + 18);
  };

  const displayedApplicants = searchResults.slice(0, applicantsToDisplay);

  return (
    <div className="pt-[95px] flex flex-col gap-5 items-center px-3 pb-10">
      <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-5 rounded-md pt-3 px-5 md:px-10 w-full text-[15px] flex-wrap">
        <span
          onClick={() => setSelectedApplicantsType('all')}
          className={`px-2 py-2 rounded-md cursor-pointer border ${selectedApplicantsType === 'all' ? 'bg-rheinland-red text-white' : ''}`}
        >
          All
        </span>
        <span
          onClick={() => setSelectedApplicantsType('jobs')}
          className={`px-3 py-2 rounded-md cursor-pointer border ${selectedApplicantsType === 'jobs' ? 'bg-rheinland-red text-white' : ''}`}
        >
          Jobs
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

      <div className='rounded-md flex items-center justify-center cursor-pointer gap-3 bg-rheinland-red pr-3 w-full lg:w-1/2 md:w-2/3'>
        <input
          type='text'
          placeholder='Name, Job, Location'
          className='border px-4 py-4 rounded-md w-full'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CiSearch className='rounded-md text-[30px] cursor-pointer text-white' />
      </div>

      {selectedApplicantsType === 'jobs' && (
        <div className="flex items-center justify-center flex-wrap gap-3">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <AdminJobCard key={index} job={job} />
            ))
          ) : (
            <p>No jobs available</p>
          )}
        </div>
      )}

      {selectedApplicantsType !== 'jobs' && (
        <div className="flex items-center justify-center flex-wrap gap-3">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            displayedApplicants.map((applicant, index) => (
              <ApplicationCard key={index} applicant={applicant} />
            ))
          )}
        </div>
      )}

      {displayedApplicants?.length > 0 && applicants?.length > applicantsToDisplay && (
        <button onClick={handleLoadMore} className="w-[200px] bg-rheinland-red text-white rounded-sm px-3 py-3">
          Load more
        </button>
      )}
    </div>
  );
};

export default AdminDashboard;
