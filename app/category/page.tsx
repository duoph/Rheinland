"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { jobCategories } from '@/data/jobData';
import { CiCircleChevRight } from 'react-icons/ci';

const CategoryPage = () => {

    const router = useRouter();

    return (
        <div className='flex flex-col items-center justify-center pt-[90px] pb-10 min-h-screen px-4 bg-gray-100'>
            <h1 className='text-4xl font-bold mb-12'>Categories</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {jobCategories.length > 0 ? (
                    jobCategories.map(category => (
                        <div
                            key={category.id}
                            className='flex flex-col items-center justify-center bg-white border border-gray-200 h-[150px] sm:min-h-[250px] sm:max-h-[250px] rounded-lg shadow-md cursor-pointer '
                            onClick={() => router.push(`/category/${category.id}`)}
                        >
                            <div className='bg-rheinland-red w-full text-white rounded-t-lg py-3 px-4'>
                                <h2 className='text-lg font-semibold'>{category.name}</h2>
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
                            <div className='flex items-center justify-end w-full px-4 pb-3'>
                                <span className="flex gap-1 items-center text-rheinland-red font-medium">
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
