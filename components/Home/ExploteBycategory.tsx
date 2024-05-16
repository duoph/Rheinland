import { CiCircleChevRight } from "react-icons/ci"
import CategoryCard from "../CategoryCard"

const ExploteBycategory = () => {
    return (
        <div className='flex items-center justify-center gap-7 flex-col w-full px-3 md:px-10 py-5 min-h-screen'>
            <div className='flex items-center justify-between  w-full'>
                <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] xs:text-[20px]  font-semibold">Explore by <span className="text-rheinland-yellow">category</span> </h1>
                <span className="text-rheinland-yellow flex items-center justify-center flex-wrap gap-3 cursor-pointer">
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
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </div>
    )
}

export default ExploteBycategory