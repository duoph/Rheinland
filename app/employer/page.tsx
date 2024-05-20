import Link from 'next/link'
import React from 'react'

const EmployerPage = () => {
    return (
        <div className=' flex items-center justify-center h-screen'>

            <div className='flex flex-col items-center justify-center gap-3 text-white' >

                <Link href={'/employer/create-job'} className='bg-rheinland-red px-4 py-3 rounded-sm'>
                    Create Job
                </Link>
                
                <button className='bg-rheinland-red px-4 py-3 rounded-sm'>
                    Create Job
                </button>
                <button className='bg-rheinland-red px-4 py-3 rounded-sm'>
                    Create Job
                </button>
                <button className='bg-rheinland-red px-4 py-3 rounded-sm'>
                    Create Job
                </button>

            </div>


        </div>
    )
}

export default EmployerPage