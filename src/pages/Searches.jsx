import React from 'react'
import { Header } from '../component'
import SearchBar from '../component/SearchBar';
const Searches = () => {

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="Pie" title="Project Cost Breakdown" />
        <div className="w-full">
          <SearchBar placeholder='Enter' />
        </div>
  </div>
  )
}

export default Searches;