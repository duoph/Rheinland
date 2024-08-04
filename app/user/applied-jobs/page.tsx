"use client";

// AppliedJobsPage.jsx
import JobCard from "@/components/JobCard";
import { Job } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AppliedJobsPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);
    const [jobsToDisplay, setJobsToDisplay] = useState<number>(16); // Number of jobs displayed initially

    const fetchAppliedJobs = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`/api/user`);
            if (res.data.success === true) {
                setAppliedJobs(res.data.user.appliedJobs);
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAppliedJobs();
    }, []);

    const jobsToDisplayList = appliedJobs?.slice(0, jobsToDisplay);

    const handleLoadMore = () => {
        setJobsToDisplay(prev => Math.min(prev + 16, appliedJobs?.length));
    };

    const hasMoreJobs = appliedJobs.length > jobsToDisplay;

    return (
        <div className="pt-[95px] gap-3  flex flex-col items-center justify-start pb-10 w-full md:px-8 px-3 min-h-screen">
            <h1 className="font-semibold text-[30px]">Applied Jobs</h1>

            <div className="flex items-center justify-center flex-wrap gap-3">
                {isLoading
                    ? Array.from({ length: 16 }).map((_, index) => (
                        <JobCard key={index} isLoading={isLoading} job={null} />
                    ))
                    : jobsToDisplayList.length > 0
                        ? jobsToDisplayList.map((job) => (
                            <JobCard key={job._id} isLoading={isLoading} job={job} />
                        ))
                        : <p className="text-center text-gray-500">No applied jobs available.</p>
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

export default AppliedJobsPage;
