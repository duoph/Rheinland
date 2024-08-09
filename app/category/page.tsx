"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { jobCategories } from '@/data/jobData';
import { CiCircleChevRight } from 'react-icons/ci';

const CategoryPage = () => {
    const router = useRouter();

    return (
        <div className='flex flex-col items-center justify-center pt-[90px] pb-10 min-h-screen px-4 bg-gray-100'>
            <h1 className='text-3xl font-bold mb-8 text-rheinland-red'>Categories</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {jobCategories.length > 0 ? (
                    jobCategories.map(category => (
                        <div
                            key={category.id}
                            className='bg-white border border-gray-200 h-[220px] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer'
                            onClick={() => router.push(`/category/${category.id}`)}
                        >
                            <div className='p-6 bg-rheinland-red text-white'>
                                <h2 className='text-xl font-semibold'>{category.name}</h2>
                            </div>
                            <div className='p-4'>
                                <p
                                    className="font-light h-full overflow-hidden"
                                    style={{
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    {category.description}
                                </p>
                            </div>

                            <div className='flex items-center justify-end w-full px-3'>

                                <span className="flex gap-2 items-center justify-center ">
                                    Show all jobs
                                    <CiCircleChevRight />
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No categories available.</p>
                )}
            </div >
        </div >
    );
}

export default CategoryPage;
