import React from 'react';
import SearchIcon from '../icon/SearchIcon';

interface SearchInputProps {
    searchValue: string
    onChange: any 
    placeholder: string
}

const SearchInput = ({ searchValue, onChange, placeholder }: SearchInputProps) => {
  return (
    <div className='relative flex w-full border-x-0 border-t-0 border-b-1 border-gray py-0 pl-0 text-black !ring-0 !ring-opacity-0 focus:outline-0'>
      <input
        value={searchValue}
        onChange={onChange}
        placeholder={placeholder}
        style={{ paddingLeft: '30px' }} // SVG 아이콘이 들어갈 공간 확보
        className='w-full'
      />
      <div className='absolute'>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
