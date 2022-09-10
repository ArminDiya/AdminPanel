import React from 'react';
import { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useStateContext } from '../contexts/ContextProvider';
import {  fetchData, locations } from '../utils/fetchData';
import { countriesUrl } from '../config';
const SearchBar = () => {
  const {currentColor} = useStateContext();
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState();
  const handleSearch = async()=>{
    if(search) {
      const locationsData = await fetchData(countriesUrl, locations);
      setCountries(locationsData);

    }
  }

  console.log(countries)
  return (
    <div>
      <form method='GET'>   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
          <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <div aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <BiSearch/>
                  </div>
              </div>
              <input type="text" id="default-search" onChange={(e)=> setSearch(e.target.value.toLowerCase())} className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Mockups, Logos..." required/>
              {console.log(search)}
              <button style={{background: `${currentColor}`}} type="button" onClick={handleSearch} className='cursor-pointer text-white absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none 
              font-medium rounded-lg text-sm px-4 py-2 transition-opacity duration-500 transform hover:text-white
              hover:opacity-50
              hover:shadow-md'>Search</button>
          </div>
      </form>
      <div>
        {countries && countries.map(
          (country)=>
          <div key={country.key}>
            {search === country.value.toLowerCase() && 
              <div className='mt-5 flex justify-between font-bold border rounded-full  md:m-10 mt-24 p-2 md:p-10 '>
                <p className='ml-2'>Continent : {country.continent_code}</p>
                <p>Country : {country.value}</p>
                <p className='mr-2'>Currency : {country.currency}</p>
              </div>
              
            }
          </div>
        )}
      </div>
    </div>

  );
}
 
export default SearchBar