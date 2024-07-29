"use client";

import React, { useState } from "react";

import ApplicationCard from "@/components/ApplicationCard";

const candidates = Array(20).fill(null); // Assuming you have 20 candidates for this example

function ApplicationPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  // const handlePageClick = (data: { selected: number }) => {
  //   setCurrentPage(data.selected);
  // };

  const offset = currentPage * itemsPerPage;
  const currentCandidates = candidates.slice(offset, offset + itemsPerPage);
  // const pageCount = Math.ceil(candidates.length / itemsPerPage);

  return (
    <div className="pt-[95px] flex flex-col gap-5 items-center px-3 ">
      <h1 className="font-semibold text-[30px]">All Applications</h1>
      <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
        {currentCandidates.map((_, index) => (
          <ApplicationCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default ApplicationPage;
