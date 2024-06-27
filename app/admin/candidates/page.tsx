import CandidateCard from "@/components/Candidates/CandidateCard";
import React from "react";

function CandidatesPage() {
  return (
    <div className="py-[120px] flex flex-row flex-wrap gap-5 justify-center items-center">
      <CandidateCard />
      <CandidateCard />
      <CandidateCard />
      <CandidateCard />
      <CandidateCard />
      <CandidateCard />
      <CandidateCard />
      <CandidateCard />
    </div>
  );
}

export default CandidatesPage;
