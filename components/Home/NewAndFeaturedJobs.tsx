"use client";

import React, { useEffect, useRef, useState } from 'react';
import JobCard from '../JobCard';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { Job } from '@/types';
import axios from 'axios';

const NewAndFeaturedJobs = () => {
    const featuredJobsRef = useRef<HTMLDivElement>(null);
    const newJobsRef = useRef<HTMLDivElement>(null);

const [jobs, setJobs] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchJobs = async () => {
        try {
            const res = await axios.get('/api/job');
            if (res.data.success === true) {
                setJobs(res.data.jobs);
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleScroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
        try {
            const scrollAmount = 300;
            if (ref.current) {
                ref.current.scrollBy({
                    left: direction === 'left' ? -scrollAmount : scrollAmount,
                    behavior: 'smooth',
                });
            }
        } catch (error) {
            console.error('Error scrolling:', error);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center w-full px-2 lg:px-32 md:px-20 md:py-10 py-6 gap-4'>
            {/* Featured Jobs Section */}
            <div className='flex flex-col items-center justify-center w-full  md:py-5 py-2 gap-4 max-w-7xl mx-auto'>
                <div className='flex items-center justify-center w-full'>
                    <h1 className="lg:text-[40px] text-[35px] font-semibold"> Featured <span className="text-rheinland-yellow">Jobs</span></h1>
                </div>
                <div className='relative w-full'>
                    <GoChevronLeft onClick={() => handleScroll(featuredJobsRef, 'left')} className='z-10 absolute top-[130px] left-3 md:-left-10 lg:-left-14 bg-black text-white  rounded-full cursor-pointer' size={30} />
                    <GoChevronRight onClick={() => handleScroll(featuredJobsRef, 'right')} className='z-10 absolute top-[130px] right-3 md:-right-10 lg:-right-14 bg-black text-white  rounded-full cursor-pointer' size={30} />
                    <div ref={featuredJobsRef} style={{ scrollBehavior: "smooth" }} className='relative flex overflow-scroll justify-start items-center gap-2 w-full hideScrollBar min-h-[270px]'>
                        {isLoading
                            ? Array.from({ length: 9 }).map((_, index) => (
                                <div key={index} className='min-w-[320px]'>
                                    <JobCard isLoading={isLoading} job={null} />
                                </div>
                            ))
                            : jobs.map((job) => (
                                <div key={job._id} className='min-w-[320px]'>
                                    <JobCard isLoading={isLoading} job={job} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* New Jobs Section */}
            <div className='flex flex-col items-center justify-center w-full md:py-5 py-2 gap-4  max-w-7xl mx-auto'>
                <div className='flex items-center justify-center w-full'>
                    <h1 className="lg:text-[40px] text-[35px] font-semibold">New <span className="text-rheinland-yellow">Jobs</span></h1>
                </div>
                <div className='relative w-full'>
                    <GoChevronLeft onClick={() => handleScroll(newJobsRef, 'left')} className='z-10 absolute top-[130px] left-3 md:-left-10 lg:-left-14 bg-black text-white  rounded-full cursor-pointer' size={30} />
                    <GoChevronRight onClick={() => handleScroll(newJobsRef, 'right')} className='z-10 absolute top-[130px] right-3 md:-right-10 lg:-right-14 bg-black text-white  rounded-full cursor-pointer' size={30} />
                    <div ref={newJobsRef} style={{ scrollBehavior: "smooth" }} className='relative flex overflow-scroll justify-start items-center gap-2 w-full hideScrollBar min-h-[270px]'>
                        {isLoading
                            ? Array.from({ length: 9 }).map((_, index) => (
                                <div key={index} className='min-w-[320px]'>
                                    <JobCard isLoading={isLoading} job={null} />
                                </div>
                            ))
                            : jobs.map((job) => (
                                <div key={job._id} className='min-w-[320px]'>
                                    <JobCard isLoading={isLoading} job={job} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewAndFeaturedJobs;
