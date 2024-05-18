import JobCard from '@/components/JobCard'
import React from 'react'
import { CiLocationOn, CiSearch } from 'react-icons/ci'

const Jobs = () => {
    return (
        <div className='flex flex-col  items-center justify-start pt-[80px] px-3 '>

            {/* Search bar */}

            <div className="w-full  md:w-full flex items-center justify-end lg:flex-row flex-col gap-3 bg-slate px-5 py-5 rounded-sm">
                <div className="flex items-center justify-center bg-white px-2 w-full rounded-sm">
                    <CiSearch size={24} />
                    <input type="text" className="w-full px-3 py-3 border-b rounded-sm focus:outline-none" placeholder="Job Title or Keyword" />
                </div>
                <div className="flex items-center justify-center bg-white px-2 w-full rounded-sm">
                    <CiLocationOn size={24} />
                    <input type="text" className="w-full px-3 py-3 border-b rounded-sm focus:outline-none" placeholder="Eg: Berlin" />
                </div>
                <button className="w-full md:w-2/6 bg-rheinland-red text-white rounded-sm px-3 py-3">Search My job</button>
            </div>


            {/* displaying jobs with job card */}
            <div className='flex items-center justify-center flex-wrap gap-3 '>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
            <div className='flex items-center justify-center w-full py-5'>
                <button className=" w-[200px] bg-rheinland-red text-white rounded-sm px-3 py-3">Load More</button>
            </div>
        </div>
    )
}

export default Jobs