"use client";

import React from "react";
import { Job } from "@/types";
import JobCard from "../JobCard";

interface RelatedJobsProps {
  jobs: Job[];
  loading: boolean;
  pageJobId?: string;
}

function RelatedJobs({ jobs, loading, pageJobId }: RelatedJobsProps) {

  const filteredJobs = jobs.filter((job) => job._id !== pageJobId);

  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full">
      <h1 className="text-3xl text-center font-semibold w-full">Related Jobs</h1>

      <div className="w-full gap-2 flex flex-col flex-wrap md:flex-row justify-center items-center">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <JobCard key={index} job={null} isLoading={true} />
          ))
        ) : filteredJobs.length === 0 ? (
          <p>No related jobs available</p>
        ) : (
          filteredJobs.slice(0, 4).map((job) => (
            <JobCard key={job._id} isLoading={loading} job={job} />
          ))
        )}
      </div>
    </div>
  );
}

export default RelatedJobs;
