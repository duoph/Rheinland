"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { FaEdit, FaSave } from "react-icons/fa";

const UserProfile = () => {
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [email, setEmail] = useState("");
  const [germanLanguageLevel, setGermanLanguageLevel] = useState("");
  const [resumeURL, setResumeURL] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await axios.get("/api/user");
      const userData = response.data.user;
      console.log(userData)
      setLocation(userData?.location);
      setPhone(userData?.phone);
      setCountryCode(userData?.countryCode);
      setName(userData?.name);
      setEmail(userData?.email);
      setGermanLanguageLevel(userData?.germanLanguageLevel);
      setResumeURL(userData?.resumeURL);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSaveChanges = async () => {
    try {
      setIsEditable(false);
      const formData = new FormData();
      formData.append("location", location);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("countryCode", countryCode);
      formData.append("email", email);
      formData.append("germanLanguageLevel", germanLanguageLevel);
      formData.append("resumeURL", resumeURL);

      await axios.put("/api/user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setIsEditable(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center w-full h-full">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="pt-[95px] D flex flex-col items-center justify-center pb-10 w-full px-3 md:px-8">
      <h1 className="text-4xl font-bold ">My Profile</h1>

      <div className="w-full max-w-xl">
        <div className="grid grid-cols-1 gap-2 mb-8">
          <div>
            <label className="text-sm font-medium mb-1">Name:</label>
            <input
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditable}
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1">Email:</label>
            <input
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={true}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1">Country Code :</label>
            <input
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1">Mobile:</label>
            <input
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1">Location:</label>
            <input
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled={!isEditable}
            />
          </div>



          <div>
            <label className="text-sm font-medium mb-1">German Language Level:</label>
            <select
              value={germanLanguageLevel}
              onChange={(e) => setGermanLanguageLevel(e.target.value)}
              required
              disabled={!isEditable}
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
            >
              <option value='' disabled>Select Language Level</option>
              <option value='A1'>A1</option>
              <option value='A2'>A2</option>
              <option value='B1'>B1</option>
              <option value='B2'>B2</option>
              <option value='C1'>C1</option>
              <option value='C2'>C2</option>
            </select>
          </div>



          <div>
            <label className="text-sm font-medium mb-1">Resume Link:</label>
            <input
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              value={resumeURL}
              onChange={(e) => setResumeURL(e.target.value)}
              disabled={!isEditable}
            />
          </div>
        </div>

        <button
          className="w-full bg-rheinland-red text-white p-3 rounded hover:bg-red-600 transition duration-200 flex items-center justify-center"
          onClick={() =>
            isEditable ? handleSaveChanges() : setIsEditable(!isEditable)
          }
        >
          {isEditable ? (
            <>
              <FaSave className="mr-2" /> Save Changes
            </>
          ) : (
            <>
              <FaEdit className="mr-2" /> Edit Profile
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
