import ExploteBycategory from "@/components/Home/ExploteBycategory";
import HelpedCompanies from "@/components/Home/HelpedCompanies";
import HeroContainer from "@/components/Home/HeroContainer";

export default function Home() {
  return (
    <div>
      <HeroContainer />
      <HelpedCompanies />
      <ExploteBycategory />
    </div>
  );
}
