import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      </div>
      {/* Accordion  */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger></AccordionTrigger>
          <AccordionContent className="flex flex-col justify-center items-center">
            <p className="flex flex-row justify-center items-center text-[14px] cursor-default">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              asperiores, nemo esse eum obcaecati.
            </p>
            <div className="flex flex-col py-5">
              <p>lufthansasystems@gamil.com</p>
              <p>+49 97 25917 3740</p>
            </div>
            <button className="flex justify-center items-center bg-rheinland-blue text-white px-10 py-2 rounded-sm gap-2">Jobs <span>(10)</span></button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default CompanyCard;
