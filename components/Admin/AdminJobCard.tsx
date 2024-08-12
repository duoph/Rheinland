"use client";

import { Job } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import { CiLocationOn, CiTrash } from 'react-icons/ci';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegEyeSlash } from 'react-icons/fa';
import ConfirmationModal from '../ConfirmationModal';
import toast from 'react-hot-toast';

interface AdminJobCardProps {
    job: Job | null;
    isLoading?: boolean;
    reFectch?: () => void;
}

const AdminJobCard = ({ job, isLoading, reFectch }: AdminJobCardProps) => {
    const [jobs, setJobs] = useState<string[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const fetchUser = async () => {
        try {
            const res = await axios.get('/api/user');
            setJobs(res?.data?.user?.savedJobs?.map((job: Job) => job._id) || []);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const handleDelete = async () => {
        if (job?._id) {
            try {
                await axios.delete(`/api/job/${job._id}`);
                if (reFectch) reFectch();
            } catch (error) {
                console.error('Error deleting job:', error);
            } finally {
                toast.success('Job Deleted');
            }
        }
        setIsModalOpen(false);
    };

    const handleHide = async () => {
        if (job?._id) {
            try {
                await axios.put(`/api/job/${job._id}`, { visible: false });
                if (reFectch) reFectch();
            } catch (error) {
                console.error('Error hiding job:', error);
            } finally {
                toast.success('Job hidden');
            }
        }
    };

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
                <div className="flex gap-2 justify-center items-center w-full mt-2">
                    <Skeleton className="p-2 w-full" />
                    <Skeleton className="p-2 w-full" />
                </div>
            </div>
        );
    }

    if (!job) { return null; }

    return (
        <div className="border shadow-sm border-opacity-35 flex flex-col items-start justify-between md:min-w-[320px] w-full md:max-w-[320px]  group rounded-sm px-3 py-2 cursor-pointer">
            <Link href={`/admin/job/${job._id}`} className="w-full">
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

                {/* Applicants length */}
                <span className={`text-sm opacity-50 py-2 ${job.appliedUsers?.length > 0 ? 'text-rheinland-red underline' : ''}`}>{job?.appliedUsers?.length} Applicants</span>



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





            <div className="flex gap-2 justify-center items-center w-full">
                <button
                    onClick={handleHide}
                    className="flex items-center justify-center bg-rheinland-gray w-full rounded-sm p-2"
                >
                    <FaRegEyeSlash className="text-xl text-white" />
                </button>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center bg-rheinland-red w-full rounded-sm p-2"
                >
                    <CiTrash className="text-xl text-white" />
                </button>
            </div>
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleDelete}
            />
        </div>
    );
};

export default AdminJobCard;
