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
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rheinland Jobs",
              "url": "https://www.rheinlandconsultancy.com/",
              "logo": "https://www.rheinlandconsultancy.com/favicon.ico",
              "description": "Rheinland Jobs: Your Gateway to Careers in Germany. Connecting talent with top German employers through personalized career guidance and expert recruitment services."
            })
          }}
        />
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
