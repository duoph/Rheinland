"use client";

import JobCard from '@/components/JobCard';
import { jobCategories } from '@/data/jobData';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SingleCategory = () => {

    const { categoryId } = useParams();

    const [categoryJobs, setCategoryJobs] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [jobsToDisplay, setJobsToDisplay] = useState<number>(16);


    const category: any = jobCategories.find((cat: any) => cat.id == categoryId);

    const handleLoadMore = () => {
        setJobsToDisplay(prev => prev + 18);
    };

    const displayedJobs = categoryJobs.slice(0, jobsToDisplay);

    const categoryJobFetch = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`/api/job/category/${category.id}`);
            setCategoryJobs(res.data.jobs);
            console.log(res);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        categoryJobFetch();
    }, []);

    if (!category) {
        return (
            <div className='pt-[90px] min-h-screen flex items-center justify-center'>
                <h1 className='text-2xl font-bold text-gray-700'>Category not found</h1>
            </div>
        );
    }

    return (
        <div className='pt-[90px] pb-10 px-4 min-h-screen flex flex-col items-center'>
            <div className='max-w-6xl w-full'>
                <h1 className='text-4xl font-bold text-rheinland-red mb-4 text-center'>{category.name}</h1>
                <p className='text-lg text-gray-700 text-center mb-8'>{category.description}</p>

                <div className='flex items-center justify-center flex-wrap gap-3 max-w-screen-2xl'>
                    {loading
                        ? Array.from({ length: 26 }).map((_, index) => (
                            <JobCard key={index} isLoading={loading} job={null} />
                        ))
                        : displayedJobs?.length > 0
                            ? displayedJobs.map((job: any) => (
                                <JobCard key={job._id} isLoading={loading} job={job} />
                            ))
                            : <p className='text-center col-span-full text-red-500'>No Jobs Found</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;
