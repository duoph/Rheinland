"use client"

import React, { useEffect, useState } from 'react';
import JobCard from '@/components/JobCard';
import { Job } from '@/types';
import axios from 'axios';
import SearchSuggestions from '@/components/Search/SearchSuggestions';

const Jobs = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [jobsToDisplay, setJobsToDisplay] = useState<number>(18);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const fetchJobs = async () => {
        try {

            const { data } = await axios.get('/api/job');
            console.log(data)
            if (data.success) setJobs(data.jobs);
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.error(error);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleLoadMore = () => {
        setJobsToDisplay((prev) => prev + 18);
    };

    const displayedJobs = jobs?.slice(0, jobsToDisplay);

    return (
        <div className='flex flex-col items-center justify-start pt-[80px] px-3 min-h-screen gap-4 py-10'>


            {/* Search Bar */}
            <div className='w-full md:w-full flex items-center justify-end md:flex-row flex-col gap-3 bg-slate py-5 rounded-sm'>
                <div className='relative flex items-center justify-center bg-white px-2 w-full rounded-sm'>
                    <input
                        type='text'
                        className='w-full px-3 py-3 border-b rounded-sm focus:outline-none'
                        placeholder='Job title or keyword'
                    />

                    <SearchSuggestions />

                </div>
                <div className='flex items-center justify-center bg-white px-2 w-full rounded-sm'>
                    <input
                        type='text'
                        className='w-full px-3 py-3 border-b rounded-sm focus:outline-none'
                        placeholder='E.g. Berlin'
                    />
                </div>
                <button className='w-full md:w-2/6 bg-rheinland-red text-white rounded-sm px-3 py-3 flex items-center justify-center'>
                    Search
                </button>
            </div>

            {/* {displayedJobs?.length === 0 ? (
                <div className='flex items-center justify-center h-[50vh]'>
                    <p className='flex items-center justify-center'>Loading...</p>
                </div>
            ) : ( */}

            <div className='flex items-center justify-center flex-wrap gap-3'>
                {isLoading
                    ? Array.from({ length: 9 }).map((_, index) => (
                        <JobCard key={index} isLoading={isLoading} job={null} />
                    ))
                    : displayedJobs?.map((job) => (
                        <JobCard key={job._id} isLoading={isLoading} job={job} />
                    ))
                }
            </div>
            {/* )} */}
            {displayedJobs?.length > 0 && jobs?.length > jobsToDisplay && (
                <button onClick={handleLoadMore} className='w-[200px] bg-rheinland-red text-white rounded-sm px-3 py-3'>
                    Load more
                </button>
            )}
        </div>
    );
};

export default Jobs;

