"use client";

import { IoMdArrowBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const ContactPage = () => {
    const router = useRouter();

    return (
        <div className="relative pt-[90px] min-h-screen flex flex-col items-center justify-start p-6">
            <div className="absolute top-[80px] left-[10px] cursor-pointer md:flex hidden">
                <span onClick={() => router.push('/')} className="flex items-center justify-center gap-2 ">
                    <IoMdArrowBack /> Back
                </span>
            </div>
            <div className="rounded-sm flex flex-col items-center justify-center gap-4 sm:w-[400px] w-full px-4 py-7">
                <div className="flex flex-col items-center justify-center w-full mb-4">
                    <span className="text-[30px] font-semibold text-red-600">Contact Us</span>
                    <span className="text-sm font-light">We love to hear from you</span>
                </div>
                <div className="flex flex-col items-start justify-center w-full border px-4 py-5 rounded-sm bg-white shadow-lg">
                    <p className="text-lg font-medium">Paul Gopurathingal</p>
                    <p className="text-md font-light mt-2">Address:</p>
                    <p className="text-md">Rheinland Consultancy</p>
                    <p className="text-md">Nordstrasse 43</p>
                    <p className="text-md">53859 Niederkassel</p>
                    <p className="text-md">Germany</p>
                    <p className="text-md mt-4">Tel.: +49 2208 74741</p>
                    <p className="text-md">Mobil: +49 1784816145</p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
