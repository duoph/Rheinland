"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminJobCard from '@/components/Admin/AdminJobCard';
import { CiSearch } from 'react-icons/ci';

const ApplicationsPage = () => {
    const [jobs, setJobs] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [applicantsToDisplay, setApplicantsToDisplay] = useState<number>(16);

    // Fetch all jobs from the API
    const fetchAllJobs = async () => {
        try {
            const response = await axios.get("/api/job/");
            const sortedJobs = response.data.jobs.sort((a: any, b: any) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
            setJobs(sortedJobs);
            setSearchResults(sortedJobs); // Initialize search results with sorted jobs
        } catch (error) {
            console.error("Error fetching jobs:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAllJobs();
    }, []);

    // Filter jobs based on search input
    const handleSearch = () => {
        if (search) {
            setSearchResults(jobs.filter(job =>
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.location.toLowerCase().includes(search.toLowerCase())
            ));
        } else {
            setSearchResults(jobs);
        }
    };

    // Load more jobs
    const handleLoadMore = () => {
        setApplicantsToDisplay(prev => prev + 16);
    };

    const displayJobs = searchResults.slice(0, applicantsToDisplay);

    return (
        <div className="flex items-center justify-center flex-col pt-[90px] px-5 md:px-10">
            <div className=' rounded-md flex items-center justify-center cursor-pointer gap-3 bg-rheinland-red pr-3 w-full lg:w-1/2 md:w-2/3 mb-4'>
                <input
                    type='text'
                    placeholder='Search by job title or location'
                    className='border px-4 py-4 rounded-md w-full outline-none focus:outline-none'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <CiSearch
                    onClick={handleSearch}
                    className='rounded-md text-[30px] cursor-pointer text-white'
                />
            </div>

            <div className="flex items-center justify-center flex-wrap gap-3">
                {
                    isLoading
                        ? Array.from({ length: 16 }).map((_, index) => (
                            <AdminJobCard key={index} isLoading={isLoading} job={null} />
                        ))
                        : displayJobs.length > 0
                            ? displayJobs.map((job) => (
                                <AdminJobCard key={job._id} isLoading={isLoading} job={job} />
                            ))
                            : <p>No jobs available</p>

                }
            </div>

            {displayJobs.length > 0 && searchResults.length > applicantsToDisplay && (
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handleLoadMore}
                        className="w-[200px] bg-rheinland-red text-white rounded-sm px-3 py-3"
                    >
                        Load more
                    </button>
                </div>
            )}
        </div>
    );
};

export default ApplicationsPage;
