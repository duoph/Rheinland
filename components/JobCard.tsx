import Image from 'next/image'
import React from 'react'

const JobCard = () => {
    return (
        <div className='border  flex flex-row sm:flex-col items-start sm:justify-between sm:w-[30vw] w-full  sm:min-h-[20vh] min-h-[10vh] group rounded-sm px-3 py-6  cursor-pointer '>
            <div className='flex justify-between items-center w-full'>
                <Image src={'/RheinlandLogoHeader.png'} alt='Logo' height={60} width={60} />
                <span className='border px-2 py-1 rounded-sm'>Full Time</span>
            </div>
            <div className='flex justify-start items-center font-light text-sm gap-2 w-full'>
                <span className=''>Duoph</span>
                <span></span>
                <span className=''>Berlin,Germany</span>
            </div>
            <div className='flex justify-start items-center font-light text-sm gap-2 w-full'>
                <p className=''>Berlin,Germany</p>
            </div>
        </div>
    )
}

export default JobCard