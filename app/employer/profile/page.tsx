"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaSave } from "react-icons/fa";
import toast from "react-hot-toast";

const EmployerProfile = () => {
  const [employerName, setEmployerName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [about, setAbout] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchEmployer = async () => {
    try {
      const response = await axios.get(`/api/employer/account`);
      const employerData = response.data.employer;
      setEmployerName(employerData?.employerName);
      setLocation(employerData?.location);
      setPhone(employerData?.phone);
      setEmail(employerData?.email);
      setWebsite(employerData?.website);
      setAbout(employerData?.about);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployer();
  }, []);

  const handleSaveChanges = async () => {
    try {
      setIsEditable(false);
      const formData = new FormData();
      formData.append('employerName', employerName);
      formData.append('location', location);
      formData.append('phone', phone);
      formData.append('website', website);
      formData.append('about', about);

      const res = await axios.put(`/api/employer/account`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error('Error updating employer:', error);
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
    <div className="pt-[95px] gap-3 flex flex-col items-center justify-center pb-10 w-full px-3 md:px-8">
      <h1 className="text-4xl font-bold">Profile</h1>
      <div className="w-full max-w-xl">
        <div className="grid grid-cols-1 gap-2 mb-8">
          <div>
            <label className="text-sm font-medium ">Company Name</label>
            <input
              type="text"
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              value={employerName}
              onChange={(e) => setEmployerName(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-sm font-medium ">Location</label>
            <input
              type="text"
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-sm font-medium ">Phone</label>
            <input
              type="tel"
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-sm font-medium ">Email</label>
            <input
              type="email"
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={true}
            />
          </div>
          <div>
            <label className="text-sm font-medium ">Website</label>
            <input
              type="text"
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-sm font-medium ">About </label>
            <textarea
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              value={about}
              rows={5}
              onChange={(e) => setAbout(e.target.value)}
              disabled={!isEditable}
            />
          </div>
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

export default EmployerProfile; 
