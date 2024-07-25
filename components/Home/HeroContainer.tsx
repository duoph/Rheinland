
import Image from "next/image";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import SearchSuggestions from "../Search/JobSearchSuggestions";


const HeroContainer = () => {

    return (
        <div className='flex items-center justify-center gap-5 lg:px-16 px-5 md:px-5  min-h-screen'>
            <div className='lg:w-1/2 w-full flex flex-col gap-5'>
                <div className="text-[50px] xs:text-[55px]  md:text-[80px]  font-bold flex flex-col items-center justify-start flex-wrap  leading-[45px] md:leading-[80px] w-full h-full">
                    <span className="text-start">Discover</span>
                    <span>More Than</span>
                    <span className="text-rheinland-yellow">5000+ Jobs</span>
                    <Image src={'/sketchSplash.png'} height={500} width={300} alt={"sketchSplash"} />
                </div>
                <p className="text-rheinland-gray text-sm font-light py-5 break-all">Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                <div className="w-full shadow-lg lg:w-[70vw] flex items-center justify-end lg:flex-row flex-col gap-3 bg-slate-200 px-5 py-5 rounded-sm">
                    <div className="flex items-center justify-center bg-white px-2 w-full rounded-sm">
                        <CiSearch size={24} />
                        <input type="text" className="w-full px-3 py-3 border-b rounded-sm focus:outline-none" placeholder="Job Title or Keyword" />
                    </div>
                    <div className="flex items-center justify-center bg-white px-2 w-full rounded-sm">
                        <CiLocationOn size={24} />
                        <input type="text" className="w-full px-3 py-3 border-b rounded-sm focus:outline-none" placeholder="Eg: Berlin" />
                    </div>
                    <button className="w-full bg-rheinland-red text-white rounded-sm px-3 py-3">Search My job

                    </button>
                </div>
                <span className="font-light text-center" >Popular : UI Designer, UX Researcher, Android, Admin</span>
            </div>
            <div className='hidden w-1/2  lg:flex items-center justify-end px-12'>
                <div className="relative w-[400px] h-[600px] flex items-center justify-center -z-10">
                    <Image src={'/person.png'} fill={true} alt={"personImage"} />
                </div>
            </div>
        </div>
    )
}

export default HeroContainer;