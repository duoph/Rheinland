import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    
    return (
        <div className="min-h-screen pt-[90px] bg-gray-50 text-gray-800">
            <header className="flex flex-col items-center justify-center py-2">
                <h1 className="text-4xl font-bold text-black">About Us</h1>
            </header>
            <main className="p-6 lg:px-24">
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-rheinland-red">Welcome to Rheinland Consultancy</h2>
                    <p className="mt-6 text-lg leading-relaxed">
                        Rheinland Consultancy is a leading job consultancy based in Germany, dedicated to helping Indian professionals navigate the dynamic job market in Germany. Founded by Paul Gopurathingal, an esteemed figure in both the German and Indian communities, our consultancy leverages his extensive experience and deep understanding of cross-cultural dynamics to support job seekers from India in securing employment opportunities in Germany.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-rheinland-red">Our Mission</h2>
                    <p className="mt-6 text-lg leading-relaxed">
                        At Rheinland Consultancy, our mission is to empower Indian professionals by connecting them with top employers in Germany. We aim to simplify the job search process and ensure a seamless transition for our clients by offering personalized career advice, visa assistance, and cultural integration support. We are committed to helping you unlock your full potential and achieve career success in Germany.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-rheinland-red">Our Vision</h2>
                    <p className="mt-6 text-lg leading-relaxed">
                        Our vision is to be the premier consultancy for Indian job seekers aspiring to build a career in Germany. We strive to foster mutual understanding and collaboration between Indian talent and German industries, contributing to a diverse and dynamic workforce. By bridging cultural gaps and providing exceptional support, we envision a future where our clients not only find their dream jobs but also thrive in their new professional environments, creating a positive impact on both their careers and the communities they join.
                    </p>
                </section>

                <section className="mb-12 w-full">
                    <h2 className="text-2xl font-semibold text-rheinland-red">Meet the Founder</h2>
                    <div className="flex flex-col md:flex-row items-center mt-6 w-full">
                        <div className="flex flex-col items-center justify-center md:w-1/3 w-full py-3">
                            <Image
                                src="/paul.jpg"
                                alt="Paul Gopurathingal"
                                width={300}
                                height={300}
                                className="md:mr-6 rounded-sm"
                            />
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-lg text-center font-bold">Paul Gopurathingal</span>
                                <span className="text-lg text-center font-bold">Founder of Rheinland Consultancy</span>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-lg leading-relaxed">
                                Rheinland Consultancy was established by Paul Gopurathingal with the mission of connecting Indian professionals with job opportunities in Germany. Since moving to Germany in 1978, Paul has made significant contributions to both communities, serving as the Global Chairman of the Global Malayali Federation and as a member of the Loka Kerala Sabha. He has also been honored with the “Hind Rattan Award for Social and Culture” for his outstanding contributions.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                Rheinland Consultancy benefits from Paul Gopurathingal&#39;s extensive experience and leadership. His prior ventures, including founding the Indian School Cologne e.V. in Germany (1987) and the Rheinland German School, underscore his commitment to fostering cross-cultural understanding and facilitating career success. Our consultancy is dedicated to providing expert guidance and support to help Indian professionals navigate and succeed in Germany&#39;s job market.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-rheinland-red">Our Team</h2>
                    <p className="mt-6 text-lg leading-relaxed">
                        Our team is a diverse group of professionals committed to excellence. From tech experts to customer support specialists, each member plays a crucial role in delivering a top-notch experience for our users.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default AboutPage;
