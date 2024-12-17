'use client';

import React, { useState, useEffect } from 'react';
import { HiBookmark, HiOutlineBookmark } from "react-icons/hi2";
import axios from 'axios';
import toast from 'react-hot-toast';

interface JobActionsProps {
    jobId: string;
    jobName?: string;
}

const JobActions: React.FC<JobActionsProps> = ({ jobId ,jobName}) => {
    const [applying, setApplying] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [isApplied, setIsApplied] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            const { savedJobs, appliedJobs } = await getUserData();
            console.log(savedJobs)
            setIsSaved(savedJobs.some((job: any) => job._id === jobId));
            setIsApplied(appliedJobs.some((job: any) => job._id === jobId));
        };
        fetchUserData();
    }, [jobId]);

    async function getUserData() {
        try {
            const response = await fetch(`/api/user`);

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const data = await response.json();
            if (data.success) {
                return {
                    savedJobs: data.user.savedJobs || [],
                    appliedJobs: data.user.appliedJobs || []
                };
            }
            throw new Error("Failed to load user data.");
        } catch (error) {
            console.error("Error fetching user data:", error);
            return { savedJobs: [], appliedJobs: [] };
        }
    }

    const sendAppliedNotification = async () => {
        try {
          const response = await axios.post("/api/job/notifyEmail", {
            jobId: jobId,
            jobName: jobName, 
          });
          console.log("Email notification response:", response.data);
        } catch (error) {
          console.error("Error sending email notification:", error);
        }
      };
    

    const handleApply = async () => {
        if (isApplied) return;

        setApplying(true);
        try {
            const response = await axios.put(`/api/job/${jobId}/user/apply`);

            if (response.data.success) {
                toast.success("Applied successfully");
                sendAppliedNotification()
                setIsApplied(true);
            } else {
                toast.error(response.data.message || "Error");
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
                toast.error(response.data.message || "Error");
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
