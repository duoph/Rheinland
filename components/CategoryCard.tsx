import React from "react";
import { CiCircleChevRight } from "react-icons/ci";
import { TbTools } from "react-icons/tb";

const CategoryCard = ({ category }: any) => {
  return (
    <div className="border flex flex-col items-start justify-between w-full sm:w-[30vw] h-[130px] sm:h-[150px] group rounded-sm p-4 cursor-pointer hover:bg-rheinland-red hover:text-white transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center w-full">
        <TbTools className="text-rheinland-red group-hover:text-white transition-all duration-300 ease-in-out text-[30px] sm:text-[40px]" />
        <CiCircleChevRight className="text-[24px]" />
      </div>
      <div className="flex flex-col items-start mt-auto">
        <span className="font-semibold text-[20px]">{category?.name}</span>
        <span className="font-light text-xs mt-1 underline">
          View More
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
