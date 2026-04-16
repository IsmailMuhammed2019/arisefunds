import NavBar from "@/components/NavBar";
import PartnerTop from "@/components/PartnerTop";
import TalentInfrastructure from "@/components/TalentInfrastructure";
import PartnerBottom from "@/components/PartnerBottom";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/contact";
import Footer from "@/components/Footer";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100 flex flex-col">
      <NavBar />
      <PartnerTop />
      <TalentInfrastructure />
      <PartnerBottom />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
