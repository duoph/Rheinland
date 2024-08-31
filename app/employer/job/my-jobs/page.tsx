'use client'

import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployerJobCard from "@/components/Employer/EmployerJobCard";
import { Job } from "@/types";
import { CiSearch } from "react-icons/ci";

const MyJobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Job[]>([]);
  const [jobsToDisplay, setJobsToDisplay] = useState<number>(16);

  const fetchJobs = async () => {
    try {
      const res = await axios.get('/api/job/employerJobs');
      setJobs(res.data.jobs);
      setSearchResults(res.data.jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setJobs([]);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    if (search) {
      const filteredJobs = jobs.filter(job =>
        job?.title.toLowerCase().includes(search.toLowerCase()) ||
        job?.description.toLowerCase().includes(search.toLowerCase()) ||
        job?.location.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(filteredJobs);
    } else {
      setSearchResults(jobs);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleLoadMore = () => {
    setJobsToDisplay(prev => prev + 16);
  };

  const displayedJobs = searchResults.slice(0, jobsToDisplay);

  return (
    <div className="pt-[95px] pb-10 flex flex-col items-center gap-5 px-5 md:px-10">
      <h1 className="font-semibold text-[30px]">My Jobs</h1>

      <div className='w-full flex flex-col items-center mb-3'>
        <div className='rounded-md flex items-center justify-center cursor-pointer gap-3 bg-rheinland-red pr-3 w-full lg:w-1/2 md:w-2/3 mb-4'>
          <input
            type='text'
            placeholder='Search by job title or location'
            className='border px-4 py-4 rounded-sm w-full outline-none focus:outline-none'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <CiSearch
            onClick={handleSearch}
            className=' text-[30px] cursor-pointer text-white rounded-sm'
          />
        </div>
      </div>

      <div className='flex items-center justify-center flex-wrap gap-3'>
        {isLoading
          ? Array.from({ length: 16 }).map((_, index) => (
            <EmployerJobCard key={index} loading={isLoading} job={undefined} />
          ))
          : displayedJobs.length > 0
            ? displayedJobs.map((job) => (
              <EmployerJobCard loading={isLoading} key={job._id} job={job} />
            ))
            : <p>No jobs available</p>
        }
      </div>

      {!isLoading && displayedJobs.length < searchResults.length && (
        <button
          onClick={handleLoadMore}
          className='w-[200px] bg-rheinland-red text-white rounded-sm px-3 py-3'
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default MyJobs;
