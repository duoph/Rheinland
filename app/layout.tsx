import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { AccountProvider } from "@/context/useAccount";
import AlertMessageSlider from "@/components/AlertMessageSlider";
import ProgressBar from "@/components/ProgressBar";
import { Suspense } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rheinland Jobs: Your Trusted Partner for German Career Opportunities",
  description:
    "Rheinland Jobs, founded by Paul Gopurathingal, is your go-to consultancy for landing top-tier jobs in Germany. Offering expert recruitment and personalized career guidance, we connect ambitious professionals with reputable German employers. Begin your journey to a fulfilling career with Rheinland Jobs.",
  keywords:
    "Rheinland Jobs consultancy, German job consultancy, German careers, jobs in Germany, career guidance Germany, German recruitment experts, German employment opportunities, HR consulting Germany, talent acquisition Germany, Rheinland Jobs Paul Gopurathingal",
  robots: "index, follow",  // Make sure pages are indexed
  openGraph: {
    title: "Rheinland Jobs | Find Your Dream Job in Germany",
    description:
      "Explore job opportunities in Germany with Rheinland Jobs. We connect skilled professionals with top employers in Germany.",
    url: "https://www.rheinlandconsultancy.com/",
    images: [
      {
        url: "https://www.rheinlandconsultancy.com/favicon.ico",
        width: 800,
        height: 600,
        alt: "Rheinland Jobs Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rheinland Jobs | Find Your Dream Job in Germany",
    description:
      "Find your ideal job in Germany with Rheinland Jobs. We connect skilled professionals with reputable German employers.",
    images: ["https://www.rheinlandconsultancy.com/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rheinland Jobs",
              "url": "https://www.rheinlandconsultancy.com/",
              "logo": "https://www.rheinlandconsultancy.com/favicon.ico",
              "description": "Rheinland Jobs: Your Gateway to Careers in Germany. Connecting talent with top German employers through personalized career guidance and expert recruitment services.",
              "sameAs": [
                "https://www.facebook.com/rheinlandjobs",
                "https://www.linkedin.com/company/rheinland-jobs",
                "https://twitter.com/rheinland_jobs",
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+49 2208 74741",
                "contactType": "Customer Service",
                "areaServed": "DE",
                "availableLanguage": "English",
              },
            }),
          }}
        />

        {/* Meta Tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Rheinland Jobs: Your Gateway to Careers in Germany. Connecting talent with top German employers through personalized career guidance and expert recruitment services." />
        <meta name="keywords" content="Rheinland Jobs consultancy, German job consultancy, German careers, jobs in Germany, career guidance Germany, German recruitment experts, German employment opportunities, HR consulting Germany, talent acquisition Germany" />

        {/* Favicon */}
        <link rel="icon" href="https://www.rheinlandconsultancy.com/favicon.ico" />
        
      </head>
      <body className={poppins.className}>
        <AccountProvider>
          {/* Header */}
          <Header />
          
          {/* Progress Bar */}
          <ProgressBar />
          
          {/* Alert Message Slider */}
          <AlertMessageSlider />
          
          {/* Toast Notifications */}
          <Toaster
            toastOptions={{
              className: "shadow-md",
            }}
          />

          {/* Main Content */}
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>

          {/* Footer */}
          <Footer />
        </AccountProvider>
      </body>
    </html>
  );
}
