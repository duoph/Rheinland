"use client"

import JobCard from '@/components/JobCard';
import { Job } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MyJobs = () => {

    const [selectedApplicantsType, setSelectedApplicantsType] = useState<string>('saved');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [jobs, setJobs] = useState<Job[]>([]);


    const fetchJobs = async () => {
        try {
            const res = await axios.get('/api/job');
            if (res.data.success) {
                setJobs(res.data.user.savedJobs);
            }
            console.log(res.data.user.savedJobs)
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
    };

    useEffect(() => {
        fetchJobs()
    }, [])


    return (
        <div className="pt-[95px] flex  flex-col items-center justify-start pb-10 w-full md:px-8 px-3 min-h-screen" >
            <h1 className="font-semibold text-[30px]">My Jobs</h1>

            <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-5 rounded-md py-3 px-5 md:px-10 w-full text-[15px] flex-wrap">
                <span
                    onClick={() => setSelectedApplicantsType('saved')}
                    className={`px-2 py-2 rounded-md cursor-pointer border ${selectedApplicantsType === 'saved' ? 'bg-rheinland-red text-white' : ''}`}
                >
                    Applied Jobs
                </span>
                <span
                    onClick={() => setSelectedApplicantsType('applied')}
                    className={`px-3 py-2 rounded-md cursor-pointer border ${selectedApplicantsType === 'applied' ? 'bg-rheinland-red text-white' : ''}`}
                >
                    Saved Jobs
                </span>
            </div>



            <div className='flex items-center justify-center flex-wrap gap-3'>
                {
                    isLoading
                        ? Array.from({ length: 16 }).map((_, index) => (
                            <JobCard key={index} isLoading={isLoading} job={null} />
                        ))
                        : jobs?.map((job) => (
                            <JobCard key={job._id} isLoading={isLoading} job={job} />
                        ))
                }
            </div>

        </div>
    )
}

export default MyJobs