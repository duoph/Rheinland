"use client";

import Image from "next/image";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import SuggestionInput from "../SuggestionInput";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { jobData } from "@/data/jobData";
import { locations } from "@/data/location";

const HeroContainer = () => {
    const [JobTitle, setJobTitle] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const router = useRouter();

    const handleSearch = () => {
        try {
            router.push(`/jobs?title=${JobTitle}&location=${location}`);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className='flex items-center justify-center gap-2 sm:gap-5 lg:px-16 px-5 min-h-screen' aria-labelledby="hero-header">
            <main className='w-full flex items-center justify-center flex-col gap-2 md:gap-5'>
                <header id="hero-header" className="text-[35px] xs:text-[50px] sm:text-[55px] md:text-[90px] font-bold flex flex-col items-center justify-start flex-wrap leading-[27px] xs:leading-[40px] sm:leading-[46px] md:leading-[70px] w-full h-full">
                    <h1 className="text-start">Discover</h1>
                    <h2>More Than</h2>
                    <h2 className="text-rheinland-yellow">5000+ Jobs</h2>
                    <Image
                        sizes="(max-width: 768px) 100vw, 33vw"
                        src={'/sketchSplash.png'}
                        height={500} width={300}
                        alt="Illustration of people searching for jobs"
                    />
                </header>
                <p className="text-rheinland-gray text-sm font-light py-2 xs:py-5 break-all" aria-label="Rheinland Consultancy introduction">
                    Rheinland Consultancy is a great platform for job seekers looking to reach new career heights.
                </p>
                <div className="w-full shadow-lg lg:w-[70vw] flex items-center justify-center lg:flex-row flex-col gap-3 bg-slate-200 px-5 py-5 rounded-sm" aria-labelledby="search-bar">
                    <div className="flex items-center justify-center bg-white px-2 w-full rounded-sm">
                        <CiSearch size={24} aria-hidden="true" />
                        <SuggestionInput searchInput={JobTitle} setSearchInput={setJobTitle} data={jobData} placeholder='Job Title' aria-label="Search for job titles" />
                    </div>
                    <div className="flex items-center justify-center bg-white px-2 w-full rounded-sm">
                        <CiLocationOn size={24} aria-hidden="true" />
                        <SuggestionInput searchInput={location} setSearchInput={setLocation} data={locations} placeholder='Location' aria-label="Search for job location" />
                    </div>
                    <button onClick={handleSearch} className="w-full bg-rheinland-red text-white rounded-sm px-3 py-3" aria-label="Search jobs">
                        Search My Job
                    </button>
                </div>
                <span className="font-light text-center" aria-label="Popular job titles">Popular: UI Designer, Software Developer, Manager</span>
            </main>
        </section>
    );
}

export default HeroContainer;
