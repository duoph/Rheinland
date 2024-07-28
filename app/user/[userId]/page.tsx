"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

const CandidateProfile = () => {
  const [address, setAddress] = useState("The best penthouse in Kerala owned by Hadi Razal");
  const [experience, setExperience] = useState("5 Years");
  const [skills, setSkills] = useState("React, Next JS, Goat, TypeScript");
  const [education, setEducation] = useState("Masters in Computer Engineering From IIT Bombay");
  const [mobile, setMobile] = useState("+91123457894");
  const [email, setEmail] = useState("hadigoat@duoph.com");
  const [germanLevel, setGermanLevel] = useState("A1");
  const [languages, setLanguages] = useState("English, Malayalam, Spanish, German, Latin");
  const [resumeLink, setResumeLink] = useState("https://www.rheinlandconsultancy.com/");

  return (
    <div className="pt-[95px] flex flex-col items-center justify-center pb-10">
      {/* Profile Picture & Basic Info */}
      <div className="flex flex-col justify-center items-center mb-8">
        <Image
          src="/person-icon.jpg"
          alt="Profile Picture"
          height={100}
          width={100}
          className="rounded-full"
        />
        <h1 className="text-[22px] font-semibold cursor-default mt-4">Hadi Razal</h1>
        <p className="flex flex-row justify-center items-center text-[14px] text-gray-500 cursor-default mt-2">
          <IoLocationSharp className="mr-1" />
          Ponnani, Kerala
        </p>
      </div>

      {/* Form Section */}
      <div className="flex flex-col md:flex-row justify-around w-full px-8">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/2 px-3 mb-4">
          <label className="text-gray-500 mb-1">Address:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label className="text-gray-500 mt-4 mb-1">Experience:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

          <label className="text-gray-500 mt-4 mb-1">Skills:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <label className="text-gray-500 mt-4 mb-1">Highest Education:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full md:w-1/2 px-3 mb-4">
          <label className="text-gray-500 mb-1">Mobile:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <label className="text-gray-500 mt-4 mb-1">Email:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-gray-500 mt-4 mb-1">German language Level:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            value={germanLevel}
            onChange={(e) => setGermanLevel(e.target.value)}
          />

          <label className="text-gray-500 mt-4 mb-1">Languages:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
          />
        </div>
      </div>

      {/* Resume Link */}
      <div className="flex flex-col w-full px-8 mb-4">
        <label className="text-gray-500 mb-1">Resume Link:</label>
        <input
          className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
          value={resumeLink}
          onChange={(e) => setResumeLink(e.target.value)}
        />
      </div>

      {/* Edit Profile Button */}
      <button className="bg-rheinland-red px-4 py-3 rounded-sm text-white mt-4">Edit Profile</button>
    </div>
  );
}

export default CandidateProfile;
