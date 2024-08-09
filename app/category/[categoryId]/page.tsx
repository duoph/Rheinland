"use client"

import { useParams } from 'next/navigation';
import React from 'react'

const SingleCategory = () => {


    const { categoryId } = useParams();


    return (
        <div className='pt-[90px] min-h-screen'>
            <h1>The category id is {categoryId}</h1>
        </div>
    )
}

export default SingleCategory;