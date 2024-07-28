import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

function CandidateProfile() {
  return (
    <div className="pt-[95px] flex flex-col items-center justify-center">
      {/* name & Place  */}
      <div className="flex flex-col justify-center items-center ">
        <Image
          src="/person-icon.jpg"
          alt="Rheinland Logo"
          height={100}
          width={100}
          className="rounded-[50px]"
        />
        <h1 className="text-[22px] font-semibold cursor-default">Hadi Razal</h1>

        <p className="flex flex-row justify-center items-center text-[14px] text-gray-500 cursor-default">
          <IoLocationSharp />
          Ponnani,Kerala
        </p>
        <p className="flex flex-row justify-center items-center text-[14px] cursor-default">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          asperiores, nemo esse eum obcaecati.
        </p>
      </div>
      {/* Double Partition  */}
      <div className="flex flex-col md:flex-row justify-around">
        {/* Section 1  */}
        <div>
          <p className=" text-gray-500">
            Address:<span className="text-black">The best penthouse in Kerala owns by Hadi Razal</span>
          </p>
          <p className=" text-gray-500">
            Experience:<span className="text-black">5 Years</span>
          </p>
          <p className=" text-gray-500">
            Skills:<span className="text-black">React,Next JS, Goat ,Typescript</span>
          </p>
        </div>

        {/* Section 2  */}
        <div>
          <p className=" text-gray-500">
            {" "}
            Mobile:<span className="text-black">+91123457894</span>
          </p>
          <p className=" text-gray-500">
            {" "}
            Email:<span className="text-black">hadigoat@duoph.com</span>
          </p>
          <p className=" text-gray-500">
            {" "}
            German language Level:<span className="text-black">A1</span>
          </p>
          <p className=" text-gray-500">
            {" "}
            Highest Education:
            <span className="text-black">Masters in Computer Engineering From IIT Bombay</span>
          </p>
          <p className=" text-gray-500">
            {" "}
            Languages:<span className="text-black">English,Malayalam,Spanish,German, Latin</span>
          </p>
        </div>
      </div>
      <p className=" text-gray-500">
        Resume Link:<span className="text-black">https://www.rheinlandconsultancy.com/</span>
      </p>
      <button className="bg-rheinland-red px-4 py-3 rounded-sm text-white">Edit Profile</button>
    </div>
  );
}

export default CandidateProfile;
