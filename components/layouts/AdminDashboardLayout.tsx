"use client";

import { usePathname, useRouter } from "next/navigation";

const AdminDashboardLayout = ({ children }: any) => {


    const router = useRouter();
    const path = usePathname();



    return (
        <div className="pt-[95px] flex flex-col gap-5 items-center px-3 pb-10">
            <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-5 rounded-md pt-3 px-5 md:px-10 w-full text-[15px] flex-wrap">

                <span
                    onClick={() => {
                        router.push('/admin/dashboard/jobs')
                    }}
                    className={`px-2 py-2 rounded-md cursor-pointer border ${path === '/admin/dashboard/jobs' ? 'bg-rheinland-red text-white' : ''}`}
                >
                    Jobs
                </span>
                <span
                    onClick={() => {
                        router.push('/admin/dashboard/contacted')
                    }}
                    className={`px-3 py-2 rounded-md cursor-pointer border ${path === '/admin/dashboard/contacted' ? 'bg-rheinland-red text-white' : ''}`}
                >
                    Contacted Applicants
                </span>
                <span
                    onClick={() => {
                        router.push('/admin/dashboard/rejected')
                    }}
                    className={`px-3 py-2 rounded-md cursor-pointer border ${path === '/admin/dashboard/rejected' ? 'bg-rheinland-red text-white' : ''}`}
                >
                    Rejected Applicants
                </span>
            </div>


            {children}
        </div>
    );
};

export default AdminDashboardLayout;
