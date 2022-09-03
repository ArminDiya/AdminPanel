import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { useStateContext } from '../contexts/ContextProvider';
const SearchBar = ({ placeholder, data }) => {
  const {currentColor} = useStateContext();
  console.log(currentColor);
  return (
<form>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <div aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <BiSearch/>
            </div>
        </div>
        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button style={{background: `${currentColor}`}} type="submit" className='text-white absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2'>Search</button>
    </div>
</form>
  );
}
 
export default SearchBar