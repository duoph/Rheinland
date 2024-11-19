import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Building2, School2, Phone, Mail, Globe, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/" className="md:flex hidden items-center text-gray-600 hover:text-gray-900 mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-rheinland-red mb-2">Contact Us</h1>
          <p className="text-gray-600">We&apos;d love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Rheinland Consultancy Card */}
          <div className="bg-white rounded-lg shadow-lg transition-shadow p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="w-6 h-6 text-rheinland-red" />
              <h2 className="text-xl font-semibold text-rheinland-red">Rheinland Consultancy</h2>
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex space-x-3">
                <MapPin className="w-5 h-5 text-rheinland-red mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm text-gray-500 block">Address</span>
                  <div className="space-y-1 mt-1">
                    <p>Rheinland Consultancy</p>
                    <p>Nordstrasse 43</p>
                    <p>53859 Niederkassel</p>
                    <p>Germany</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              {/* Phone */}
              <div className="flex space-x-3">
                <Phone className="w-5 h-5 text-rheinland-red mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm text-gray-500 block">Phone</span>
                  <p className="mt-1">Tel.: +49 2208 74741</p>
                  <p>Mobil: +49 178 4816145</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rheinland German School Card */}
          <div className="bg-white rounded-lg shadow-lg transition-shadow p-6 mb-10">
            <div className="flex items-center space-x-2 mb-6">
              <School2 className="w-6 h-6 text-rheinland-red" />
              <h2 className="text-xl font-semibold text-rheinland-red">Rheinland German School</h2>
            </div>

            <div className="space-y-4">
              {/* Website */}
              <div className="flex space-x-3">
                <Globe className="w-5 h-5 text-rheinland-red mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm text-gray-500 block">Website</span>
                  <a 
                    href="https://rheinlandgermanschool.in" 
                    className="text-blue-600 hover:text-blue-800 transition-colors mt-1 block"
                  >
                    rheinlandgermanschool.in
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex space-x-3">
                <MapPin className="w-5 h-5 text-rheinland-red mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm text-gray-500 block">Address</span>
                  <div className="space-y-1 mt-1">
                    <p>Rheinland German School</p>
                    <p>Karayamparambu - Mookkannoor Road</p>
                    <p>Angamaly - 683 577</p>
                    <p>Kerala, India</p>
                  </div>
                </div>
              </div>

              {/* Bus Route */}
              <div className="flex space-x-3">
                <MapPin className="w-5 h-5 text-rheinland-red mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm text-gray-500 block">Bus Route</span>
                  <div className="space-y-1 mt-1">
                    <p>Angamaly, Karayamparambu - Mookkannoor Road</p>
                    <p>Stop - German School</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              {/* Phone */}
              <div className="flex space-x-3">
                <Phone className="w-5 h-5 text-rheinland-red mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm text-gray-500 block">Phone</span>
                  <p className="mt-1">+91 8547443727</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex space-x-3">
                <Mail className="w-5 h-5 text-rheinland-red mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm text-gray-500 block">Email</span>
                  <a 
                    href="mailto:rheinlandgermanschool@gmail.com" 
                    className="text-blue-600 hover:text-blue-800 transition-colors mt-1 block"
                  >
                    rheinlandgermanschool@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
