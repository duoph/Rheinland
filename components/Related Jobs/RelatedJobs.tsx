"use client";

import React, { useEffect, useState } from "react";
import { Job } from "@/types";
import JobCard from "../JobCard";
import axios from "axios";

function RelatedJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchJobs = async () => {
    try {
      const { data } = await axios.get("/api/job");
      if (data.success) {
        setJobs(data.jobs);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
 
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-semibold">Related Jobs</h1>

      <div className="w-full gap-2 flex flex-col flex-wrap md:flex-row justify-center items-center">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <JobCard key={index} isLoading={isLoading} job={null} />
            ))
          : jobs
              .slice(0, 4)
              .map((job, index) => (
                <JobCard key={index} isLoading={isLoading} job={job} />
              ))}
      </div>
    </>
  );
}

export default RelatedJobs;
