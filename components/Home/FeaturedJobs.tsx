"use client"

import React, { useRef } from 'react'
import JobCard from '../JobCard'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

const FeaturedJobs = () => {

    const scrollContainerRef = useRef<HTMLDivElement>(null);


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
        <div className='flex items-center justify-center flex-col w-full px-5 md:px-7 md:py-12 py-7'>
            <div className='flex items-center justify-center w-full'>
                <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] xs:text-[25px] font-semibold">Featured <span className="text-rheinland-yellow">Jobs</span></h1>
            </div>
            <div className='relative w-full px-2'>
                <GoChevronLeft onClick={handleScrollLeft} className='z-10 absolute top-[110px] bg-black text-white md:left-6 left-3 rounded-full cursor-pointer' size={30} />
                <GoChevronRight onClick={handleScrollRight} className='z-10 absolute top-[110px] bg-black text-white right-3 md:right-6 rounded-full cursor-pointer' size={30} />

                <div ref={scrollContainerRef} style={{ scrollBehavior: "smooth" }} className='relative flex  overflow-scroll justify-start items-center gap-2 w-full hideScrollBar min-h-[230px]'>
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
            </div>
        </div >
    );
};

export default FeaturedJobs;