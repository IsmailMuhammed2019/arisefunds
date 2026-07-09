import ContactSection from "@/components/contact";
import Icbm from "@/components/icbm";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TalentInfrastructure from "@/components/TalentInfrastructure";
import InvestmentThesis from "@/components/InvestmentThesis";

export default function IcbmPage() {
  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100 flex flex-col">
      <NavBar />
      <Icbm />
      <ContactSection />
      <Footer />
    </div>
  );
}
