import { Job } from "@/types";
import { format } from "date-fns";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import JobActions from '@/components/JobApplyButton';

async function getJob(jobId: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/job/${jobId}`, { next: { revalidate: 60 } });
    if (!response.ok) {
      throw new Error('Failed to fetch job data');
    }
    const data = await response.json();
    if (data.success) {
      return data.job;
    }
    throw new Error("Failed to load job data.");
  } catch (error) {
    console.error("Error fetching job:", error);
    throw error;
  }
}

// async function getUserData(token: string | null) {
//   if (!token) return { savedJobs: [], appliedJobs: [] };
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
//       headers: { Authorization: `Bearer ${token}` },
//       next: { revalidate: 60 }
//     });
//     if (!response.ok) {
//       throw new Error('Failed to fetch user data');
//     }
//     const data = await response.json();
//     if (data.success) {
//       return {
//         savedJobs: data.user.savedJobs || [],
//         appliedJobs: data.user.appliedJobs || []
//       };
//     }
//     throw new Error("Failed to load user data.");
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     return { savedJobs: [], appliedJobs: [] };
//   }
// }

export default async function SingleJobPage({ params }: { params: { jobId: string } }) {
  const job: Job | null = await getJob(params.jobId);
  // const { savedJobs, appliedJobs } = await getUserData(null); // Replace null with the actual token when available

  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-3 sm:px-5 pt-[90px]">
        <h1 className="text-red-500 text-lg">Failed to load job data.</h1>
      </div>
    );
  }

  const formattedDate = job.createdAt ? format(new Date(job.createdAt), "dd/MM/yyyy") : "Date data failed to load";

  const formatTextWithLineBreaks = (text: string) => {
    return text.replace(/\n/g, '<br>');
  };

  return (
    <div className="relative min-h-screen flex flex-col gap-3 items-center justify-start px-3 sm:px-5 pb-[50px] pt-[90px]">
      <div className="flex items-start w-full">
        <h1 className="font-semibold text-[30px] md:text-[50px]">
          {job.title}
        </h1>
      </div>

      <div className="flex flex-row items-start w-full gap-5 flex-wrap">
        <span className="flex gap-2 font-light">
          <PiSuitcaseSimpleFill className="text-rheinland-red" size={24} />
          {job.jobType ? job.jobType : "Full Time"}
        </span>

        <span className="flex gap-2 font-light">
          <CiLocationOn className="text-rheinland-red" size={24} />
          {job.location}
        </span>

        {job.gender && job.gender !== "Any" && (
          <span className="flex gap-2 font-light">
            <CiUser className="text-rheinland-red" size={24} />
            {job.gender}
          </span>
        )}

        {job.salary && (
          <span className="flex gap-2 font-light">
            <HiOutlineBanknotes className="text-rheinland-red" size={24} />
            {job.salary}
          </span>
        )}

        <span className="flex gap-2 font-light">
          <SlCalender className="text-rheinland-red" size={24} />
          {formattedDate}
        </span>
      </div>

      <div className="flex flex-col items-start justify-center w-full gap-3">
        <div className="font-light text-sm text-white flex flex-wrap gap-2 py-3">
          {job.skills && job.skills.length > 0 ? (
            job.skills
              .filter(skill => skill !== "")
              .slice(0, 10)
              .map((skill, index) => (
                <span key={index} className="px-3 py-3 bg-rheinland-blue rounded-sm">
                  {skill}
                </span>
              ))
          ) : (
            <p>No skills listed</p>
          )}
        </div>

        <div className="flex flex-col gap-2 items-start justify-center w-full">
          <p className="font-light" dangerouslySetInnerHTML={{ __html: formatTextWithLineBreaks(job.description || "No description available") }} />
        </div>

        <JobActions
          jobId={job._id}
        />
      </div>
    </div>
  );
}
