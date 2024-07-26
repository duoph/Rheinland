import { jobCategories } from '@/data/jobCategory';
import React from 'react';

interface SearchSuggestionsProps {
    setSearchInput: (input: string) => void;
    searchInput: string
}

const JobSearchSuggestions: React.FC<SearchSuggestionsProps> = ({ setSearchInput, searchInput }) => {



    const filteredJobCategory = jobCategories.filter((job: any) => {
        return job.name.toLowerCase().includes(searchInput.toLowerCase());
    });



    return (
        <div className='relative flex items-center justify-center bg-white px-2 w-full rounded-sm'>
            <input
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
                type='text'
                className='w-full px-3 py-3 border-b rounded-sm focus:outline-none'
                placeholder='Job title or keyword'
            />
            <div className='w-[calc(100%-10px)] rounded-md shadow-sm bg-slate-100 absolute top-[55px] right-0 flex gap-[1px] flex-col items-center justify-center z-20'>
                {filteredJobCategory.slice(0, 4).map((jobCategory: any) => (
                    <div
                        onClick={
                            () => setSearchInput(jobCategory.name)

                        }
                        key={jobCategory.id}
                        className='w-full py-2 px-4 bg-gray-200 text-black cursor-pointer'
                    >
                        <h1>{jobCategory.name}</h1>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default JobSearchSuggestions;
