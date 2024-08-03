"use client";

import React, { useEffect, useState } from 'react';
import JobCard from '@/components/JobCard';
import { Job } from '@/types';
import axios from 'axios';
import SearchInput from '@/components/Search/SearchInput';
import { useSearchParams } from 'next/navigation';

const Jobs = () => {
    // Getting query from URL
    const searchParams = useSearchParams();
    const queryJobTitle = searchParams.get('title') || "";
    const queryLocation = searchParams.get('location') || "";

    const [jobs, setJobs] = useState<Job[]>([]);
    const [jobsToDisplay, setJobsToDisplay] = useState<number>(16);
    const [jobTitle, setJobTitle] = useState<string>(queryJobTitle);
    const [location, setLocation] = useState<string>(queryLocation);
    const [searchResults, setSearchResults] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchJobs = async () => {
        try {
            const { data } = await axios.get('/api/job');
            if (data.success) {
                setJobs(data.jobs);
                setSearchResults(data.jobs); // Initialize search results with all jobs
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

    useEffect(() => {
        // Filter jobs based on the search inputs
        const filteredJobs = jobs.filter(job =>
            job?.title?.toLowerCase().includes(jobTitle?.toLowerCase()) &&
            job?.location?.toLowerCase().includes(location?.toLowerCase())
        );
        setSearchResults(filteredJobs);
    }, [jobTitle, location, jobs]);

    const handleLoadMore = () => {
        setJobsToDisplay(prev => prev + 18);
    };

    const displayedJobs = searchResults.slice(0, jobsToDisplay);

    return (
        <div className='flex flex-col items-center justify-start pt-[80px] px-3 min-h-screen gap-4 py-10'>
            {/* Search Bar */}
            <div className='w-full md:w-full flex items-center justify-end md:flex-row flex-col gap-3 bg-slate py-5 rounded-sm'>
                <SearchInput
                    searchInput={jobTitle}
                    setSearchInput={setJobTitle}
                    type='job'
                />
                <SearchInput
                    searchInput={location}
                    setSearchInput={setLocation}
                    type='location'
                />
                <button
                    onClick={() => fetchJobs()} // Trigger search on button click
                    className='w-full md:w-2/6 bg-rheinland-red text-white rounded-sm px-3 py-3 flex items-center justify-center'
                >
                    Search
                </button>
            </div>

            <div className='flex items-center justify-center flex-wrap gap-3'>
                {
                    isLoading
                        ? Array.from({ length: 16 }).map((_, index) => (
                            <JobCard key={index} isLoading={isLoading} job={null} />
                        ))
                        : displayedJobs.map((job) => (
                            <JobCard key={job._id} isLoading={isLoading} job={job} />
                        ))
                }
            </div>

            {
                displayedJobs.length > 0 && jobs.length > jobsToDisplay && (
                    <button
                        onClick={handleLoadMore}
                        className='w-[200px] bg-rheinland-red text-white rounded-sm px-3 py-3'
                    >
                        Load more
                    </button>
                )
            }
        </div>
    );
};

export default Jobs;
