import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";

function CompanyCard() {
  return (
    //Main Container

    <div
      className="w-[300px] flex flex-col rounded-sm justify-center items-center py-5 px-2 border-2 shadow-sm\]
     shadow-rheinland-gray"
    >
      <div className="flex flex-col justify-center items-center ">
        <Image
          src="/person-icon.jpg"
          alt="Rheinland Logo"
          height={100}
          width={100}
          className="rounded-[50px]"
        />
        <h1 className="text-[22px] font-semibold cursor-default">
          Lufthansa Systems
        </h1>

        <p className="flex flex-row justify-center items-center text-[14px] text-gray-500 cursor-default">
          <IoLocationSharp />
          Raunheim,Germany
        </p>
        <p className="flex flex-row justify-center items-center text-[14px] cursor-default">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          asperiores, nemo esse eum obcaecati.
        </p>
      </div>
    </div>
  );
}

export default CompanyCard;
