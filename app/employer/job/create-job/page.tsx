"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useAccount } from '@/context/useAccount';
import toast from 'react-hot-toast';
import SuggestionInput from '@/components/SuggestionInput';
import { locations } from '@/data/location';
import { jobCategories } from '@/data/jobData';

const CreateJob = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [skills, setSkills] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [minAge, setMinAge] = useState<string>('');
    const [maxAge, setMaxAge] = useState<string>('');

    const { account } = useAccount();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const jobData: any = {
            title,
            description,
            category,
            employerId: account.id,
            location,
            gender,
            minAge,
            maxAge,
        };

        const skillsArray: any = skills.length > 0 && skills.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
        if (skillsArray?.length > 0) {
            jobData.skills = skillsArray;
        }

        try {
            const res = await axios.post('/api/job', jobData);
            toast.success("Job created successfully");
            console.log('Job created successfully:', res.data);
        } catch (error) {
            console.error('Error creating job:', error);
            toast.error("Failed to create job");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='flex flex-col items-center justify-start pt-[90px] min-h-screen px-3 sm:px-5 gap-5 pb-20'>
            <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] xs:text-[25px] text-rheinland-red font-semibold">Create Job</h1>

            <form className='sm:w-[500px] w-full flex flex-col items-center justify-center gap-5' onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title'
                    required
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <SuggestionInput
                    placeholder='Category'
                    data={jobCategories}
                    searchInput={category}
                    setSearchInput={setCategory}
                    classNames="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"

                />

                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description'
                    required
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
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
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder='Skills (comma-separated)'
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <input
                    type='text'
                    value={minAge}
                    onChange={(e) => setMinAge(e.target.value)}
                    placeholder='Minimum Age'
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <input
                    type='text'
                    value={maxAge}
                    onChange={(e) => setMaxAge(e.target.value)}
                    placeholder='Maximum Age'
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />


                <SuggestionInput
                    placeholder='Location'
                    data={locations}
                    searchInput={location}
                    setSearchInput={setLocation}
                    classNames="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"

                />


                <button
                    type='submit'
                    className='px-5 py-3  w-full bg-rheinland-red text-white'
                    disabled={isLoading}
                >
                    {isLoading ? 'Creating...' : 'Create Job'}
                </button>
            </form>
        </div>
    );
};

export default CreateJob;
