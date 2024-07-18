import React from 'react';
import Marquee from 'react-fast-marquee';

const AlertMessageSlider = () => {
    return (
        <div className='fixed bg-rheinland-red top-[75px] left-0 w-full'>
            <Marquee loop={0} speed={50} pauseOnHover={true}>
                <h1 className='text-white font-extralight'>
                    This website is still under development. The Jobs listed are demo . Stay tuned..  <a target='_blank' href="https://www.instagram.com/threadle_designs/" className="underline"> </a>
                </h1>
            </Marquee>
        </div>
    );
}

export default AlertMessageSlider;