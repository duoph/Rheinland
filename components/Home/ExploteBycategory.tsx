import { CiCircleChevRight } from "react-icons/ci"
import CategoryCard from "../CategoryCard"

const ExploteBycategory = () => {
    return (
        <div className='flex items-center justify-center gap-7 flex-col w-full px-3 md:px-10 py-7 '>
            <div className='flex items-center sm:justify-between justify-center  w-full'>
                <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] xs:text-[25px]  font-semibold">Explore by <span className="text-rheinland-yellow">category</span> </h1>
                <span className="text-rheinland-yellow sm:flex items-center justify-center flex-wrap gap-3 cursor-pointer hidden ">
                    Show all jobs
                    <CiCircleChevRight />
                </span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <div className="hidden sm:flex items-center justify-center gap-2 flex-wrap">
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                </div>

            </div>
            <span className="text-rheinland-yellow flex items-center justify-center flex-wrap gap-2 cursor-pointer sm:hidden text-[18px] ">
                Show all jobs
                <CiCircleChevRight />
            </span>
        </div>
    )
}

export default ExploteBycategory