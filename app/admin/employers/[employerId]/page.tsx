"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import CompanyCard from "@/components/Admin/Companies/CompanyCard";

interface EmployerDetails {
    id: string;
    name: string;
    description: string;
    // Add other employer-specific fields here
}

const EmployerPage = () => {
    const router = useRouter();
    const { employerId } = useParams();
    const [employerDetails, setEmployerDetails] = useState<EmployerDetails | null>(null);

    useEffect(() => {
        if (employerId) {
            // Replace this with your API call to fetch employer details by employerId
            const fetchEmployerDetails = async () => {
                try {
                    // Simulated fetch (replace with actual API call)
                    const response = await fetch(`/api/employers/${employerId}`);
                    const data = await response.json();
                    setEmployerDetails(data);
                } catch (error) {
                    console.error("Failed to fetch employer details:", error);
                }
            };

            fetchEmployerDetails();
        }
    }, [employerId]);



    return (
        <div className="pt-[95px] flex flex-col items-center">
            <h1 className="font-semibold text-[30px]">{employerDetails?.name || employerId}</h1>
            <p className="text-center text-[18px]">{employerDetails?.description}</p>
            <div className="mt-5">
                <CompanyCard />
            </div>
        </div>
    );
};

export default EmployerPage;
