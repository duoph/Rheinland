"use client"

import { useParams } from 'next/navigation'
import React from 'react'
import { CiBookmark, CiLocationOn } from 'react-icons/ci'

const SingleJobPage = () => {

    const { jobId } = useParams()

    return (
        <div className="relavtive min-h-screen flex flex-col gap-3 items-center justify-start px-3 sm:px-5 pt-[90px]">
            <div className='flex items-start justify-between w-full'>
                <h1 className='font-semibold text-2xl'>Full Stack Developer</h1>
                <CiBookmark className='text-red-500' size={30}/>
            </div>

            <div className='flex flex-col items-start justify-center w-full gap-2'>
                <h1 className='font-medium'>Location</h1>
                <span className='flex gap-2 font-light'>
                    <CiLocationOn className='text-rheinland-red' size={24} />
                    Munich,Germany
                </span>
            </div>

            <div className='flex flex-col items-start justify-center w-full gap-2'>
                <h1 className='font-medium'>Salary</h1>
                <span className='flex gap-2 font-light'>
                    Undefined
                </span>
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-3 ">
                <h1 className='font-medium'>Preferred Skills</h1>
                <div className='font-light text-sm text-white flex gap-2 flex-wrap pb-3'>
                    <span className='px-3 py-3 bg-rheinland-blue rounded-sm cursor-pointer'>React Js</span>
                    <span className='px-3 py-3 bg-rheinland-blue rounded-sm cursor-pointer'>React Native</span>
                    <span className='px-3 py-3 bg-rheinland-blue rounded-sm cursor-pointer'>MySQL</span>
                    <span className='px-3 py-3 bg-rheinland-blue rounded-sm cursor-pointer'>AWS</span>
                    <span className='px-3 py-3 bg-rheinland-blue rounded-sm cursor-pointer'>TailwindCSS</span>
                    <span className='px-3 py-3 bg-rheinland-blue rounded-sm cursor-pointer'>Typescript</span>
                    <span className='px-3 py-3 bg-rheinland-blue rounded-sm cursor-pointer'>Problem Solving Skill</span>
                    <span className='px-3 py-3 bg-rheinland-blue rounded-sm cursor-pointer'>Django</span>
                    <span className='px-3 py-3 bg-rheinland-blue rounded-sm cursor-pointer'>NextJs</span>
                    <span className='text-gray-400 cursor-pointer px-3 py-3 underline'>3+ Show More </span>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-start justify-center w-full">
                <h1 className='font-medium'>Job Description</h1>
                <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus velit nostrum corrupti minus inventore asperiores! Quae aut non asperiores delectus exercitationem? Vel ipsam, fuga quae consectetur ea nostrum iste incidunt modi fugiat sapiente, culpa cumque illo? Fugiat, alias placeat odit non dicta distinctio obcaecati, possimus omnis repudiandae suscipit sint atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam, itaque nemo blanditiis quia consequuntur commodi, fuga architecto, adipisci illo aliquid quam iusto a eligendi. Cupiditate at ex, consequuntur culpa esse possimus totam modi quis deserunt, rerum facilis cum dolor soluta voluptates cumque corporis illum enim voluptatem tenetur tempore repellendus dolorum! Itaque dolorem recusandae nulla aut explicabo quaerat, optio doloribus minus. Aliquid iste, accusantium fugit iusto vero eius fuga modi, aut cupiditate maxime aperiam obcaecati animi, sunt temporibus eligendi quas minus commodi nisi consequatur. Necessitatibus nostrum consequuntur placeat eaque nobis? Voluptatibus ex corrupti dolore ad facilis nostrum, temporibus repellat ipsum!</p>
            </div>

            <div className='w-full h-full flex justify-center py-10'>
                <button className='bg-rheinland-red px-4 py-3 bottom-5 text-white rounded-sm'>Apply Now</button>
            </div>

        </div>
    )
}

export default SingleJobPage