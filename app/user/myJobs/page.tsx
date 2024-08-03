"use client";

// MyJobs.jsx
import JobCard from "@/components/JobCard";
import { Job } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MyJobs = () => {
    const [selectedJobsType, setSelectedJobsType] = useState<string>("saved");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [savedJobs, setSavedJobs] = useState<Job[]>([]);
    const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);
    const [jobsToDisplay, setJobsToDisplay] = useState<number>(16); // Number of jobs displayed initially

    // Function to fetch jobs from the API
    const fetchJobs = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`/api/user`);
            if (res.data.success) {
                setSavedJobs(res.data.user.savedJobs);
                setAppliedJobs(res.data.user.appliedJobs);
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
    };

    // Fetch jobs on initial render
    useEffect(() => {
        fetchJobs();
    }, []);

    // Determine the jobs to display based on the selected type and pagination
    const jobsToDisplayList = (selectedJobsType === "saved" ? savedJobs : appliedJobs).slice(0, jobsToDisplay);

    // Handle "Load More" button click
    const handleLoadMore = () => {
        setJobsToDisplay(prev => Math.min(prev + 16, (selectedJobsType === "saved" ? savedJobs : appliedJobs).length));
    };

    // Check if there are more jobs to load for the selected type
    const hasMoreJobs = (selectedJobsType === "saved" ? savedJobs : appliedJobs).length > jobsToDisplay;

    return (
        <div className="pt-[95px] flex flex-col items-center justify-start pb-10 w-full md:px-8 px-3 min-h-screen">
            <h1 className="font-semibold text-[30px]">My Jobs</h1>

            <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-5 rounded-md py-3 px-5 md:px-10 w-full text-[15px] flex-wrap">
                <span
                    onClick={() => setSelectedJobsType("saved")}
                    className={`px-2 py-2 rounded-md cursor-pointer border ${selectedJobsType === "saved" ? "bg-rheinland-red text-white" : ""}`}
                >
                    Saved Jobs
                </span>
                <span
                    onClick={() => setSelectedJobsType("applied")}
                    className={`px-3 py-2 rounded-md cursor-pointer border ${selectedJobsType === "applied" ? "bg-rheinland-red text-white" : ""}`}
                >
                    Applied Jobs
                </span>
            </div>

            <div className="flex items-center justify-center flex-wrap gap-3">
                {isLoading
                    ? Array.from({ length: 16 }).map((_, index) => (
                        <JobCard key={index} isLoading={isLoading} job={null} />
                    ))
                    : jobsToDisplayList.length > 0
                        ? jobsToDisplayList.map((job) => (
                            <JobCard key={job._id} isLoading={isLoading} job={job} />
                        ))
                        : <p className="text-center text-gray-500">No jobs available.</p>
                }
            </div>

            {hasMoreJobs && (
                <button
                    onClick={handleLoadMore}
                    className="w-[200px] bg-rheinland-red text-white rounded-sm px-3 py-3 mt-5"
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default MyJobs;
