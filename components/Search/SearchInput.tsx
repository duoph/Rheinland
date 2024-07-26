import React, { useState, useEffect, useMemo } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { jobCategories } from '@/data/jobCategory';

interface JobCategory {
    id: number;
    name: string;
}

interface SearchInputProps {
    setSearchInput: (input: string) => void;
    searchInput: string;
    type?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ setSearchInput, searchInput, type }) => {
    const [showSuggestion, setShowSuggestion] = useState<boolean>(!!searchInput);

    useEffect(() => {
        setShowSuggestion(!!searchInput);
    }, [searchInput]);

    const filteredJobCategories = useMemo(() => {
        return jobCategories.filter((job: JobCategory) =>
            job.name.toLowerCase().includes(searchInput.toLowerCase())
        );
    }, [searchInput]);

    return (
        <ClickAwayListener onClickAway={() => setShowSuggestion(false)}>
            <div className='relative flex items-center justify-center bg-white px-2 w-full rounded-sm'>
                <input
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    type='text'
                    className='w-full px-3 py-3 border-b rounded-sm focus:outline-none'
                    placeholder='Job title or keyword'
                />

                {showSuggestion && (
                    <div
                        className='w-[calc(100%-10px)] rounded-md shadow-sm bg-slate-100 absolute top-[55px] right-0 flex flex-col items-center z-20'
                        role="listbox"
                        aria-labelledby="search-input"
                    >
                        {filteredJobCategories.slice(0, 4).map((jobCategory: JobCategory) => (
                            <div
                                onClick={() => setSearchInput(jobCategory.name)}
                                key={jobCategory.id}
                                className='w-full py-2 px-4 bg-gray-200 text-black cursor-pointer hover:bg-gray-300'
                                role="option"
                                aria-selected="false"
                            >
                                <h1>{jobCategory.name}</h1>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ClickAwayListener>
    );
};

export default SearchInput;
