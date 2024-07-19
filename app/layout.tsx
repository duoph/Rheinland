import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { AccountProvider } from "@/context/useAccount";
import AlertMessageSlider from "@/components/AlertMessageSlider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rheinland Jobs - Your Premier Job Consultancy",
  description:
    "Discover tailored career solutions and expert guidance for your next career move with Rheinland Jobs, the premier job consultancy connecting talent with opportunities. Let us navigate the path to your professional success together.",
  keywords:
    "jobs, career, consultancy, opportunities, professional success, Rheinland Jobs, Germany, job search, employment, recruitment, HR services",
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
          <AlertMessageSlider />
          <Toaster
            toastOptions={{
              className: "",
              style: {
                backgroundColor: "red",
                paddingLeft: "10px",
                paddingRight: "10px",
                color: "white",
                borderRadius: "2px",
              },
            }}
          />
          {children}
          <Footer />
        </AccountProvider>
      </body>
    </html>
  );
}
