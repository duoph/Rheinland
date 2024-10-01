'use client';

import React, { useState } from 'react';
import { HiBookmark, HiOutlineBookmark } from "react-icons/hi2";
import axios from 'axios';
import toast from 'react-hot-toast';

interface JobActionsProps {
    jobId: string;
    initialIsApplied: boolean;
    initialIsSaved: boolean;
}

const JobActions: React.FC<JobActionsProps> = ({ jobId, initialIsApplied, initialIsSaved }) => {
    const [isApplied, setIsApplied] = useState(initialIsApplied);
    const [isSaved, setIsSaved] = useState(initialIsSaved);
    const [applying, setApplying] = useState(false);

    const handleApply = async () => {
        if (isApplied) return;

        setApplying(true);
        try {
            const response = await axios.put(`/api/job/${jobId}/user/apply`);

            if (response.data.success) {
                toast.success("Applied successfully");
                setIsApplied(true);
            } else {
                toast.error("Failed to apply");
            }
        } catch (error) {
            toast.error("Error applying to job");
            console.error("Error applying to job:", error);
        } finally {
            setApplying(false);
        }
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`/api/job/${jobId}/user/save`);

            if (response.data.success) {
                setIsSaved((prev) => !prev);
                toast.success(isSaved ? "Job removed from saved" : "Job saved");
            } else {
                toast.error("Error saving job");
            }
        } catch (error) {
            toast.error("Error saving job");
            console.error("Error saving job:", error);
        }
    };

    return (
        <div className="w-full h-full flex items-center gap-5 justify-center py-10">
            <button
                onClick={handleApply}
                disabled={applying || isApplied}
                className={`bg-rheinland-red px-4 py-3 text-white rounded-sm ${applying || isApplied ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {applying ? "Applying..." : isApplied ? "Applied" : "Apply Now"}
            </button>

            <div onClick={handleSave} className="cursor-pointer">
                {isSaved ? (
                    <HiBookmark className="text-[25px] text-rheinland-red" />
                ) : (
                    <HiOutlineBookmark className="text-[25px] text-rheinland-red" />
                )}
            </div>
        </div>
    );
};

export default JobActions;
