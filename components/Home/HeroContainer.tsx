"use client"


import Image from "next/image";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import SearchInput from "../Search/SearchInput";
import { useState } from "react";


const HeroContainer = () => {

    const [JobTitle, setJobTitle] = useState<string>('');
    const [location, setLocation] = useState<string>('');

    return (
        <div className='flex items-center justify-center gap-2 sm:gap-5 lg:px-16 px-5 md:px-5  min-h-screen'>
            <div className=' w-full flex items-center justify-center flex-col gap-2 md:gap-5'>
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
                        <SearchInput searchInput={JobTitle} setSearchInput={setJobTitle} type='job' />
                    </div>
                    <div className="flex items-center justify-center bg-white px-2 w-full rounded-sm">
                        <CiLocationOn size={24} />
                        <SearchInput searchInput={location} setSearchInput={setLocation} type='location' />
                    </div>
                    <button className="w-full bg-rheinland-red text-white rounded-sm px-3 py-3">
                        Search My job
                    </button>
                </div>
                <span className="font-light text-center" >Popular : UI Designer, UX Researcher, Android, Admin</span>
            </div>
            {/* <div className='hidden w-1/3  lg:flex items-center h-full justify-center px-12'>
                <div className="relative w-full  h-full flex items-center justify-center  -z-10">
                    <Image src={'/person.png'} height={700} width={400} alt={"personImage"} />
                </div>
            </div> */}
        </div>
    )
}

export default HeroContainer;