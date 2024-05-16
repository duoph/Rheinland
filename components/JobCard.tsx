import Image from 'next/image'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'

const JobCard = () => {
    return (
        <div className='border flex-col items-start justify-between w-[300px]  min-h-[200px] group rounded-sm px-3 py-6  cursor-pointer '>
            <div className='flex justify-between items-center w-full'>
                <Image src={'/RheinlandLogoHeader.png'} alt='Logo' height={60} width={60} />
                <span className='border px-2 py-1 rounded-sm'>Full Time</span>
            </div>
            <div className='flex justify-start items-center font-semibold gap-2 w-full'>
                <span>Social Media Assistant</span>
            </div>
            <div className='flex justify-start items-center font-light text-sm gap-2 w-full py-1'>
                <span className='flex items-center justify-center gap-[6px]'>
                    <HiOutlineBuildingOffice2 />
                    Duoph</span>
                <span></span>
                <span className='flex items-center justify-center gap-[6px]'>
                    <CiLocationOn />
                    Berlin,Germany
                </span>
            </div>
            <div className='flex justify-start items-center  gap-2 w-ful py-2l'>
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, assumenda!y...</p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default JobCard