"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { jobCategories } from '@/data/jobData';
import { CiCircleChevRight } from 'react-icons/ci';

const CategoryPage = () => {
    const router = useRouter();

    return (
        <div className='flex flex-col items-center justify-center pt-20 pb-10 min-h-screen px-4 bg-gray-100'>
            <h1 className='text-4xl font-bold mb-12 text-center'>Job Categories</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full'>
                {jobCategories.length > 0 ? (
                    jobCategories.map(category => (
                        <div
                            key={category.id}
                            className='flex flex-col items-start justify-between bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 h-full'
                            onClick={() => router.push(`/category/${category.id}`)}
                        >
                            <div className='bg-rheinland-red w-full text-white rounded-t-lg py-3 px-4'>
                                <h2 className='text-xl font-semibold'>{category.name}</h2>
                            </div>
                            <div className='p-4 flex-grow'>
                                <p
                                    className="font-light text-gray-700 overflow-hidden"
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
                            <div className='flex items-center justify-between w-full px-4 pb-4'>
                                <span className="text-rheinland-red font-medium flex items-center gap-1">
                                    Show all jobs
                                    <CiCircleChevRight className="text-xl" />
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-gray-600 text-lg'>No categories available.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
