import React, { useState, useEffect, useMemo, useRef } from 'react';
import ClickAwayListener from 'react-click-away-listener';


interface Category {
  id: number;
  name: string;
}

interface SuggestionInputProps {
  setSearchInput: (input: string) => void;
  searchInput: string;
  placeholder?: string
  data: any[];
  classNames?: string
}

const SuggestionInput: React.FC<SuggestionInputProps> = ({ setSearchInput, searchInput, data, placeholder, classNames }) => {

  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = data

  const filteredSuggestions = useMemo(() => {
    return suggestions.filter((item: Category) =>
      item?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
    );
  }, [searchInput, suggestions]);

  const handleFocus = () => {
    if (searchInput.length >= 2) {
      setShowSuggestion(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    setShowSuggestion(value?.length >= 2);
  };

  // const handleClickAway = (event: MouseEvent) => {
  //   if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
  //     setShowSuggestion(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickAway);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickAway);
  //   };
  // }, []);

  return (

    <ClickAwayListener onClickAway={() => setShowSuggestion(false)}>

      <div className='relative flex items-center justify-center bg-white  w-full rounded-sm'>
        <input
          ref={inputRef}
          onChange={handleChange}
          value={searchInput}
          type='text'
          className={classNames ? classNames : 'w-full px-3 py-3 border-b rounded-sm focus:outline-none'}
          placeholder={placeholder}
          onFocus={handleFocus}
        />

        {/* {showSuggestion && (
          <div
            className='w-[calc(100%-10px)] rounded-md shadow-sm bg-slate-100 absolute top-[55px] right-0 flex flex-col items-center z-20'
            role="listbox"
            aria-labelledby="search-input"
          >
            {filteredSuggestions.slice(0, 4).map((item: Category) => (
              <div
                onClick={() => {
                  setSearchInput(item.name)
                  setShowSuggestion(false)
                }}
                key={item.id}
                className='w-full py-2 px-4 bg-gray-200 text-black cursor-pointer hover:bg-gray-300'
                role="option"
                aria-selected="false"
              >

                <h1>{item.name}</h1>

              </div>
            ))}
          </div>
        )} */}
      </div>

    </ClickAwayListener>

  );
};

export default SuggestionInput;
