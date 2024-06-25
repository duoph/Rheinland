"use client"

import React, { useState } from "react";

const ProfilePage = () => {


  const [employerName, setEmployerName] = useState("Duoph Technologies");
  const [phoneNumber, setPhoneNumber] = useState("+49 43 95339 2634");
  const [emailAddress, setEmailAddress] = useState("duophtechnologies@gmail.com");
  const [websiteUrl, setWebsiteUrl] = useState("www.duoph.com");
  const [aboutText, setAboutText] = useState("");
  const [location, setLocation] = useState("Berlin");

  return (
    <div className=" flex flex-col justify-center  items-center pt-[90px] px-5 md:px-10 ">
      <h1 className="font-semibold text-xl">My Profile</h1>
      {/* Logo  */}
      <div className="flex flex-row w-[100%] justify-center items-center cursor-pointer  gap-3 py-5">
        <img src="/person-icon.jpg" alt="" className="w-24 rounded-[50px]" />
        <button className="px-2 py-1 h-[40px] bg-rheinland-red text-white rounded-md">
          Browse
        </button>
      </div>
      <form action="" className="flex flex-col gap-5 md:gap-8">
        {/* Company Details */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-10 ">
          {/* Employer Name */}
          <div className="flex flex-col justify-start">
            <label htmlFor="" className="font-semibold">
              Employer Name
            </label>
            <input
              type="text"
              value={employerName}
              className="border-2 w-[380px] h-[50px] outline-none rounded-md px-2"
              onChange={(e) => setEmployerName(e.target.value)}
            />
          </div>
          {/* Email */}
          <div className="flex flex-col justify-start">
            <label htmlFor="" className="font-semibold">
              Email
            </label>
            <input
              type="text"
              placeholder="Your Email Address"
              value={emailAddress}
              className="border-2 w-[380px] h-[50px] outline-none rounded-md px-2"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
        </div>
        {/* Contact Details */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-10 ">
          {/* Phone Number */}
          <div className="flex flex-col justify-start">
            <label htmlFor="" className="font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              className="border-2 w-[380px] h-[50px] outline-none rounded-md px-2"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {/* Website */}
          <div className="flex flex-col justify-start">
            <label htmlFor="" className="font-semibold">
              Website
            </label>
            <input
              type="text"
              placeholder="Website"
              value={websiteUrl}
              className="border-2 w-[380px] h-[50px] outline-none rounded-md px-2"
              onChange={(e) => setWebsiteUrl(e.target.value)}
            />
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col justify-start w-full">
          <label htmlFor="" className="font-semibold">
            About
          </label>
          <textarea
            rows={10}
            cols={50}
            placeholder="Write about your company..."
            className="border-2 w-full outline-none rounded-md px-2 py-2"
            onChange={(e) => setAboutText(e.target.value)}
          />
        </div>

        {/* Location */}
        <div className="flex flex-col justify-start w-full">
          <label htmlFor="" className="font-semibold">
            Location
          </label>
          <input
            type="text"
            value={location}
            className="border-2 h-[50px] outline-none rounded-md px-2 w-full"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="py-5 w-full flex items-center justify-center">
          <button className="px-2 w-[100px] py-1 h-[50px] rounded-md bg-rheinland-red text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;

