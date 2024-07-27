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
          <p>
            Address:<span>The best penthouse in Kerala owns by Hadi Razal</span>
          </p>
          <p>
            Experience:<span>5 Years</span>
          </p>
          <p>
            Skills:<span>React,Next JS, Goat ,Typescript</span>
          </p>
        </div>

        {/* Section 2  */}
        <div>
          <p>
            {" "}
            Mobile:<span>+91123457894</span>
          </p>
          <p>
            {" "}
            Email:<span>hadigoat@duoph.com</span>
          </p>
          <p>
            {" "}
            German language Level:<span>A1</span>
          </p>
          <p>
            {" "}
            Highest Education:
            <span>Masters in Computer Engineering From IIT Bombay</span>
          </p>
          <p>
            {" "}
            Languages:<span>English,Malayalam,Spanish,German, Latin</span>
          </p>
        </div>
      </div>
      <p>
        Resume Link:<span>https://www.rheinlandconsultancy.com/</span>
      </p>
    </div>
  );
}

export default CandidateProfile;
