"use client"

import { useState } from "react";
import Link from "next/link";
import { LiaUserTieSolid } from "react-icons/lia";
import { HiOutlineBriefcase } from "react-icons/hi";
import { GoPencil } from "react-icons/go";
import { FaPowerOff } from "react-icons/fa";
import { useAccount } from "@/context/useAccount";
import { useRouter } from "next/navigation";

const EmployerPage = () => {
  const { account } = useAccount();

  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionChange = () => {
    setSelectedOption((prevOption) => prevOption + 1);
  };

  const options = [
    { label: "Profile", icon: LiaUserTieSolid, link: `/employer/profile` },
    { label: "My Jobs", icon: HiOutlineBriefcase, link: `/employer/profile` },
    { label: "Create Job", icon: GoPencil, link: `/employer/job/create-job` },
    { label: "Logout", icon: FaPowerOff, link: `/` },
  ];

  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col items-center justify-center gap-3 text-white w-screen">
        <div className="flex flex-col justify-center items-center w-screen bg-[#ffffe4] h-screen text-black">
          <div className="flex flex-row w-full items-center justify-center cursor-pointer gap-3">
            <img src="/person-icon.jpg" alt="" className="w-16 rounded-[50px]" />
            <h2 className="text-lg font-semibold">Company Name</h2>
          </div>

          <div className="flex flex-col pt-10 w-full items-center pl-9">
            {options.map((option) => (
              <Link href={option.link} key={option.label} className="px-4 py-3 rounded-sm">
                <button className="flex flex-row justify-center text-[20px] font-normal items-center gap-5">
                  <option.icon className="text-[30px]" />
                  {option.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerPage;

