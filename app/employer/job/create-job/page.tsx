"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useAccount } from '@/context/useAccount';
import toast from 'react-hot-toast';
import SuggestionInput from '@/components/SuggestionInput';
import { locations } from '@/data/location';
import { jobCategories } from '@/data/jobData';
import { useRouter } from 'next/navigation';

const CreateJob = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [skills, setSkills] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [languageLevel, setLanguageLevel] = useState<string>('');
    const [minAge, setMinAge] = useState<string>('');
    const [maxAge, setMaxAge] = useState<string>('');
    const [jobType, setJobType] = useState<string>('');
    const [numberOfOpenings, setNumberOfOpenings] = useState<string>('');

    const { account } = useAccount();

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const selectedCategory = jobCategories.find(cat => cat.name === category);


        const jobData: any = {
            title,
            description,
            category,
            employerId: account.id,
            location,
            gender,
            jobType,
            categoryId: selectedCategory?.id,
            languageLevel,
            minAge,
            maxAge,
        };

        const skillsArray: any = skills.length > 0 && skills.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
        if (skillsArray?.length > 0) {
            jobData.skills = skillsArray;
        }

        try {
            await axios.post('/api/job', jobData).then((res) => console.log(res.data));
            toast.success("Job created successfully");
            console.log('Job created successfully:');
        } catch (error) {
            console.error('Error creating job:', error);
            toast.error("Failed to create job");
        } finally {
            router.push('/employer/job/my-jobs');
            setIsLoading(false);
        }
    };


    return (
        <div className='flex flex-col items-center justify-start pt-[90px] min-h-screen px-3 sm:px-5 gap-5 pb-20'>
            <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] xs:text-[25px] text-rheinland-red font-semibold">Post a Job</h1>

            <form className='sm:w-[500px] w-full flex flex-col items-center justify-center gap-5' onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title'
                    required
                    className="w-full border px-3 py-2 border-b rounded-sm focus:outline-none"
                />


                <select required value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border px-3 py-2 border-b rounded-sm focus:outline-none"
                    name="category" id="">
                    <option value='' disabled>Select Category</option>
                    {jobCategories.map((JobCategory: any) => (
                        <option key={JobCategory.id} value={JobCategory.name}>{JobCategory.name}</option>
                    ))}
                </select>


                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description'
                    required
                    className="w-full border px-3 py-2 border-b rounded-sm focus:outline-none"
                />

                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                    className="w-full border px-3 py-2 border-b rounded-sm focus:outline-none"
                >
                    <option value='' disabled>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Any'>Any</option>
                </select>

                <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    required
                    className="w-full border px-3 py-2 border-b rounded-sm focus:outline-none"
                >
                    <option value='' disabled>Select Job Type</option>
                    <option value='Full Time'>Full Time</option>
                    <option value='Part Time'>Part Time</option>
                </select>

                <select
                    value={numberOfOpenings}
                    onChange={(e) => setNumberOfOpenings(e.target.value)}
                    required
                    className="w-full border px-3 py-2 border-b rounded-sm focus:outline-none"
                >
                    <option value="" disabled>Select Number of Openings</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="10+">10+</option>
                </select>

                <select
                    value={languageLevel}
                    onChange={(e) => setLanguageLevel(e.target.value)}
                    required
                    className="w-full border px-3 py-2 border-b rounded-sm focus:outline-none"
                >
                    <option value='' disabled>Select Minimum Language Level</option>
                    <option value='A1'>A1</option>
                    <option value='A2'>A2</option>
                    <option value='B1'>B1</option>
                    <option value='B2'>B2</option>
                    <option value='C1'>C1</option>
                    <option value='C2'>C2</option>
                </select>

                <input
                    type='text'
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder='Skills (comma-separated) (eg. Python, Java, C++)'
                    className="w-full border px-3 py-2 border-b rounded-sm focus:outline-none"
                />

                <input
                    type='text'
                    value={minAge}
                    onChange={(e) => setMinAge(e.target.value)}
                    placeholder='Minimum Age'
                    className="w-full border px-3 py-2 border-b rounded-sm focus:outline-none"
                />

                <input
                    type='text'
                    value={maxAge}
                    onChange={(e) => setMaxAge(e.target.value)}
                    placeholder='Maximum Age'
                    className="w-full border px-3 py-2 border-b rounded-sm focus:outline-none"
                />


                <SuggestionInput
                    placeholder='Location'
                    data={locations}
                    searchInput={location}
                    setSearchInput={setLocation}
                    classNames="w-full border px-3 py-2 border-b rounded-sm focus:outline-none"

                />


                <button
                    type='submit'
                    className='px-5 py-2  w-full bg-rheinland-red text-white'
                    disabled={isLoading}
                >
                    {isLoading ? 'Posting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default CreateJob;
