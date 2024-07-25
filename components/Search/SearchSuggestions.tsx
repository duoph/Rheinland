import { jobCategories } from '@/data/jobCategory';
import { Job } from '@/types';
import React from 'react';

interface SearchSuggestionsProps {
    setSearchInput: (input: string) => void;
    searchInput: string
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ setSearchInput, searchInput }) => {



    const filteredJobCategory = jobCategories.filter((job: any) => {
        return job.name.toLowerCase().includes(searchInput.toLowerCase());
    });



    return (
        <div className='w-[calc(100%-10px)] rounded-md shadow-sm bg-slate-100 absolute top-[55px] right-0 flex gap-[1px] flex-col items-center justify-center z-50'>
            {filteredJobCategory.slice(0, 4).map((jobCategory: any) => (
                <div
                    onClick={
                    () => setSearchInput(jobCategory.name)

                    }
                    key={jobCategory.id}
                    className='w-full py-1 px-4 bg-gray-200 text-black cursor-pointer'
                >
                    <h1>{jobCategory.name}</h1>
                </div>
            ))}
        </div>
    );
};

export default SearchSuggestions;
