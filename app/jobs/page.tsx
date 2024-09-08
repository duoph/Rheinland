"use client";

import React, { useEffect, useState } from 'react';
import JobCard from '@/components/JobCard';
import { Job } from '@/types';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import SuggestionInput from '@/components/SuggestionInput';
import { jobData } from '@/data/jobData';
import { locations } from '@/data/location';

const Jobs = () => {

    const searchParams = useSearchParams();
    const queryJobTitle = searchParams.get('title') || "";
    const queryLocation = searchParams.get('location') || "";

    const router = useRouter();

    const [jobs, setJobs] = useState<Job[]>([]);
    const [jobsToDisplay, setJobsToDisplay] = useState<number>(16);
    const [jobTitle, setJobTitle] = useState<string>(queryJobTitle);
    const [location, setLocation] = useState<string>(queryLocation);
    const [searchResults, setSearchResults] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [noJobsMessage, setNoJobsMessage] = useState<string>('');
    const [sortOption, setSortOption] = useState<string>('popularJobs');

    const fetchJobs = async () => {
        try {
            const { data } = await axios.get('/api/job');
            if (data.success) {
                setJobs(data.jobs);
                setSearchResults(data.jobs);
                setNoJobsMessage(data.jobs.length === 0 ? 'No jobs available at the moment.' : '');
            } else {
                setNoJobsMessage('Failed to fetch jobs.');
            }
        } catch (error) {
            console.error(error);
            setNoJobsMessage('An error occurred while fetching jobs.');
        } finally {
            setIsLoading(false);
        }
    };

    const shuffleArray = (array: Job[]) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    const handleSearch = () => {
        setIsLoading(true);
        const filteredJobs = jobs.filter(job =>
            job?.title?.toLowerCase().includes(jobTitle.toLowerCase()) &&
            job?.location?.toLowerCase().includes(location.toLowerCase())
        );

        applySort(filteredJobs);
        setNoJobsMessage(filteredJobs.length === 0 && jobs.length > 0 ? 'No jobs match your search criteria.' : '');
        setIsLoading(false);
    };

    const sortJobsByDate = (jobsToSort: Job[]) => {
        return [...jobsToSort].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    };

    const applySort = (jobsToSort: Job[]) => {
        let sortedJobs = jobsToSort;
        if (sortOption === 'LatestJobs') {
            sortedJobs = sortJobsByDate(jobsToSort);
        } else if (sortOption === 'popularJobs') {
            sortedJobs = shuffleArray(jobsToSort);
        }
        setSearchResults(sortedJobs);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(e.target.value);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    useEffect(() => {
        applySort(searchResults);
    }, [sortOption])

    const handleLoadMore = () => {
        setJobsToDisplay(prev => prev + 18);
    };

    const displayedJobs = searchResults.slice(0, jobsToDisplay);

    return (
        <div className='flex flex-col items-center justify-start pt-[80px] px-3 min-h-screen py-5 '>
            {/* Search Bar */}
            <div className='w-full md:w-full flex items-center justify-end md:flex-row flex-col gap-3 bg-slate py-5 rounded-sm max-w-screen-xl'>
                <SuggestionInput
                    searchInput={jobTitle}
                    setSearchInput={setJobTitle}
                    data={jobData}
                    placeholder='Job Title'
                />
                <SuggestionInput
                    searchInput={location}
                    setSearchInput={setLocation}
                    data={locations}
                    placeholder='Location'
                />

                <button
                    onClick={handleSearch}
                    className='w-full md:w-2/6 bg-rheinland-red text-white rounded-sm px-3 py-3 flex items-center justify-center'
                >
                    Search
                </button>
            </div>

            {/* Filter Options */}
            <div className='w-full flex items-center justify-between mb-3 max-w-screen-xl' >
                <span onClick={() => router.push('/category')} className='underline text-sm cursor-pointer'>
                    View Categories
                </span>

                <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className='border outline-none focus:outline-none rounded-md py-1 px-4'
                >
                    <option value="popularJobs">Popular Jobs</option>
                    <option value="LatestJobs">Latest Jobs</option>
                </select>
            </div>

            <div className='flex items-center justify-center flex-wrap gap-3 mb-3'>
                {isLoading
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

            {displayedJobs.length >= 16 && searchResults.length > jobsToDisplay && (
                <button
                    onClick={handleLoadMore}
                    className='w-[200px] bg-rheinland-red text-white rounded-sm px-3 py-3'
                >
                    Load more
                </button>
            )}
        </div>
    );
};

export default Jobs;
