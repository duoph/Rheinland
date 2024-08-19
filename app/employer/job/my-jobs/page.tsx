'use client'

import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployerJobCard from "@/components/Employer/EmployerJobCard";
import { Job } from "@/types"; // Import the Job type

const MyJobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [jobsToDisplay, setJobsToDisplay] = useState<number>(16); // Set initial number to display

  const fetchJobs = async () => {
    try {
      const res = await axios.get('/api/job/employerJobs');
      setJobs(res.data.jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setJobs([]); // Set jobs to empty array on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleLoadMore = () => {
    setJobsToDisplay(prev => prev + 16);
  };

  const displayedJobs = jobs.slice(0, jobsToDisplay);

  return (
    <div className="pt-[95px] pb-10 flex flex-col items-center gap-5 px-5 md:px-10">
      <h1 className="font-semibold text-[30px]">My Jobs</h1>

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
      
      {!isLoading && displayedJobs.length < jobs.length && (
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
