"use client"

import { usePathname } from 'next/navigation';
import React from 'react';
import Marquee from 'react-fast-marquee';

const AlertMessageSlider = () => {

    const pathname = usePathname();

    // Only show the alert slider on the homepage
    if (pathname !== "/") {
        return null;
    }

    return (
        <div className='bg-rheinland-red sticky top-[70px] right-0 left-0 w-full'>
            <Marquee loop={0} speed={50} pauseOnHover={true}>
                <h1 className='text-white font-extralight'>
                    This website is still under development. The jobs listed are demo. Stay tuned...
                </h1>
            </Marquee>
        </div>
    );
}

export default AlertMessageSlider;
