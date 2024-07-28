"use client"

import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

function CandidateProfile() {
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
            defaultValue="The best penthouse in Kerala owned by Hadi Razal"
          />

          <label className="text-gray-500 mt-4 mb-1">Experience:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            defaultValue="5 Years"
          />

          <label className="text-gray-500 mt-4 mb-1">Skills:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            defaultValue="React, Next JS, Goat, TypeScript"
          />
          <label className="text-gray-500 mt-4 mb-1">Highest Education:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            defaultValue="Masters in Computer Engineering From IIT Bombay"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full md:w-1/2 px-3 mb-4">
          <label className="text-gray-500 mb-1">Mobile:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            defaultValue="+91123457894"
          />

          <label className="text-gray-500 mt-4 mb-1">Email:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            defaultValue="hadigoat@duoph.com"
          />

          <label className="text-gray-500 mt-4 mb-1">German language Level:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            defaultValue="A1"
          />



          <label className="text-gray-500 mt-4 mb-1">Languages:</label>
          <input
            className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
            defaultValue="English, Malayalam, Spanish, German, Latin"
          />
        </div>
      </div>

      {/* Resume Link */}
      <div className="flex flex-col w-full px-8 mb-4">
        <label className="text-gray-500 mb-1">Resume Link:</label>
        <input
          className="w-full px-3 py-3 border-b rounded-sm focus:outline-none"
          defaultValue="https://www.rheinlandconsultancy.com/"
        />
      </div>

      {/* Edit Profile Button */}
      <button className="bg-rheinland-red px-4 py-3 rounded-sm text-white mt-4">Edit Profile</button>
    </div>
  );
}

export default CandidateProfile;
