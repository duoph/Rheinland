"use client";

import React, { useState } from "react";
import SavedJobsCard from "@/components/Candidates/Jobs/SavedJobsCard";

const candidates = Array(20).fill(null);

function SavedJobs() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const offset = currentPage * itemsPerPage;
  const currentCandidates = candidates.slice(offset, offset + itemsPerPage);

  return (
    <div className="pt-[95px] flex flex-col items-center">
      <h1 className="font-semibold text-[30px]">Saved Jobs</h1>
      <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
        {currentCandidates.map((_, index) => (
          <SavedJobsCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default SavedJobs;
