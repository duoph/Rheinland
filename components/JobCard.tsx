import { Job } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { Skeleton } from './ui/skeleton';

interface JobCardProps {
    job: Job | null;
    isLoading?: boolean;
}

const JobCard = ({ job, isLoading }: JobCardProps) => {
    if (isLoading) {
        return (
            <div className='shadow-sm border border-opacity-35 flex flex-col items-start justify-between sm:min-w-[400px] w-full sm:max-w-[400px] min-h-[250px] max-h-[250px] group rounded-sm px-3 py-2 '>
                <Skeleton className="w-full h-[20px] mb-2" />
                <div className="flex flex-row items-center gap-2">
                    <Skeleton className="w-[20px] h-[20px]" />
                    <Skeleton className="w-[100px] h-[20px]" />
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Skeleton className="w-[20px] h-[20px]" />
                    <Skeleton className="w-[100px] h-[20px]" />
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Skeleton className="w-[20px] h-[20px]" />
                    <Skeleton className="w-[100px] h-[20px]" />
                </div>
                <Skeleton className="w-full h-[60px] mt-3" />
            </div>
        );
    }

    if (!job) {
        return null; // or you can return a placeholder
    }

    return (
        <Link href={`/jobs/${job._id}`} className='border shadow-sm border-opacity-35 flex flex-col items-start justify-between sm:min-w-[400px] w-full sm:max-w-[400px] min-h-[250px] max-h-[250px] group rounded-sm px-3 py-2 cursor-pointer'>
            <div className='flex justify-between items-center w-full py-2'>
                <Image src={'/RheinlandLogoHeader.png'} alt='Logo' height={60} width={60} />
                <span className='border px-2 py-1 rounded-sm text-rheinland-blue border-rheinland-blue'>Full Time</span>
            </div>
            <div className='flex justify-start items-center font-semibold gap-2 w-full'>
                <span>{job.title}</span>
            </div>
            <div className='flex justify-start items-center font-light text-sm gap-2 w-full py-1'>
                <span className='flex items-center justify-center gap-[6px]'>
                    <HiOutlineBuildingOffice2 />
                    Rheinland
                </span>
                <span className='flex items-center justify-center gap-[6px] w-full'>
                    <CiLocationOn />
                    {`${job.location}, ${job.state}`}
                </span>
            </div>
            <div className='h-[80px] w-full py-1'>
                <p className='font-light h-full overflow-hidden' style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis'
                }}>
                    {job.description}
                </p>
            </div>
            <div className='pt-2 font-extralight flex items-end justify-start text-sm w-full'>
                <span>{new Date(job.createdAt).toLocaleDateString()}</span>
            </div>
        </Link>
    );
};

export default JobCard;
