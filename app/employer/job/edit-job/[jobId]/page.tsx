import React from 'react'

const EditJob = () => {
    return (
        <div className='flex flex-col items-center justify-start pt-[90px] min-h-screen px-3 sm:px-5 gap-5 pb-20'>

            <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] xs:text-[25px] text-rheinland-red font-semibold">Edit Job</h1>

            <form className=' sm:w-[500px] w-full flex flex-col items-center justify-center gap-5' >

                <input
                    type='text'
                    name='title'
                    value=""
                    // onChange={}
                    placeholder='Title'
                    required
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <input
                    type='text'
                    name='category'
                    value=""
                    // onChange={}
                    placeholder='Category'
                    required
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />
                <textarea
                    name='description'
                    // value={job.description}
                    // onChange={}
                    placeholder='Description'
                    required
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <select
                    name='gender'
                    // value={job.gender}
                    // onChange={}
                    required
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                >
                    <option value='' disabled>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Any'>Any</option>

                </select>

                <input
                    type='text'
                    name='skills'
                    // value={job.skills}
                    // onChange={}
                    placeholder='Skills (comma-separated)'
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <input
                    type='text'
                    name='minAge'
                    // value={job.minAge}
                    // onChange={}
                    placeholder='Minimum Age'
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <input
                    type='text'
                    name='maxAge'
                    // value={job.maxAge}
                    // onChange={}
                    placeholder='Maximum Age'
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <input
                    type='text'
                    name='state'
                    // value={job.state}
                    // onChange={}
                    placeholder='State'
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <input
                    type='text'
                    name='location'
                    // value={job.location}
                    list="cities"
                    // onChange={}
                    placeholder='Location'
                    className="w-full border px-3 py-3 border-b rounded-sm focus:outline-none"
                />

                <datalist className='w-full' id="cities">
                    {/* {cities.map((city, index) => (
                <option key={index} value={city} />
            ))} */}
                </datalist>


                <button
                    type='submit'
                    className='px-5 py-3  w-full bg-rheinland-red text-white'
                // disabled={isLoading}
                >
                    Update   {/* {isLoading ? 'Creating...' : 'Create Job'} */}
                </button>
            </form>
        </div >
    )
}

export default EditJob
