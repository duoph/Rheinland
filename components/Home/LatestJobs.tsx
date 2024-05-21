"use client"

import React, { useEffect, useState } from 'react'
import JobCard from '../JobCard'
import { Job } from '@/types';
import axios from 'axios';

const LatestJobs = () => {

    const [jobs, setJobs] = useState<Job[] | []>(); // Correct type for jobs

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


    return (
        <div className='flex items-center justify-center flex-col w-full px-5 md:px-7 md:pb-20 pb-10 pt-5 gap-7'>
            <div className='flex items-center justify-center w-full'>
                <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] xs:text-[25px] font-semibold">Latest <span className="text-rheinland-yellow">Job Openings</span></h1>
            </div>

            <div className='relative flex items-center justify-center flex-wrap gap-3 w-full'>
                {jobs?.map((job) => (
                    <JobCard key={job?._id} job={job} />
                ))}
            </div>

        </div >
    )
}

export default LatestJobs