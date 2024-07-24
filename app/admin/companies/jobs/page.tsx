"use client";

import React, { useState } from "react";
import JobsCard from "@/components/Admin/Companies/Jobs/JobsCard";

const candidates = Array(20).fill(null);

function CompaniesPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentCandidates = candidates.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(candidates.length / itemsPerPage);

  return (
    <div className="pt-[95px] flex gap-5 flex-col items-center">
      <h1 className="font-semibold text-[30px]">Jobs Posted by Companies</h1>
      <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
        {currentCandidates.map((_, index) => (
          <JobsCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default CompaniesPage;
