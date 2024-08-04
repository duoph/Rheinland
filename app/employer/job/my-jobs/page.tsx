"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployerJobCard from "@/components/Employer/EmployerJobCard";

const ITEMS_PER_PAGE = 9;

const MyJobs = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data } = await axios.get('/api/job');
      if (data.success) {
        setJobs(data.jobs);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const currentPage = 0; // Static page view since pagination is removed
  const offset = currentPage * ITEMS_PER_PAGE;
  const displayedJobs = jobs.slice(offset, offset + ITEMS_PER_PAGE);

  return (
    <div className="pt-[95px] flex flex-col items-center gap-5">
      <h1 className="font-semibold text-[30px]">My Jobs</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-5 justify-center">
          {displayedJobs.length > 0 ? (
            displayedJobs.map((job, index) => (
              <EmployerJobCard key={index} />
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
