"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployerJobCard from "@/components/Employer/EmployerJobCard";
import { Job } from "@/types"; // Import the Job type

const MyJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchJobs = async () => {
    try {
      const res = await axios.get('/api/job/employerJobs');
      console.log(res.data.jobs);
      // if (res.data.success) {
      setJobs(res.data.jobs);
      // } 
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

  return (
    <div className="pt-[95px] pb-10 flex flex-col items-center gap-5 px-5 md:px-10">
      <h1 className="font-semibold text-[30px]">My Jobs</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-5 justify-center">
          {jobs?.length > 0 ? (
            jobs?.map((job) => (
              <EmployerJobCard key={job?._id} job={job} />
            ))
          ) : (
            <p>No jobs available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyJobs;