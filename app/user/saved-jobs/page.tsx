"use client";

// SavedJobsPage.jsx
import JobCard from "@/components/JobCard";
import { Job } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SavedJobsPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [savedJobs, setSavedJobs] = useState<Job[]>([]);
    const [jobsToDisplay, setJobsToDisplay] = useState<number>(16); // Number of jobs displayed initially

    // Function to fetch saved jobs from the API
    const fetchSavedJobs = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`/api/user`);
            if (res.data.success === true) {
                setSavedJobs(res.data.user.savedJobs);
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
    };

    // Fetch saved jobs on initial render
    useEffect(() => {
        fetchSavedJobs();
    }, []);

    // Determine the jobs to display based on pagination
    const jobsToDisplayList = savedJobs?.slice(0, jobsToDisplay);

    // Handle "Load More" button click
    const handleLoadMore = () => {
        setJobsToDisplay(prev => Math.min(prev + 16, savedJobs?.length));
    };

    // Check if there are more jobs to load
    const hasMoreJobs = savedJobs?.length > jobsToDisplay;

    return (
        <div className="pt-[95px] gap-3 flex flex-col items-center justify-start pb-10 w-full md:px-8 px-3 min-h-screen">
            <h1 className="font-semibold text-[30px]">Saved Jobs</h1>

            <div className="flex items-center justify-center flex-wrap gap-3">
                {isLoading
                    ? Array.from({ length: 16 }).map((_, index) => (
                        <JobCard key={index} isLoading={isLoading} job={null} />
                    ))
                    : jobsToDisplayList.length > 0
                        ? jobsToDisplayList.map((job) => (
                            <JobCard key={job._id} isLoading={isLoading} job={job} />
                        ))
                        : <p className="text-center text-gray-500">No saved jobs available.</p>
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

export default SavedJobsPage;
