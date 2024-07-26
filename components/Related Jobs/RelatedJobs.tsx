"use client";

import React, { useEffect, useState } from "react";
import RelatedJobCard from "./Related Job Card/RelatedJobCard";
import { Job } from "@/types";

function RelatedJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobsToDisplay, setJobsToDisplay] = useState<number>(10);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      <h1 className="text-2xl font-semibold">Related Jobs</h1>
      <div className="bg-[#f0f8ff] w-full p-5 md:p-20 lg:1/3 flex flex-row md:flex-col justify-center items-center">
        <div className="flex items-start w-full ">
          <RelatedJobCard />
        </div>
      </div>
    </>
  );
}

export default RelatedJobs;
