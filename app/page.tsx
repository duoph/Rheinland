import CompanySignUpBanner from "@/components/Home/CompanySignUpBanner";
import ExploteBycategory from "@/components/Home/ExploreBycategory";
import NewAndFeaturedJobs from "@/components/Home/NewAndFeaturedJobs";
import HelpedCompanies from "@/components/Home/HelpedCompanies";
import HeroContainer from "@/components/Home/HeroContainer";

export default function Home() {
  return (
    <div className="">
      <HeroContainer />
      <HelpedCompanies />
      <ExploteBycategory />
      <CompanySignUpBanner />
      <NewAndFeaturedJobs />
    </div>
  );
}
