"use client";

import JobCard from '@/components/JobCard';
import { jobCategories } from '@/data/jobData';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SingleCategory = () => {

    const { categoryId } = useParams();

    const [categoryJobs, setCategoryJobs] = useState<any>()
    const [loading, setLoading] = useState(false)

    const category: any = jobCategories.find((cat: any) => cat.id == categoryId);

    const categoryJobFetch = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`/api/job/category/${category.name}`)
            setCategoryJobs(res.data.jobs)
            console.log(res)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        categoryJobFetch()
    }, [])

    if (!category) {
        return (
            <div className='pt-[90px] min-h-screen flex items-center justify-center'>
                <h1 className='text-2xl font-bold text-gray-700'>Category not found</h1>
            </div>
        );
    }

    return (
        <div className='pt-[90px] pb-10 px-4 min-h-screen bg-gray-100'>
            <h1 className='text-4xl font-bold text-rheinland-red mb-6'>{category.name}</h1>
            <p className='text-lg text-gray-700 mb-8'>{category.description}</p>


            <div className='flex items-center justify-center flex-wrap gap-3 mb-3'>
                {
                    loading
                        ? Array.from({ length: 16 }).map((_, index) => (
                            <JobCard key={index} isLoading={loading} job={null} />
                        ))
                        : categoryJobs?.length > 0
                            ? categoryJobs.map((job: any) => (
                                <JobCard key={job._id} isLoading={loading} job={job} />
                            ))
                            : <p className='text-center text-red-500'>No Jobs Found</p>
                }
            </div>


        </div>
    );
};

export default SingleCategory;
