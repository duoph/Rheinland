"use client"

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa"; 
import ApplicationCard from "@/components/Candidates/Applications/ApplicationCard";

const candidates = Array(20).fill(null); // Assuming you have 20 candidates for this example

function ApplicationPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentCandidates = candidates.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(candidates.length / itemsPerPage);

  return (
    <div className="py-[120px] flex flex-col items-center">
      <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
        {currentCandidates.map((_, index) => (
          <ApplicationCard key={index} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={
          <FaArrowCircleLeft className="text-[30px] text-rheinland-blue" />
        }
        nextLabel={
          <FaArrowCircleRight className="text-[30px] text-rheinland-blue" />
        }
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"activePage"}
        disabledClassName={"disabledPage"}
        className="flex flex-row gap-8 py-10 items-center text-[18px] "
      />
    </div>
  );
}

export default ApplicationPage;
