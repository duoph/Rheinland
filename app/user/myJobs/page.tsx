"use client";

import JobCard from "@/components/JobCard";
import { Job } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MyJobs = () => {
    const [selectedJobsType, setSelectedJobsType] = useState<string>("saved");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [savedJobs, setSavedJobs] = useState<Job[]>([]);
    const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);

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

    useEffect(() => {
        fetchJobs();
    }, []);

    const jobsToDisplay = selectedJobsType === "saved" ? savedJobs : appliedJobs;

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
                    : jobsToDisplay.length > 0
                        ? jobsToDisplay.map((job) => (
                            <JobCard key={job._id} isLoading={isLoading} job={job} />
                        ))
                        : <p className="text-center text-gray-500">No jobs available.</p>
                }
            </div>
        </div>
    );
};

export default MyJobs;
