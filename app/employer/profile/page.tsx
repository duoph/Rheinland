"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaSave } from "react-icons/fa";
import { useAccount } from "@/context/useAccount";

const EmployerProfile = () => {
  const [employerName, setEmployerName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [about, setAbout] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  const { account } = useAccount();

  const fetchEmployer = async () => {
    try {
      const response = await axios.get(`/api/employer/account`);
      console.log(response)
      const employerData = response.data.employer;
      setEmployerName(employerData?.employerName);
      setAddress(employerData?.address);
      setPhone(employerData?.phone);
      setEmail(employerData?.email);
      setWebsite(employerData?.website);
      setAbout(employerData?.about);
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
      formData.append('employerName', employerName);
      formData.append('address', address);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('website', website);
      formData.append('about', about);

      await axios.put(`/api/employer/account`, formData, {
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
      <div className="w-full max-w-xl">
        <div className="grid grid-cols-1 gap-2 mb-3">
          <input
            type="text"
            placeholder="Company Name"
            className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
            value={employerName}
            onChange={(e) => setEmployerName(e.target.value)}
            disabled={!isEditable}
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            disabled={!isEditable}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={!isEditable}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEditable}
          />
          <input
            type="text"
            placeholder="Website"
            className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-8">
          <textarea
            placeholder="About"
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
