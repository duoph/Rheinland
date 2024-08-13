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
    phone: "",
    dateOfBirth: "",
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
      !formData.dateOfBirth ||
      !formData.password ||
      !formData.confirmPassword
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
      formDataToSend.append("email", formData.email.toLowerCase());
      formDataToSend.append("dateOfBirth", formData.dateOfBirth);
      formDataToSend.append("password", formData.password);

      const res = await axios.post(
        "/api/user",
        formDataToSend
      );

      if (res.data.success === false) {
        toast.error("Error creating account");
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
          <span className="text-[30px] font-semibold">
            Create your account.
          </span>
          <span className="text-sm font-light">
            Explore open career opportunities
          </span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
            placeholder="Email"
          />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
            placeholder="Phone"
          />
          <input
            type="date"
            name="dateOfBirth"
            
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
            placeholder="Date of Birth"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full border px-3 py-3 border-b rounded-sm focus:outline-none`}
            placeholder="Password"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full border px-3 py-3 border-b rounded-sm focus:outline-none ${!passwordsMatch() && formData.confirmPassword
              ? "border-rheinland-red"
              : ""
              }`}
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="px-5 py-3 w-full bg-rheinland-red text-white"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <div className="flex flex-col items-center justify-center text-sm gap-1">
          <span className="font-light">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 underline">
              Login
            </Link>
          </span>
          <span className="font-light">
            Register as an employer?{" "}
            <Link
              href="/create-account/employer"
              className="text-blue-500 underline"
            >
              Register
            </Link>
          </span>
          <span className="text-blue-500 underline cursor-pointer font-light">
            Forgot Password
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
