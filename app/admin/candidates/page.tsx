import React, { useState } from "react";
import CandidateCard from "@/components/Candidates/CandidateCard";
import ReactPaginate from "react-paginate";


const candidates = Array(20).fill(null); // Assuming you have 20 candidates for this example

function CandidatesPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

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
          <CandidateCard key={index} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
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
        activeClassName={"active"}
        disabledClassName={"disabled"}

        className="flex flex-row gap-2"
      />
    </div>
  );
}

export default CandidatesPage;
