import Link from "next/link"


const CompanySignUpBanner = () => {
    return (
        <div className='relative rounded-sm bg-rheinland-red h-[35vh] px-10 overflow-hidden flex items-center justify-center'>
            <span className='bg-white absolute -top-[250px] -left-[300px] rotate-45  h-[300px] w-[400px]'></span>
            <span className='bg-white absolute -bottom-[250px] -right-[300px] rotate-45  h-[300px] w-[400px]'></span>
            <div className="flex flex-col items-center justify-center text-white font-semibold gap-2">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[24px]">Start posting jobs today</h1>
                    <span className="font-light text-sm">Start posting jobs for only $10</span>
                </div>
                <Link className="bg-white px-5 py-3 rounded-sm text-rheinland-red " href={'/create-account'}>Sign Up For Free</Link>
            </div>
        </div>
    )
}

export default CompanySignUpBanner