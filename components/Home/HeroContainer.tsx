import { CiLocationOn, CiSearch } from "react-icons/ci";


const HeroContainer = () => {
    return (
        <div className='flex items-center justify-center h-[87vh] px-3 md:px-5'>
            <div className='lg:min-w-1/2 w-full'>
                <div className="text-[55px] font-bold flex flex-col">
                    <span>Discover More Than </span>
                    <span className="text-rheinland-yellow">5000+ Jobs</span>
                </div>
                <p className="text-rheinland-gray">Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                <div className="w-full flex items-center justify-center flex-col gap-3 bg-slate-200 px-5 py-5 rounded-sm">
                    <div className="flex items-center justify-center bg-white px-2 w-full rounded-sm">
                        <CiSearch size={24} />
                        <input type="text" className="w-full px-3 py-3 border-b rounded-sm" placeholder="Job Title or Keyword" />
                    </div>
                    <div className="flex items-center justify-center bg-white px-2 w-full rounded-sm">
                        <CiLocationOn size={24} />
                        <select className="w-full px-3 py-3">
                            <option value="berlin">Berlin</option>
                        </select>
                    </div>
                    <button className="w-full bg-rheinland-red text-white rounded-sm px-3 py-3">Search My job</button>
                </div>
            </div>
            <div className='lg:flex hidden min-w-1/2'>
                <h1>Secod Hero</h1>
            </div>
        </div>
    )
}

export default HeroContainer;