"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaSave, FaBuilding } from "react-icons/fa";

const EmployerProfile = () => {
  const [companyName, setCompanyName] = useState("Tech Solutions Inc.");
  const [address, setAddress] = useState("San Francisco, CA, USA");
  const [industry, setIndustry] = useState("Information Technology");
  const [phone, setPhone] = useState("+1234567890");
  const [email, setEmail] = useState("contact@techsolutions.com");
  const [website, setWebsite] = useState("https://www.techsolutions.com/");
  const [about, setAbout] = useState("Leading provider of IT solutions and consulting services.");
  const [isEditable, setIsEditable] = useState(false);

  const fetchEmployer = async () => {
    try {
      const response = await axios.get("/api/employer");
      const employerData = response.data.employer;
      setCompanyName(employerData.companyName);
      setAddress(employerData.address);
      setIndustry(employerData.industry);
      setPhone(employerData.phone);
      setEmail(employerData.email);
      setWebsite(employerData.website);
      setAbout(employerData.about);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployer();
  }, []);

  const handleSaveChanges = async () => {
    try {
      setIsEditable(false);
      const formData = new FormData();
      formData.append('companyName', companyName);
      formData.append('address', address);
      formData.append('industry', industry);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('website', website);
      formData.append('about', about);

      await axios.put('/api/employer', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setIsEditable(false);
    } catch (error) {
      console.error('Error updating employer:', error);
    }
  };

  return (
    <div className="pt-[95px] gap-3 flex flex-col items-center justify-center pb-10 w-full px-3 md:px-8">
      <h1 className="text-4xl font-bold">Employer Profile</h1>
      {/* <div className="flex flex-col items-center mb-4">
        <FaBuilding className="text-gray-500 text-6xl mb-2" />
      </div> */}

      <div className="w-full max-w-xl">
        <div className="grid grid-cols-1 gap-4 mb-8">
          <div>
            <label className="text-gray-500">Company Name:</label>
            <input
              className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
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
            <label className="text-gray-500">Industry:</label>
            <input
              className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label className="text-gray-500">Phone:</label>
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
            <label className="text-gray-500">Website:</label>
            <input
              className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
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

export default EmployerProfile;
