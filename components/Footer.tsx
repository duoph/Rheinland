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
    <footer className="bg-rheinland-gray text-slate-200 px-5 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 w-full">

        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 w-full text-center md:text-left">
            <Image
              src={"/rheinlandWhiteLogo.png"}
              className="cursor-pointer mb-4"
              alt="Logo"
              height={170}
              width={170}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          <p className="text-sm font-light">
            Great platform for job seekers passionate about startups.
            Find your dream job easier.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <nav className="flex flex-col gap-2 text-sm w-full  items-center">
            <h4 className="underline text-end text-lg font-medium mb-2">Quick Links</h4>
            <Link href={"/about-us"} className="hover:text-white transition">About Us</Link>
            <Link href={"/contact-us"} className="hover:text-white transition">Contact Us</Link>
            <Link href={"/privacy-policy"} className="hover:text-white transition">Privacy Policy</Link>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-slate-400 mt-8 pt-4 text-center text-xs font-light">
        <p>
          © 2024 Rheinland Consultancy. Designed and Developed by{" "}
          <Link
            target="_blank"
            href={"https://www.duoph.com/"}
            className="cursor-pointer text-slate-300 hover:text-white transition"
          >
            Duoph
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
