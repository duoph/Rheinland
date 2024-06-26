import React from 'react'
import { FaUserGraduate } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";

function adminPage() {
    return (
        // Sidebar 

        <div className='pt-[110px] w-[300px] h-screen bg-red-300 flex flex-col px-5'>
            <h1>Hello</h1>

            <p className='flex justify-start items-center gap-2 cursor-pointer text-[22px] '><FaUserGraduate />Candidates</p>
            <p className='flex justify-start items-center gap-2 cursor-pointer text-[22px] '>< IoDocumentTextSharp />Applications</p>
            <p className='flex justify-start items-center gap-2 cursor-pointer text-[22px] '><HiMiniBuildingOffice2 />Companies</p>
            <p className='flex justify-start items-center gap-2 cursor-pointer text-[22px] '><MdWork />Jobs</p>
            <p className='flex justify-start items-center gap-2 cursor-pointer text-[22px] '><FaPowerOff />Logout</p>
        </div>
    )
}

export default adminPage
