import React from 'react'
import JobCard from '../JobCard'

const LatestJobs = () => {
    return (
        <div className='flex items-center justify-center flex-col w-full px-5 md:px-7 md:pb-20 pb-10 pt-5 gap-7'>
            <div className='flex items-center justify-center w-full'>
                <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] xs:text-[25px] font-semibold">Latest <span className="text-rheinland-yellow">Job Openings</span></h1>
            </div>

            <div className='relative flex items-center justify-center flex-wrap gap-3 w-full'>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />

            </div>

        </div >
    )
}

export default LatestJobs