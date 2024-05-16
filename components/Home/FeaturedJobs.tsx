import React from 'react'
import { CiCircleChevRight } from 'react-icons/ci'
import JobCard from '../JobCard'

const FeaturedJobs = () => {
    return (
        <div className='flex items-center justify-center gap-7 flex-col w-full px-3 md:px-10 md:py-12 py-7 '>
            <div className='flex items-center sm:justify-between justify-center  w-full'>
                <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] xs:text-[25px]  font-semibold">Featured <span className="text-rheinland-yellow">Jobs</span> </h1>
                <span className="text-rheinland-yellow sm:flex items-center justify-center flex-wrap gap-3 cursor-pointer hidden ">
                    Show all jobs
                    <CiCircleChevRight />
                </span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
            <span className="text-rheinland-yellow flex items-center justify-center flex-wrap gap-2 cursor-pointer sm:hidden text-[18px] ">
                Show all jobs
                <CiCircleChevRight />
            </span>
        </div>
    )
}

export default FeaturedJobs