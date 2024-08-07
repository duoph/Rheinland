"use client";

import React, { useEffect, useState } from 'react';
import JobCard from '@/components/JobCard';
import { Job } from '@/types';
import axios from 'axios';
import SearchInput from '@/components/SuggestionInput';
import { useSearchParams } from 'next/navigation';
import SuggestionInput from '@/components/SuggestionInput';
import { jobData } from '@/data/jobData';
import { locations } from '@/data/location';

const Jobs = () => {

    const searchParams = useSearchParams();
    const queryJobTitle = searchParams.get('title') || "";
    const queryLocation = searchParams.get('location') || "";

    const [jobs, setJobs] = useState<Job[]>([]);
    const [jobsToDisplay, setJobsToDisplay] = useState<number>(16);
    const [jobTitle, setJobTitle] = useState<string>(queryJobTitle);
    const [location, setLocation] = useState<string>(queryLocation);
    const [searchResults, setSearchResults] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [noJobsMessage, setNoJobsMessage] = useState<string>('');

    const fetchJobs = async () => {
        try {
            const { data } = await axios.get('/api/job');
            if (data.success) {
                setJobs(data.jobs);
                setSearchResults(data.jobs); // Initialize search results with all jobs
                if (data.jobs.length === 0) {
                    setNoJobsMessage('No jobs available at the moment.');
                } else {
                    setNoJobsMessage('');
                }
            } else {
                setNoJobsMessage('Failed to fetch jobs.');
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
            setNoJobsMessage('An error occurred while fetching jobs.');
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

        if (filteredJobs.length === 0 && jobs.length > 0) {
            setNoJobsMessage('No jobs match your search criteria.');
        } else {
            setNoJobsMessage('');
        }
    }, [jobTitle, location, jobs]);

    const handleLoadMore = () => {
        setJobsToDisplay(prev => prev + 18);
    };

    const displayedJobs = searchResults.slice(0, jobsToDisplay);

    return (
        <div className='flex flex-col items-center justify-start pt-[80px] px-3 min-h-screen gap-4 py-10'>
            {/* Search Bar */}
            <div className='w-full md:w-full flex items-center justify-end md:flex-row flex-col gap-3 bg-slate py-5 rounded-sm'>
                <SuggestionInput
                    searchInput={jobTitle}
                    setSearchInput={setJobTitle}
                    data={jobData}
                    placeholder='Job Title'
                />
                <SuggestionInput
                    searchInput={jobTitle}
                    setSearchInput={setJobTitle}
                    data={locations}
                    placeholder='Location'
                />
                <button
                    onClick={fetchJobs} // Trigger search on button click
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
                        : displayedJobs.length > 0
                            ? displayedJobs.map((job) => (
                                <JobCard key={job._id} isLoading={isLoading} job={job} />
                            ))
                            : <p className='text-center text-red-500'>{noJobsMessage}</p>
                }
            </div>

            {
                displayedJobs.length >= 16 && jobs.length > jobsToDisplay && (
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

