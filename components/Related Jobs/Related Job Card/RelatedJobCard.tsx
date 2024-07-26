import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

function RelatedJobCard() {
  return (
    <div>
      <div className="flex flex-col bg-white p-5 rounded-sm w-[380px] h-[200px] md:w-[600px] md:h-[200px]">
        <h1 className="text-[28px] font-sem">Full Stack Developer</h1>
        <div className="flex flex-row justify-between">
          <h3 className="text-[20px] text-rheinland-blue">Microsoft</h3>
          <h1 className="flex flex-row items-center">
            <FaMapMarkerAlt className="text-rheinland-red" />
            Berlin
          </h1>
        </div>
        {/* Number of Openings */}
        <div className="flex flex-row">
          <p className="flex flex-row items-center justify-center gap-2 text-gray-500">
            <FaRegUser />
            <span>10</span>openings
          </p>
        </div>
        <div className="flex flex-col  pt-5 ">
          <p className="italic underline cursor-pointer">More Details...</p>
        </div>
      </div>
    </div>
  );
}

export default RelatedJobCard;
