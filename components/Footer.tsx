"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const path = usePathname();

  if (path.startsWith("/admin")) return null;
  if (path.startsWith("/employer")) return null;

  return (
    <div className="bg-rheinland-gray flex flex-col items-center justify-center  gap-10 pt-10 pb-3 text-slate-200 px-5 font-light ">
      <div className="flex flex-col items-center justify-center md:justify-between md:flex-row gap-4 w-full">
        <div className="md:w-1/2 w-full flex flex-col items-center md:justify-start">
          <Image
            src={"/rheinlandWhiteLogo.png"}
            className="cursor-pointer"
            alt="Logo"
            height={100}
            width={100}
          />
          <span>
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </span>
        </div>
        <div className="md:w-1/2 w-full  flex flex-col items-center md:justify-start">
          <span className="underline">Quick Links</span>
          <span className="cursor-pointer">About</span>
          <span className="cursor-pointer">Contact Us</span>
          <span className="cursor-pointer">Privacy Policy</span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <span className="text-center">
          2024 @ Rheinland Consultancy. Designed and Developed by{" "}
          <Link
            target="_blank"
            href={"https://www.duoph.com/"}
            className="cursor-pointer text-center"
          >
            Duoph
          </Link>{" "}
        </span>
      </div>
    </div>
  );
};

export default Footer;
