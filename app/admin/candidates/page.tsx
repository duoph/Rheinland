"use client"

import React, { useState } from "react";
import CandidateCard from "@/components/Candidates/CandidateCard";

const candidates = Array(20).fill(null); 

function CandidatesPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  // const handlePageClick = (data: { selected: number }) => {
  //   setCurrentPage(data.selected);
  // };

  const offset = currentPage * itemsPerPage;
  const currentCandidates = candidates.slice(offset, offset + itemsPerPage);
  // const pageCount = Math.ceil(candidates.length / itemsPerPage);

  return (
    <div className="py-[120px] flex flex-col items-center">
      <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
        {currentCandidates.map((_, index) => (
          <CandidateCard key={index} />
        ))}
      </div>
     
    </div>
  );
}

export default CandidatesPage;
