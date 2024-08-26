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
    "Rheinland Jobs is a leading job consultancy founded by Paul Gopurathingal. We specialize in connecting talented individuals with top employers in Germany. Our personalized career guidance, expert recruitment services, and extensive network help you find your dream job in the German market.",
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
        <link rel="icon" href="/rheinlandLogoHeader.png" />
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
