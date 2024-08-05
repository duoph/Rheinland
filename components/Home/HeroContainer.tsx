"use client"


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
            console.error(error)
        }
    }

    return (
        <div className='flex items-center justify-center gap-2 sm:gap-5 lg:px-16 px-5 md:px-5  min-h-screen'>
            <div className='w-full flex items-center justify-center flex-col gap-2 md:gap-5'>
                <div className="text-[35px] xs:text-[50px] sm:text-[55px]  md:text-[90px]  font-bold flex flex-col items-center justify-start flex-wrap  leading-[27px] xs:leading-[40px] sm:leading-[46px] md:leading-[70px] w-full h-full">
                    <span className="text-start">Discover</span>
                    <span>More Than</span>
                    <span className="text-rheinland-yellow">5000+ Jobs</span>
                    <Image src={'/sketchSplash.png'} height={500} width={300} alt={"sketchSplash"} />
                </div>
                <p className="text-rheinland-gray text-sm font-light py-2 xs:py-5 break-all">Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                <div className="w-full shadow-lg lg:w-[70vw] flex items-center justify-center lg:flex-row flex-col gap-3 bg-slate-200 px-5 py-5 rounded-sm">
                    <div className="flex items-center justify-center bg-white px-2 w-full rounded-sm">
                        <CiSearch size={24} />
                        <SuggestionInput searchInput={JobTitle} setSearchInput={setJobTitle} data={jobData} placeholder='Job Title' />
                    </div>
                    <div className="flex items-center justify-center bg-white px-2 w-full rounded-sm">
                        <CiLocationOn size={24} />
                        <SuggestionInput searchInput={location} setSearchInput={setLocation} data={locations} placeholder='location' />
                    </div>
                    <button onClick={handleSearch} className="w-full bg-rheinland-red text-white rounded-sm px-3 py-3">
                        Search My job
                    </button>
                </div>
                <span className="font-light text-center" >Popular : UI Designer, UX Researcher, Android, Admin</span>
            </div>

        </div>
    )
}

export default HeroContainer;