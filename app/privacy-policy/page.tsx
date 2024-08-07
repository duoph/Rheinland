import React from 'react';

const PrivacyPolicy = () => {

    return (
        <div className='min-h-screen pt-[90px]'>
            <header className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold'>Privacy Policy</h1>
            </header>
            <main className='p-6'>
                <section className='mb-8'>
                    <h2 className='text-2xl font-semibold text-rheinland-red'>Introduction</h2>
                    <p className='mt-4'>
                        Welcome to our Privacy Policy page. When you use our job consultancy platform, you trust us with your information. We are committed to protecting your privacy and ensuring a secure experience. This Privacy Policy outlines how we collect, use, and safeguard your data.
                    </p>
                </section>
                <section className='mb-8'>
                    <h2 className='text-2xl font-semibold text-rheinland-red'>Information We Collect</h2>
                    <p className='mt-4'>
                        We collect personal information that you provide to us when you register, apply for jobs, or use our services. This may include your name, email address, phone number, resume, and other details relevant to job applications and recruitment.
                    </p>
                </section>
                <section className='mb-8'>
                    <h2 className='text-2xl font-semibold text-rheinland-red'>How We Use Your Information</h2>
                    <p className='mt-4'>
                        The information we collect is used to enhance your experience on our platform. We use it to:
                    </p>
                    <ul className='list-disc ml-6 mt-4'>
                        <li>Provide and manage job listings and applications</li>
                        <li>Communicate with you about job opportunities and updates</li>
                        <li>Improve our services and platform functionality</li>
                    </ul>
                </section>
                <section className='mb-8'>
                    <h2 className='text-2xl font-semibold text-rheinland-red'>Data Security</h2>
                    <p className='mt-4'>
                        We implement a variety of security measures to protect your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.
                    </p>
                </section>
                <section className='mb-8'>
                    <h2 className='text-2xl font-semibold text-rheinland-red'>Your Rights</h2>
                    <p className='mt-4'>
                        You have the right to access, update, or delete your personal information. If you have any concerns or requests regarding your data, please contact us at [contact email].
                    </p>
                </section>
                <section>
                    <h2 className='text-2xl font-semibold text-rheinland-red'>Changes to This Privacy Policy</h2>
                    <p className='mt-4'>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your data.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default PrivacyPolicy;
