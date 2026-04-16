import ContactSection from "@/components/contact";
import NavBar from "@/components/NavBar";
import TalentInfrastructure from "@/components/TalentInfrastructure";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100 flex flex-col">
      <NavBar />
      <TalentInfrastructure />
      <ContactSection />
      <Footer />
    </div>
  );
}
