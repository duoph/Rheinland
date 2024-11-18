import CompanySignUpBanner from "@/components/Home/CompanySignUpBanner";
import NewAndFeaturedJobs from "@/components/Home/NewAndFeaturedJobs";
import HelpedCompanies from "@/components/Home/HelpedCompanies";
import HeroContainer from "@/components/Home/HeroContainer";
import ExploreByCategory from "@/components/Home/ExploreBycategory";

export const metadata = {
  title: "Rheinland Jobs | Find Your Dream Job in Germany",
  description:
    "Explore job opportunities in Germany with Rheinland Jobs. We connect skilled professionals with top German companies. Find your dream job today!",
  keywords: [
    "German jobs",
    "jobs in Germany",
    "Rheinland Jobs",
    "job consultancy Germany",
    "career opportunities Germany",
    "recruitment Germany",
    "top employers Germany",
    "German job market",
    "jobs for foreigners in Germany",
    "expat jobs Germany",
    "work in Germany",
  ],
  robots: "index, follow", // Ensure pages are indexed and followed
  canonical: "https://www.rheinlandconsultancy.com/", // Avoid duplicate content issues
  openGraph: {
    title: "Rheinland Consultancy | Find Your Dream Job in Germany",
    description:
      "Explore job opportunities in Germany with Rheinland Jobs. Start your career journey today!",
    url: "https://www.rheinlandconsultancy.com/",
    images: [
      {
        url: "https://www.rheinlandconsultancy.com/RheinlandLogoHeader.png",
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
    images: ["https://www.rheinlandconsultancy.com/RheinlandLogoHeader.png"],
  },
};

export default function Home() {
  return (
    <main className="home-page">
      {/* Structured Data for JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Home",
            description:
              "Explore job opportunities in Germany with Rheinland Jobs. We connect skilled professionals with top German companies.",
            url: "https://www.rheinlandconsultancy.com/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.rheinlandconsultancy.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            mainEntity: {
              "@type": "Organization",
              name: "Rheinland Jobs",
              logo: "https://www.rheinlandconsultancy.com/RheinlandLogoHeader.png",
              url: "https://www.rheinlandconsultancy.com/",
              sameAs: [
                "https://www.facebook.com/rheinlandjobs",
                "https://www.linkedin.com/company/rheinland-jobs",
                "https://twitter.com/rheinland_jobs",
              ],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <HeroContainer />
      
      {/* Helped Companies Section */}
      <HelpedCompanies />

      {/* Explore Jobs by Category Section */}
      <ExploreByCategory />

      {/* Company Sign Up Banner */}
      <CompanySignUpBanner />

      {/* New and Featured Jobs Section */}
      <NewAndFeaturedJobs />
    </main>
  );
}
