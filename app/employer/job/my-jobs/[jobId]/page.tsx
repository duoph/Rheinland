"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAccount } from '@/context/useAccount';
import toast from 'react-hot-toast';
import SuggestionInput from '@/components/SuggestionInput';
import { locations } from '@/data/location';
import { jobCategories } from '@/data/jobData';
import { useRouter, useParams } from 'next/navigation';

const EditJob = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [skills, setSkills] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [salary, setSalary] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [languageLevel, setLanguageLevel] = useState<string>('');
    const [jobType, setJobType] = useState<string>('');
    const [numberOfOpenings, setNumberOfOpenings] = useState<string>('');

    const { account } = useAccount();
    const router = useRouter();
    const { jobId } = useParams();

    const fetchJobDetails = async () => {
        try {
            const response = await axios.get(`/api/job/${jobId}`);
            const jobData = response.data.job;

            setTitle(jobData.title);
            setCategory(jobData.category);
            setDescription(jobData.description);
            setSkills(jobData.skills.join(', '));
            setLocation(jobData.location);
            setSalary(jobData.salary);
            setGender(jobData.gender);
            setLanguageLevel(jobData.languageLevel);
            setJobType(jobData.jobType);
            setNumberOfOpenings(jobData.numberOfOpenings);
        } catch (error) {
            console.error('Error fetching job details:', error);
        }
    };

    useEffect(() => {
        fetchJobDetails();
    }, [jobId]);

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
            salary,
            numberOfOpenings,
            categoryId: selectedCategory?.id,
            languageLevel
        };

        const skillsArray: any = skills.length > 0 && skills.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
        if (skillsArray?.length > 0) {
            jobData.skills = skillsArray;
        }

        try {
            await axios.put(`/api/job/${jobId}`, jobData);
            toast.success("Job updated successfully");
            router.push('/employer/job/my-jobs');
        } catch (error) {
            console.error('Error updating job:', error);
            toast.error("Failed to update job");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='flex flex-col items-center justify-start pt-[90px] min-h-screen px-3 sm:px-5 gap-5 pb-20'>
            <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] xs:text-[25px] text-rheinland-red font-bold">Edit Job</h1>

            <form className='sm:w-[500px] w-full flex flex-col items-center justify-center gap-5' onSubmit={handleSubmit}>

                {/* Title Input */}
                <div className='flex flex-col w-full'>
                    <label className='text-sm font-medium'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Enter job title'
                        required
                        className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                    />
                </div>

                {/* Category Select */}
                <div className='flex flex-col w-full'>
                    <label className='text-sm font-medium'>Category</label>
                    <select
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                        name="category"
                    >
                        <option value='' disabled>Select Category</option>
                        {jobCategories.map((JobCategory: any) => (
                            <option key={JobCategory.id} value={JobCategory.name}>{JobCategory.name}</option>
                        ))}
                    </select>
                </div>

                {/* Description Input */}
                <div className='flex flex-col w-full'>
                    <label className='text-sm font-medium'>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Enter job description'
                        required
                        className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                    />
                </div>

                {/* Gender Select */}
                <div className='flex flex-col w-full'>
                    <label className='text-sm font-medium'>Gender</label>
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
                </div>

                {/* Job Type Select */}
                <div className='flex flex-col w-full'>
                    <label className='text-sm font-medium'>Job Type</label>
                    <select
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                        required
                        className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                    >
                        <option value='' disabled>Select Job Type</option>
                        <option value='Full Time'>Full Time</option>
                        <option value='Part Time'>Part Time</option>
                        <option value='Contract'>Contract</option>
                    </select>
                </div>

                {/* Number of Openings Select */}
                <div className='flex flex-col w-full'>
                    <label className='text-sm font-medium'>Number of Openings</label>
                    <select
                        value={numberOfOpenings}
                        onChange={(e) => setNumberOfOpenings(e.target.value)}
                        required
                        className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
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
                </div>

                {/* Language Level Select */}
                <div className='flex flex-col w-full'>
                    <label className='text-sm font-medium'>Language Level</label>
                    <select
                        value={languageLevel}
                        onChange={(e) => setLanguageLevel(e.target.value)}
                        required
                        className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                    >
                        <option value='' disabled>Select Minimum Language Level</option>
                        <option value='A1'>A1</option>
                        <option value='A2'>A2</option>
                        <option value='B1'>B1</option>
                        <option value='B2'>B2</option>
                        <option value='C1'>C1</option>
                        <option value='C2'>C2</option>
                    </select>
                </div>

                {/* Skills Input */}
                <div className='flex flex-col w-full'>
                    <label className='text-sm font-medium'>Skills</label>
                    <input
                        type='text'
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        placeholder='Enter skills (comma-separated) (e.g., Python, Java, C++)'
                        className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                    />
                </div>

                {/* Salary Input */}
                <div className='flex flex-col w-full'>
                    <label className='text-sm font-medium'>Salary (Per Month) (Optional)</label>
                    <input
                        type='text'
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder='Enter salary'
                        className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                    />
                </div>

                {/* Location SuggestionInput */}
                <SuggestionInput
                    placeholder="Enter location"
                    searchInput={location}
                    setSearchInput={setLocation}
                    data={locations}
                />

                <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-3 w-full bg-rheinland-red rounded-md text-white font-semibold text-[17px] disabled:bg-gray-400"
                >
                    {isLoading ? 'Updating...' : 'Update'}
                </button>
            </form>
        </div>
    )
}

export default EditJob;
