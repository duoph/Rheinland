"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApplicationCard from '@/components/ApplicationCard';
import AdminDashboardLayout from '@/components/layouts/AdminDashboardLayout';

const ApplicationsPage = () => {
    const [applicants, setApplicants] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [applicantsToDisplay, setApplicantsToDisplay] = useState<number>(16);

    const fetchApplications = async () => {
        try {
            const response = await axios.get("/api/job/appliedJobs");
            setApplicants(response.data.appliedJobs);
        } catch (error) {
            console.error("Error fetching applications:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    const handleLoadMore = () => {
        setApplicantsToDisplay(prev => prev + 18);
    };

    const displayedApplicants = applicants.slice(0, applicantsToDisplay);

    return (
        <AdminDashboardLayout>
            <div className="flex items-center justify-center flex-wrap gap-3">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    displayedApplicants.length > 0 ? (
                        displayedApplicants.map((applicant, index) => (
                            <ApplicationCard key={index} applicant={applicant} />
                        ))
                    ) : (
                        <p>No applications found</p>
                    )
                )}
            </div>

            {displayedApplicants.length > 0 && applicants.length > applicantsToDisplay && (
                <button onClick={handleLoadMore} className="w-[200px] bg-rheinland-red text-white rounded-sm px-3 py-3">
                    Load more
                </button>
            )}
        </AdminDashboardLayout>
    );
};

export default ApplicationsPage;
