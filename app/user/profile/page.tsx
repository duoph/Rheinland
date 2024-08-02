"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const UserProfile = () => {
  const [address, setAddress] = useState("The best penthouse in Kerala owned by Hadi Razal");
  const [experience, setExperience] = useState("5 Years");
  const [username, setUsername] = useState("Razal");
  const [skills, setSkills] = useState("React, Next JS, Goat, TypeScript");
  const [education, setEducation] = useState("Masters in Computer Engineering From IIT Bombay");
  const [phone, setPhone] = useState("+91123457894");
  const [email, setEmail] = useState("hadigoat@duoph.com");
  const [about, setAbout] = useState("lorem23fefewa");
  const [germanLevel, setGermanLevel] = useState("A1");
  const [languages, setLanguages] = useState("English, Malayalam, Spanish, German, Latin");
  const [resumeLink, setResumeLink] = useState("https://www.rheinlandconsultancy.com/");
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const fetchUser = async () => {
    try {
      const response = await axios.get("/api/user");
      const userData = response.data.user;
      setAddress(userData.address);
      setExperience(userData.experience);
      setSkills(userData.skills);
      setEducation(userData.education);
      setPhone(userData.phone);
      setAbout(userData.about);
      setEmail(userData.email);
      setGermanLevel(userData.germanLevel);
      setLanguages(userData.languages);
      setResumeLink(userData.resumeLink);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);


  const handleSaveChanges = async () => {
    try {
      setIsEditable(false);

      // Create a FormData object and append the updated user data
      const formData = new FormData();
      formData.append('address', address);
      formData.append('experience', experience);
      formData.append('skills', skills);
      formData.append('education', education);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('germanLevel', germanLevel);
      formData.append('languages', languages);
      formData.append('resumeLink', resumeLink);

      // Send the FormData object to the server
      await axios.put('/api/user', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setIsEditable(true);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };




  return (
    <div className="pt-[95px] flex flex-col items-center justify-center pb-10 w-full md:px-8 px-3" >
      {/* Profile Picture & Basic Info */}
      <h1 className="text-[40px] font-semibold">My Profile</h1>
      <div className="flex flex-col justify-center items-center mb-8">
        <Image
          src="/person-icon.jpg"
          alt="Profile Picture"
          height={100}
          width={100}
          className="rounded-full"
        />
      </div>

      {/* Form Section */}
      <div className="flex gap-2 flex-col md:flex-row justify-around w-full ">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/2 mb-4">
          <label className="text-gray-500 mb-1">Name :</label>
          <input
            className="w-full shadow-sm px-3 py-3 border-b rounded-sm focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={!isEditable}
          />
          <label className="text-gray-500 mb-1">Address:</label>
          <input
            className="w-full shadow-sm px-3 py-3 border-b rounded-sm focus:outline-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            disabled={!isEditable}
          />

          <label className="text-gray-500 mt-4 mb-1">Experience:</label>
          <input
            className="w-full shadow-sm px-3 py-3 border-b rounded-sm focus:outline-none"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            disabled={!isEditable}
          />

          <label className="text-gray-500 mt-4 mb-1">Skills:</label>
          <input
            className="w-full shadow-sm px-3 py-3 border-b rounded-sm focus:outline-none"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            disabled={!isEditable}
          />

          <label className="text-gray-500 mt-4 mb-1">Highest Education:</label>
          <input
            className="w-full shadow-sm px-3 py-3 border-b rounded-sm focus:outline-none"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            disabled={!isEditable}
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full md:w-1/2 mb-4">
          <label className="text-gray-500 mb-1">Mobile:</label>
          <input
            className="w-full shadow-sm px-3 py-3 border-b rounded-sm focus:outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={!isEditable}
          />

          <label className="text-gray-500  mb-1">Email:</label>
          <input
            className="w-full shadow-sm px-3 py-3 border-b rounded-sm focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEditable}
          />

          <label className="text-gray-500 mt-4 mb-1">German language Level:</label>
          <input
            className="w-full shadow-sm px-3 py-3 border-b rounded-sm focus:outline-none"
            value={germanLevel}
            onChange={(e) => setGermanLevel(e.target.value)}
            disabled={!isEditable}
          />

          <label className="text-gray-500 mt-4 mb-1">Languages:</label>
          <input
            className="w-full shadow-sm px-3 py-3 border-b rounded-sm focus:outline-none"
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
            disabled={!isEditable}
          />

          <label className="text-gray-500 mt-4 mb-1">Resume Link:</label>
          <input
            className="w-full shadow-sm px-3 py-3 border-b rounded-sm focus:outline-none"
            value={resumeLink}
            onChange={(e) => setResumeLink(e.target.value)}
            disabled={!isEditable}
          />
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col w-full mb-4">
        <label className="text-gray-500 mb-1">About:</label>
        <textarea
          className="w-full shadow-smpx-3 py-3 border-b rounded-sm focus:outline-none"
          value={about}
          minLength={10}
          rows={5}
          onChange={(e) => setAbout(e.target.value)}
          disabled={!isEditable}
        />
      </div>

      {/* Edit Profile Button */}
      <button
        className="bg-rheinland-red px-4 py-3 rounded-sm text-white mt-4"
        onClick={() => (isEditable ? handleSaveChanges() : setIsEditable(!isEditable))}
      >
        {isEditable ? "Save Changes" : "Edit Profile"}
      </button>
    </div>
  );
};

export default UserProfile;
