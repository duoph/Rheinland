import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdNotInterested } from "react-icons/md";

function ApplicationCard() {
  return (
    // Main container
    <div className="flex flex-col">
      {/* Job and Company  */}
      <div className="flex flex-col">
        <h1>Full Stack Developer</h1>
        <h3>Microsoft</h3>
      </div>
      {/* Personal Details  */}
      <div className="flex flex-col">
        {/* Name and Highest German language level  */}
        <div className="flex  flex-row">
          <h1>Hadi Razal</h1>
          <p>A2</p>
        </div>
        {/* Location & Experience */}
        <div className="flex  flex-row">
          <h1 className="flex flex-row items-center">
            <FaMapMarkerAlt />Ponnani
          </h1>
          <p>Fresher</p>
        </div>
      </div>
      {/* Buttons  */}
      <div className="flex flex-row gap-5">
      <p>View Resume</p>
      <button className="flex flex-row items-center">Accept <FaCheck /></button>
      <button className="flex flex-row items-center">Reject <MdNotInterested /></button>
      </div>
    </div>
  );
}

export default ApplicationCard;
