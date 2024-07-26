import React from 'react'
import RelatedJobCard from './Related Job Card/RelatedJobCard'

function RelatedJobs() {
  return (
    <div className='bg-[#f0f8ff] w-full p-20 flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold'>Related Jobs</h1>
      <div className='flex items-start w-full'>
        <RelatedJobCard />
      </div>
    </div>
  )
}

export default RelatedJobs
