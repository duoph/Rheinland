import CompanySignUpBanner from "@/components/Home/CompanySignUpBanner";
import ExploteBycategory from "@/components/Home/ExploreBycategory";
import FeaturedJobs from "@/components/Home/FeaturedJobs";
import HelpedCompanies from "@/components/Home/HelpedCompanies";
import HeroContainer from "@/components/Home/HeroContainer";

export default function Home() {
  return (
    <div>
      <HeroContainer />
      <HelpedCompanies />
      <ExploteBycategory />
      <CompanySignUpBanner />
      <FeaturedJobs />
    </div>
  );
}
