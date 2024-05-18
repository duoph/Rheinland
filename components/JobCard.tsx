import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'

const JobCard = () => {
    return (
        <Link href={`/jobs/12`} className='border shadow-md flex-col items-start justify-between sm:min-w-[400px] w-full sm:max-w-[400px]  min-h-[250px] group rounded-sm px-3 py-6 cursor-pointer '>
            <div className='flex justify-between items-center min-h-full w-full py-2'>
                <Image src={'/RheinlandLogoHeader.png'} alt='Logo' height={60} width={60} />
                <span className='border px-2 py-1 rounded-sm text-rheinland-blue border-rheinland-blue'>Full Time</span>
            </div>
            <div className='flex justify-start items-center font-semibold gap-2 w-full'>
                <span>Social Media Assistant</span>
            </div>
            <div className='flex justify-start items-center font-light text-sm gap-2 w-full py-1'>
                <span className='flex items-center justify-center gap-[6px]'>
                    <HiOutlineBuildingOffice2 />
                    Rheinland
                </span>
                <span></span>
                <span className='flex items-center justify-center gap-[6px] w-full'>
                    <CiLocationOn />
                    Berlin,Germany
                </span>
            </div>
            <div className='flex justify-start items-center  gap-2 w-full py-2l'>
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, assumenday Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, earum. ...</p>
            </div>
            <div className='pt-2 font-extralight text-sm'>
                <span>Posted on 18/05/22</span>
            </div>
        </Link>
    )
}

export default JobCard