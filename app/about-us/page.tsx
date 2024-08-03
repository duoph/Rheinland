import React from 'react';

const AboutPage = () => {
    return (
        <div className='min-h-screen pt-[90px]'>
            <header className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold'>About Us</h1>
            </header>
            <main className='p-6'>
                <section className='mb-8'>
                    <h2 className='text-2xl font-semibold text-rheinland-red'>Who We Are</h2>
                    <p className='mt-4'>
                        We are a dedicated job consultancy firm committed to connecting talented individuals with exciting job opportunities. Our platform is designed to streamline the job search process, making it easier for job seekers to find their perfect match and for employers to discover the right candidates.
                    </p>
                </section>
                <section className='mb-8'>
                    <h2 className='text-2xl font-semibold text-rheinland-red'>Our Mission</h2>
                    <p className='mt-4'>
                        Our mission is to bridge the gap between job seekers and employers through innovative solutions and personalized services. We strive to create a seamless job search experience, leveraging technology to make meaningful connections.
                    </p>
                </section>
                <section className='mb-8'>
                    <h2 className='text-2xl font-semibold text-rheinland-red'>Meet the Founders</h2>
                    <div className='mt-4'>
                        <p className='font-bold'>John Qs</p>
                        <p>
                            Co-founder with a passion for technology and software development. John leads the vision for our platform, ensuring that it meets the highest standards of user experience and functionality.
                        </p>
                        <p className='font-bold mt-4'>Henry Phen</p>
                        <p>
                            Co-founder with expertise in business development and strategy. Henry focuses on driving growth and establishing strategic partnerships to enhance our services.
                        </p>
                    </div>
                </section>
                <section>
                    <h2 className='text-2xl font-semibold text-rheinland-red'>Our Team</h2>
                    <p className='mt-4'>
                        Our team is a diverse group of professionals committed to excellence. From tech experts to customer support specialists, each member plays a crucial role in delivering a top-notch experience for our users.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default AboutPage;
