"use client";

import React from "react";
import { Job } from "@/types";
import JobCard from "../JobCard";

interface RelatedJobsProps {
  jobs: Job[];
  loading: boolean;
  pageJobId?: string;
}

function shuffleArray(array: Job[]) {
  return array.sort(() => Math.random() - 0.5);
}

function RelatedJobs({ jobs, loading, pageJobId }: RelatedJobsProps) {

  const filteredJobs = jobs.filter((job) => job._id !== pageJobId);
  const shuffledJobs = shuffleArray(filteredJobs);

  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full">
      <h1 className="text-3xl text-center font-semibold w-full">More Jobs For You</h1>

      <div className="w-full gap-2 flex flex-col flex-wrap md:flex-row justify-center items-center">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <JobCard key={index} job={null} isLoading={true} />
          ))
        ) : shuffledJobs.length === 0 ? (
          <p>No related jobs available</p>
        ) : (
          shuffledJobs.slice(0, 4).map((job) => (
            <JobCard key={job._id} isLoading={loading} job={job} />
          ))
        )}
      </div>
    </div>
  );
}

export default RelatedJobs;
