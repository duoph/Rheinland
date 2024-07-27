"use client"

import React, { useEffect, useRef, useState } from 'react';
import JobCard from '../JobCard';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { Job } from '@/types';
import axios from 'axios';

const FeaturedJobs = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

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

    const handleScrollRight = () => {
        try {
            const scrollAmount = 300;
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({
                    left: +scrollAmount,
                    behavior: 'smooth',
                });
            }
        } catch (error) {
            console.error('Error scrolling:', error);
        }
    };

    const handleScrollLeft = () => {
        try {
            const scrollAmount = 300;
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth',
                });
            }
        } catch (error) {
            console.error('Error scrolling:', error);
        }
    };

    return (
        <div className='flex items-center justify-center flex-col w-full px-5 md:px-7 md:py-12 py-7 gap-7'>
            <div className='flex items-center justify-center w-full'>
                <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] xs:text-[25px] font-semibold">Featured <span className="text-rheinland-yellow">Jobs</span></h1>
            </div>
            <div className='relative w-full'>
                <GoChevronLeft onClick={handleScrollLeft} className='z-10 absolute top-[140px] bg-black text-white md:left-6 left-3 rounded-full cursor-pointer' size={30} />
                <GoChevronRight onClick={handleScrollRight} className='z-10 absolute top-[140px] bg-black text-white right-3 md:right-6 rounded-full cursor-pointer' size={30} />
                <div ref={scrollContainerRef} style={{ scrollBehavior: "smooth" }} className='relative flex overflow-scroll justify-start items-center gap-2 w-full hideScrollBar min-h-[270px]'>
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
    );
};

export default FeaturedJobs;
