"use client"

import React, { useEffect, useRef, useState } from 'react';
import JobCard from '../JobCard';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { Job } from '@/types';
import axios from 'axios';

const FeaturedJobs = () => {

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const [jobs, setJobs] = useState<Job[] | []>([]);

    const fetchJobs = async () => {
        try {
            const res = await axios.get('/api/job');
            if (res.data.success === true) {
                setJobs(res.data.jobs);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
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

                <div ref={scrollContainerRef} style={{ scrollBehavior: 'smooth' }} className='flex overflow-x-auto hideScrollBar w-full'>
                    <div className='flex gap-2 w-full'>
                        {jobs?.map((job) => (
                            <div key={job._id} className='sm:min-w-[400px] w-full sm:max-w-[400px] '>
                                <JobCard job={job} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;
