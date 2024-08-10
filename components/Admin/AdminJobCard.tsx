import { Job } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton';
import { CiLocationOn } from 'react-icons/ci';
import Link from 'next/link';
import Image from 'next/image';



interface AdminJobCardProps {
    job: Job | null;
    isLoading?: boolean;
    reFectch?: () => void;
}


const AdminJobCard = ({ job, isLoading, reFectch }: AdminJobCardProps) => {

    const [savedJobs, setSavedJobs] = useState<string[]>([]);


    const fetchUser = async () => {

        try {
            const res = await axios.get('/api/user');
            setSavedJobs(res?.data?.user?.savedJobs?.map((job: Job) => job._id) || []);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);


    if (isLoading) {
        return (
            <div className="border shadow-sm border-opacity-35 flex flex-col items-start justify-between md:min-w-[320px] w-full md:max-w-[320px] min-h-[250px] max-h-[250px] group cursor-pointer rounded-sm px-3 py-2">
                <div className="flex justify-between items-center w-full py-2">
                    <Skeleton className="w-[60px] h-[60px]" />
                    <Skeleton className="w-[70px] h-[30px]" />
                </div>
                <Skeleton className="w-full h-[20px] mb-2" />
                <div className="flex flex-row items-center justify-between gap-2 w-full">
                    <div className="flex flex-row items-center gap-2">
                        <Skeleton className="w-[20px] h-[20px]" />
                        <Skeleton className="w-[100px] h-[20px]" />
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Skeleton className="w-[20px] h-[20px]" />
                        <Skeleton className="w-[100px] h-[20px]" />
                    </div>
                </div>
                <Skeleton className="w-full h-[60px] mt-3" />
                <Skeleton className="w-[100px] h-[20px] mt-2" />
            </div>
        );
    }

    if (!job) {
        return null;
    }

    return (
        <div className="border shadow-sm border-opacity-35 flex flex-col items-start justify-between md:min-w-[320px] w-full md:max-w-[320px] min-h-[250px] max-h-[250px] group rounded-sm px-3 py-2 cursor-pointer">
            <Link href={`/admin/${job._id}`} className="w-full">
                <div className="flex justify-between items-center w-full py-2">
                    <Image
                        src={"/RheinlandLogoHeader.png"}
                        alt="Logo"
                        height={60}
                        width={60}
                    />
                    <span className="border px-2 py-1 rounded-sm text-rheinland-blue border-rheinland-blue">
                        Full Time
                    </span>
                </div>
                <div className="flex justify-start items-center font-semibold gap-2 w-full">
                    <span>{job.title}</span>
                </div>
                <div className="flex font-light text-sm gap-2 w-full py-1">
                    <span className="flex items-center justify-center gap-[6px]">
                        <CiLocationOn />
                        {job.location}
                    </span>
                </div>
                <div className="h-[80px] w-full py-1">
                    <p
                        className="font-light h-full overflow-hidden"
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {job.description}
                    </p>
                </div>
            </Link>

        </div>
    )
}

export default AdminJobCard