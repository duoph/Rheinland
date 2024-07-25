import React, { useState } from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { CiBookmark, CiBookmarkCheck, CiLocationOn } from "react-icons/ci";
import Link from "next/link";

function SavedJobsCard() {
  const [error, setError] = useState(null);
  const [job, setJob] = useState(null);

  const handleSave = async () => {
    try {
      const res = await axios.post(`/api/job/${jobId}/user/save`);
      fetchJob();
      console.log(res);
    } catch (error) {
      console.error(error);
      setError("An error occurred while handling save job.");
    }
  };
  return (
    // Outer container
    <div className="flex gap-5 bg-[#f0f8ff] w-[500px] h-[150px] p-5">
      <div className="rounded-sm flex justify-center items-start">
        <Image src="/corporate.jpg" alt="company" height={80} width={80} />
      </div>
      <div className="flex flex-col items-start justify-between">
        <div className="flex flex-col items-start">
          <h1 className="text-[24px] font-semibold">Full Stack Developer</h1>
          <p className="flex flex-row justify-center items-center text-[14px] text-gray-500 cursor-default">
            <IoLocationSharp />
            Raunheim,Germany
          </p>
        </div>
        <div className="flex items-center gap-10 ">
          <Link href={'/'}>
            <p className="underline">View more details</p>
          </Link>
          <div onClick={handleSave} className="cursor-pointer">
            {job?.savedUsers?.includes(account.id) ? (
              <CiBookmarkCheck className="text-red-500" size={30} />
            ) : (
              <CiBookmark className="text-red-500" size={30} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedJobsCard;
