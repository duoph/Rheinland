"use client";

import React, { useState } from "react";
import AppliedJobsCard from "@/components/Candidates/Jobs/AppliedJobsCard";

const candidates = Array(20).fill(null);

function AppliedJobs() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const offset = currentPage * itemsPerPage;
  const currentCandidates = candidates.slice(offset, offset + itemsPerPage);

  return (
    <div className="pt-[95px] flex flex-col items-center">
      <h1 className="font-semibold text-[30px]">My Applications</h1>
      <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
        {currentCandidates.map((_, index) => (
          <AppliedJobsCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default AppliedJobs;
