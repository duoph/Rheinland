"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { FaEdit, FaSave } from "react-icons/fa";

const UserProfile = () => {
  const [address, setAddress] = useState("New Delhi, India");
  const [experience, setExperience] = useState("5 Years");
  const [username, setUsername] = useState("Razal");
  const [education, setEducation] = useState("Masters in Computer Engineering From IIT Delhi");
  const [phone, setPhone] = useState("+91123457894");
  const [email, setEmail] = useState("hadi@duoph.com");
  const [about, setAbout] = useState("lorem23fefewa");
  const [germanLevel, setGermanLevel] = useState("A1");
  const [languages, setLanguages] = useState("English, Malayalam, Spanish, German, Latin");
  const [resumeLink, setResumeLink] = useState("https://www.rheinlandconsultancy.com/");
  const [isEditable, setIsEditable] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await axios.get("/api/user");
      const userData = response.data.user;
      setAddress(userData.address);
      setExperience(userData.experience);
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
      const formData = new FormData();
      formData.append('address', address);
      formData.append('experience', experience);
      formData.append('education', education);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('germanLevel', germanLevel);
      formData.append('languages', languages);
      formData.append('resumeLink', resumeLink);

      await axios.put('/api/user', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setIsEditable(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="pt-[95px] gap-3 flex flex-col items-center justify-center pb-10 w-full px-3 md:px-8">
      <h1 className="text-4xl font-bold ">My Profile</h1>
      <div className="flex flex-col items-center">
        <Image
          src="/person-icon.jpg"
          alt="Profile Picture"
          height={100}
          width={100}
          className="rounded-full mb-1"
        />
      </div>

      <div className="w-full max-w-xl">
        <div className="grid grid-cols-1 gap-4 mb-8">
          <div>
            <label className="text-gray-500">Name:</label>
            <input
              className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-gray-500">Address:</label>
            <input
              className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"

              value={address}
              onChange={(e) => setAddress(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-gray-500">Experience:</label>
            <input
              className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"

              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-gray-500">Highest Education:</label>
            <input
              className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"

              value={education}
              onChange={(e) => setEducation(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-gray-500">Mobile:</label>
            <input
              className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"

              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-gray-500">Email:</label>
            <input
              className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"

              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-gray-500">German Language Level:</label>
            <input
              className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"

              value={germanLevel}
              onChange={(e) => setGermanLevel(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-gray-500">Languages:</label>
            <input
              className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"

              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-gray-500">Resume Link:</label>
            <input
              className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"

              value={resumeLink}
              onChange={(e) => setResumeLink(e.target.value)}
              disabled={!isEditable}
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="text-gray-500">About:</label>
          <textarea
            className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"

            value={about}
            rows={5}
            onChange={(e) => setAbout(e.target.value)}
            disabled={!isEditable}
          />
        </div>

        <button
          className="w-full bg-rheinland-red text-white p-3 rounded hover:bg-red-600 transition duration-200 flex items-center justify-center"
          onClick={() => (isEditable ? handleSaveChanges() : setIsEditable(!isEditable))}
        >
          {isEditable ? <><FaSave className="mr-2" /> Save Changes</> : <><FaEdit className="mr-2" /> Edit Profile</>}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
