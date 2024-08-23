"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoMdArrowBack } from "react-icons/io";



const CreateAccountPage = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    resumeURL: "",
    password: "",
    confirmPassword: "",
  });


  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword || !formData.countryCode
    ) {
      toast.error("Please fill all the inputs");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("countryCode", formData.countryCode);
      formDataToSend.append("email", formData.email.toLowerCase());
      formDataToSend.append("password", formData.password);
      formDataToSend.append("resumeURL", formData.resumeURL);

      const res = await axios.post("/api/user", formDataToSend);

      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        router.push("/login");
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form");
    } finally {
      setIsLoading(false);
    }
  };

  const passwordsMatch = () => formData.password === formData.confirmPassword;



  return (
    <div className="relative min-h-screen pt-[80px] flex flex-col items-center justify-center">
      <div className="absolute top-[80px] left-[10px] cursor-pointer md:flex hidden">
        <span
          onClick={() => router.push("/")}
          className="flex items-center justify-center gap-2"
        >
          <IoMdArrowBack /> Back
        </span>
      </div>
      <div className="rounded-sm flex flex-col items-center justify-center gap-4 sm:w-[400px] w-full px-4 py-7">
        <div className="flex flex-col items-start justify-center w-full">
          <span className="text-[30px] font-semibold">Create your account.</span>
          <span className="text-sm font-light">Explore open career opportunities</span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              placeholder="Enter your email"
            />
          </div>



          <div className="flex flex-col">
            <label htmlFor="resumeURL" className="text-sm font-medium mb-1">Country Code (eg:+91 or +1)</label>
            <input
              type="text"
              id="countryCode"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              placeholder="Enter your Phone"
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="resumeURL" className="text-sm font-medium mb-1">Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your Phone"
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="resumeURL" className="text-sm font-medium mb-1">Resume URL</label>
            <input
              type="text"
              id="resumeURL"
              name="resumeURL"
              value={formData.resumeURL}
              onChange={handleChange}
              placeholder="Enter your resume URL"
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full border px-3 py-3 border-gray-300 rounded-sm focus:outline-none transition-colors ${!passwordsMatch() && formData.confirmPassword
                ? "border-rheinland-red"
                : ""
                }`}
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-3 w-full bg-rheinland-red text-white rounded-sm"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <div className="flex flex-col items-center justify-center text-sm gap-1 mt-4">
          <span className="font-light">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 underline">Login</Link>
          </span>
          <span className="font-light">
            Register as an employer?{" "}
            <Link href="/create-account/employer" className="text-blue-500 underline">Register</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
