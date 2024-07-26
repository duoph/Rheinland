import React from 'react'
import { CiCircleChevRight } from 'react-icons/ci'
import { TbTools } from 'react-icons/tb'

const CategoryCard = ({ category }: any) => {
    return (
        <div className='border  flex flex-row sm:flex-col items-start sm:justify-between sm:w-[30vw] w-full  sm:min-h-[20vh] min-h-[10vh] group rounded-sm px-3 py-6  cursor-pointer hover:bg-rheinland-red hover:text-white transition-all duration-300 ease-in-out gap-2'>
            <TbTools className='text-rheinland-red group-hover:text-white transition-all duration-300 ease-in-out text-[40px] sm:text-[24px]' />
            <div className='flex  justify-between items-center w-full'>
                <div className='flex flex-col items-start '>
                    <span className='font-semibold'>{category?.name}</span>
                    <span className='flex gap-3 font-light justify-between w-full'>
                        300 Jobs availabe
                        <CiCircleChevRight className="text-[24px] hidden sm:flex" />
                    </span>
                </div>
                <CiCircleChevRight className="text-[24px]  sm:hidden" />
            </div>

        </div>
    )
}
export default CategoryCard