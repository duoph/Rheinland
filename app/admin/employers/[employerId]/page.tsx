"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Employer } from "@/types";


const EmployerPage = () => {
    const { employerId } = useParams();
    const [employer, setEmployer] = useState<Employer | null>(null);
    const [totalJobs, setTotalJobs] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchEmployerDetails = async () => {
        try {
            const response = await axios.get(`/api/admin/employer/${employerId}`);
            setEmployer(response.data.employer);
            setTotalJobs(response.data.totalJobs);
        } catch (error) {
            console.error("Failed to fetch employer details:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchEmployerDetails();
    }, []);

    const handleWebsiteLink = () => {
        if (!employer?.website) return;

        const websiteUrl = employer.website.startsWith("http://") || employer.website.startsWith("https://")
            ? employer.website
            : `https://${employer.website}`;

        window.open(websiteUrl, "_blank");
    };

    return (
        <div className="pt-[95px] px-4 flex flex-col items-center bg-gray-100 min-h-screen">
            <h1 className="font-bold text-[34px] text-center text-gray-800">
                {employer?.employerName || "Employer Details"}
            </h1>
            <div className="p-8 mt-6 w-full max-w-3xl">
                {isLoading ? (
                    <p className="text-center text-gray-500">Loading employer details...</p>
                ) : employer ? (
                    <>
                        <div className="mb-6">
                            <p className="text-xl text-gray-700">
                                {employer.about}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-lg">

                            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p> {employer.address}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p>{employer.email}</p>
                            </div>

                            {/* add country Code */}
                            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p> {employer.phone}</p>
                            </div>
                            {employer.website && (
                                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                    <a
                                        href="#"
                                        onClick={handleWebsiteLink}
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        {employer.website}
                                    </a>
                                </div>)}
                        </div>

                        <div className="mt-8 text-sm text-gray-500">
                            <p>Joined On: {new Date(employer.createdAt).toLocaleDateString()}</p>
                            <p>Total Jobs: {totalJobs}</p>
                        </div>
                    </>
                ) : (
                    <p className="text-center text-gray-500">Employer details not found.</p>
                )}
            </div>
        </div>
    );
};

export default EmployerPage;
