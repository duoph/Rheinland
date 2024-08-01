"use client";

import React, { useEffect, useState } from "react";
import { Job } from "@/types";
import JobCard from "../JobCard";
import axios from "axios";


interface RelatedJobsProps {
  jobs: Job[];
  loading: boolean;
}


function RelatedJobs({ jobs, loading }: RelatedJobsProps) {

  return (
    <>
      <h1 className="text-2xl font-semibold">Related Jobs</h1>

      <div className="w-full gap-2 flex flex-col flex-wrap md:flex-row justify-center items-center">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
            <JobCard key={index} job={null} />
          ))
          : jobs
            .slice(0, 4)
            .map((job, index) => (
              <JobCard key={index} isLoading={loading} job={job} />
            ))}
      </div>
    </>
  );
}

export default RelatedJobs;
