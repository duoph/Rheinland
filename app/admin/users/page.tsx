"use client"

import React, { useState } from "react";
import CandidateCard from "@/components/Admin/Candidates/CandidateCard";

const candidates = Array(20).fill(null);

function CandidatesPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const offset = currentPage * itemsPerPage;
  const currentCandidates = candidates.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(candidates.length / itemsPerPage);

  const handlePageClick = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="pt-[95px] flex flex-col items-center px-4">
      <h1 className="font-bold text-[32px] text-center mb-8">All Candidates</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {currentCandidates.map((_, index) => (
          <CandidateCard key={index} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index)}
            className={`px-4 py-2 rounded-md transition-colors ${currentPage === index
                ? "bg-rheinland-blue text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === pageCount - 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CandidatesPage;
