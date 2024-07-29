import React from "react";
import { MdNotInterested } from "react-icons/md";
import { FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import { Skeleton } from "./ui/skeleton";

interface ApplicationCardProps {
  applicant?: any;
  isLoading?: boolean;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ applicant, isLoading }) => {


  if (isLoading) {
    return (
      <div className="border shadow-sm border-opacity-35 flex flex-col items-start justify-between md:min-w-[320px] w-full md:max-w-[320px]  group cursor-pointer rounded-sm px-3 py-2">
        <div className="flex justify-between items-center w-full py-2">
          <Skeleton className="w-[60px] h-[60px]" />
          <Skeleton className="w-[100px] h-[20px]" />
        </div>
        <Skeleton className="w-full h-[20px] mb-2" />

        <div className="flex flex-col items-center justify-center w-full gap-1">
          <Skeleton className="w-[150px] h-[20px]" />
          <Skeleton className="w-[200px] h-[20px]" />
          <Skeleton className="w-[250px] h-[20px]" />
          <Skeleton className="w-[100px] h-[20px]" />
          <Skeleton className="w-[100px] h-[20px]" />
        </div>

        <div className="flex justify-between items-center w-full py-2">
          <Skeleton className="w-[100px] h-[20px]" />
          <Skeleton className="w-[100px] h-[20px]" />
        </div>
      </div>
    );

  }


  return (
    <div className="bg-slate-400 border shadow-sm border-opacity-35 flex flex-col items-start justify-between md:min-w-[320px] w-full md:max-w-[320px] group cursor-pointer rounded-sm px-3 py-2">


      <div className="flex flex-col items-center justify-center w-full py-2">
        <h1 className="text-[20px] font-semibold">Full Stack Engineer</h1>
        <h3 className="text-[16px] text-gray-600">Duoph Technologies</h3>
      </div>




      <div className="flex flex-col items-center justify-center w-full gap-1">

        <p className="text-sm font-light">Praveen Prasad</p>
        <p className="text-sm font-light">Language Level : Not Specified</p>
        <p className="text-sm font-light">praveenprasad@gmail.com</p>
        <p className="text-sm font-light">84834834249</p>
        <p className="text-sm font-light"> 2 Years of work Expirience</p>
        <p className="text-sm font-light"> Berlin</p>

      </div>





      <div className="flex flex-col justify-center items-center w-full py-2">
        <p className="italic underline cursor-pointer">View Resume</p>
      </div>


      <div className="flex flex-col gap-1 justify-between rounded-sm w-full">
        <button className="flex items-center justify-center p-2 text-white rounded-sm bg-green-500 gap-2">
          Accept
          <FaCheck />
        </button>
        <button className="flex items-center justify-center p-2 text-white rounded-sm bg-red-500 gap-2">
          Reject
          <MdNotInterested />
        </button>
      </div>


    </div >
  );

}

export default ApplicationCard;
