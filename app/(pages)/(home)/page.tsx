import NavBar from "@/components/NavBar";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Hero from "@/components/Hero";
import InvestmentThesis from "@/components/InvestmentThesis";
import HowWeWork from "@/components/HowWeWork";
import Partnerships from "@/components/Partnerships";
import PartnersSection from "@/components/PartnersSection";
import NewsSection from "@/components/NewsSection";
import ICBM from "@/components/icbm";
import PortfolioInvestment from "@/components/PortfolioInvestment";
import ContactSection from "@/components/contact";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100">
      <NavBar />
      <AnnouncementBanner />
      <Hero />
      <InvestmentThesis />
      <HowWeWork />
      <Partnerships />
      <PartnersSection />
      <NewsSection />
      <ICBM />
      <TeamSection />
      <PortfolioInvestment />
      <ContactSection />
      <Footer />
    </div>
  );
}
