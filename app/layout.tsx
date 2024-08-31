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
  title: "Rheinland Jobs: Your Gateway to German Careers",
  description:
    "Rheinland Jobs, founded by Paul Gopurathingal, is a premier job consultancy specializing in connecting talented individuals with top employers in Germany. Discover personalized career guidance, expert recruitment services, and find your dream job in the German market.",
  keywords:
    "Rheinland Jobs, job consultancy, Germany, career guidance, recruitment, employment opportunities, job search, HR consulting, talent acquisition, German jobs, Paul Gopurathingal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Paul Gopurathingal" />
        <link rel="icon" href="/rheinlandLogoHeader.png" />
        <link rel="canonical" href="https://www.rheinlandjobs.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Job Consultancy in Germany",
            "description": "Rheinland Jobs, founded by Paul Gopurathingal, connects job seekers with top employers in Germany. Discover personalized career guidance and expert recruitment services.",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Rheinland Jobs",
              "logo": "https://www.rheinlandjobs.com/rheinlandLogoHeader.png"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Germany",
                "addressCountry": "DE"
              }
            },
            "datePosted": "2024-08-30",
            "employmentType": "Full-time",
          })}
        </script>
      </head>
      <body className={poppins.className}>
        <AccountProvider>
          <Header />
          <ProgressBar />
          <AlertMessageSlider />
          <Toaster
            toastOptions={{
              className: "shadow-md",
            }}
          />
          <Suspense fallback={null}>
            {children}
          </Suspense>
          <Footer />
        </AccountProvider>
      </body>
    </html>
  );
}
