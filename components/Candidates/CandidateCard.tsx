import React from "react";
import Image from "next/image";

function CandidateCard() {
  return (
    <div className="">
      <div>
        <Image
          src="/RheinlandLogoHeader.png"
          alt="Rheinland Logo"
          height={150}
          width={150}
        />
      </div>
    </div>
  );
}

export default CandidateCard;
