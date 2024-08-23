"use client";

import { Job } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import { CiLocationOn, CiTrash } from 'react-icons/ci';
import Link from 'next/link';
import ConfirmationModal from '../ConfirmationModal';
import toast from 'react-hot-toast';

interface AdminJobCardProps {
    job: Job | null;
    isLoading?: boolean;
    reFetch?: () => void;
}

const AdminJobCard: React.FC<AdminJobCardProps> = ({ job, isLoading, reFetch }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


    const handleDelete = async () => {
        if (job?._id) {
            try {
                await axios.delete(`/api/job/${job._id}`);
                if (reFetch) reFetch();
                toast.success('Job Deleted');
            } catch (error) {
                console.error('Error deleting job:', error);
                toast.error('Failed to delete job');
            } finally {
                setIsModalOpen(false);
            }
        }
    };

    const handleHide = async () => {
        if (job?._id) {
            try {
                await axios.put(`/api/job/${job._id}`, { approvedByAdmin: false });
                if (reFetch) reFetch();
                toast.success('Job hidden');
            } catch (error) {
                console.error('Error hiding job:', error);
                toast.error('Failed to hide job');
            }
        }
    };

    if (isLoading) {
        return (
            <div className="border shadow-sm border-opacity-35 flex flex-col items-start justify-between w-full md:max-w-[320px] min-h-[250px] group cursor-pointer rounded-md px-4 py-3 animate-pulse">
                <div className="flex flex-col w-full py-2 space-y-2">
                    <Skeleton className="w-[60%] h-[24px] rounded-md" />
                    <Skeleton className="w-[40%] h-[20px] rounded-md" />
                    <Skeleton className="w-[50%] h-[20px] rounded-md" />
                </div>
                <div className="flex items-center gap-2 w-full py-2">
                    <Skeleton className="w-[20px] h-[20px] rounded-full" />
                    <Skeleton className="w-[60%] h-[20px] rounded-md" />
                </div>
                <Skeleton className="w-[80%] h-[20px] rounded-md mt-2" />
                <div className="h-[80px] w-full py-2">
                    <Skeleton className="w-full h-full rounded-md" />
                </div>
            </div>
        );
    }

    if (!job) {
        return null;
    }

    return (
        <div className="border shadow-sm border-opacity-35 flex flex-col items-start justify-between w-full md:max-w-[320px] group rounded-md px-4 py-3 cursor-pointer">
            <Link href={`/admin/jobs/${job._id}`} className="w-full">
                <div className="flex flex-col w-full py-2 space-y-2">
                    <span className="text-lg font-semibold text-gray-800">{job.title}</span>
                    <span className="text-sm font-normal text-gray-600">{job.jobType || "Full Time"}</span>
                    <span className="text-sm font-normal text-gray-900">
                        Posted By <span className="underline">{job.employerId.employerName}</span>
                    </span>
                </div>

                <div className="flex items-center text-sm text-gray-600 gap-2">
                    <CiLocationOn />
                    {job.location}
                </div>

                <span className={`text-sm py-2 ${job.appliedUsers?.length > 0 ? 'text-red-600 underline' : 'text-gray-400'}`}>
                    {job.appliedUsers?.length} Applicants
                </span>

                <div className="h-[80px] w-full py-2">
                    <p
                        className="font-light text-sm text-gray-700 overflow-hidden"
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

            <div className="flex gap-3 justify-end items-center w-full mt-2">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center text-white bg-red-600 rounded-md py-2 px-4 hover:bg-red-700 transition-colors"
                >
                    <CiTrash className="text-xl" />
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
