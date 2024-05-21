"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { title } from 'process';
import { useAccount } from '@/context/useAccount';
import toast from 'react-hot-toast';

const CreateJob = () => {
    const [isLoading, setIsLoading] = useState<boolean>()
    const [job, setJob] = useState({
        title: '',
        category: '',
        description: '',
        skills: '',
        state: '',
        location: '',
        requirements: '',
        gender: '',
        minAge: '',
        maxAge: '',
    });

    const { account } = useAccount()

    const cities = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose"
    ];

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setJob({
            ...job,
            [name]: value
        });
    };

    const handleSubmit = async (e: any) => {

        setIsLoading(true)

        e.preventDefault();

        const jobData = {
            ...job,
            skills: job.skills.split(',').map(skill => skill.trim())
        };

        console.log(jobData)

        try {
            const res = await axios.post('/api/job', {
                title: jobData.title,
                description: jobData.description,
                category: jobData.category,
                skills: jobData.skills,
                employerId: account.id,
                state: jobData.state,
                location: jobData.location,
                requirements: jobData.requirements,
                gender: jobData.gender,
                minAge: jobData.minAge,
                maxAge: jobData.maxAge,

            });

            toast.success("Job created successfully")
            console.log('Job created successfully:', res.data);
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)

            console.error('Error creating job:', error);
        }
    };

    return (
        <div className='flex flex-col items-center justify-start pt-[90px] min-h-screen px-3 sm:px-5 gap-5 pb-20'>

            <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] xs:text-[25px] text-rheinland-red font-semibold">Create Job</h1>

            <form className=' sm:w-[500px] w-full flex flex-col items-center justify-center gap-5' onSubmit={handleSubmit}>

                <input
                    type='text'
                    name='title'
                    value={job.title}
                    onChange={handleChange}
                    placeholder='Title'
                    required
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <input
                    type='text'
                    name='category'
                    value={job.category}
                    onChange={handleChange}
                    placeholder='Category'
                    required
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />
                <textarea
                    name='description'
                    value={job.description}
                    onChange={handleChange}
                    placeholder='Description'
                    required
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <select
                    name='gender'
                    value={job.gender}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                >
                    <option value='' disabled>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Any'>Any</option>

                </select>

                <input
                    type='text'
                    name='skills'
                    value={job.skills}
                    onChange={handleChange}
                    placeholder='Skills (comma-separated)'
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <input
                    type='text'
                    name='minAge'
                    value={job.minAge}
                    onChange={handleChange}
                    placeholder='Minimum Age'
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <input
                    type='text'
                    name='maxAge'
                    value={job.maxAge}
                    onChange={handleChange}
                    placeholder='Maximum Age'
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <input
                    type='text'
                    name='state'
                    value={job.state}
                    onChange={handleChange}
                    placeholder='State'
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <input
                    type='text'
                    name='location'
                    value={job.location}
                    list="cities"
                    onChange={handleChange}
                    placeholder='Location'
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <datalist className='w-full' id="cities">
                    {cities.map((city, index) => (
                        <option key={index} value={city} />
                    ))}
                </datalist>


                <button
                    type='submit'
                    className='px-5 py-3  w-full bg-rheinland-red text-white'
                    disabled={isLoading}
                >
                    {isLoading ? 'Creating...' : 'Create Job'}
                </button>
            </form>
        </div >
    );
};

export default CreateJob;
