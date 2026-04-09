import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import InvestmentThesis from "@/components/InvestmentThesis";
import HowWeWork from "@/components/HowWeWork";
import TalentInfrastructure from "@/components/TalentInfrastructure";
import Partnerships from "@/components/Partnerships";
import ICBM from "@/components/icbm";
import PortfolioInvestment from "@/components/PortfolioInvestment";
import ContactSection from "@/components/contact";  
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100">
      <NavBar />
      <Hero />
      <InvestmentThesis />
      <HowWeWork />
      <TalentInfrastructure />
      <Partnerships />
      <ICBM />
      <PortfolioInvestment />
      <TeamSection/>
      <ContactSection />
      <Footer />
    </div>
  );
}
