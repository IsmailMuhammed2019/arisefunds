import NavBar from "@/components/NavBar";
import HowWeWork from "@/components/HowWeWork";
import TalentInfrastructure from "@/components/TalentInfrastructure";
import Partnerships from "@/components/Partnerships";
import ContactSection from "@/components/contact";  
import Footer from "@/components/Footer";

export default function HowWeWorkPage() {
  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100 flex flex-col">
      <NavBar />
      <main >
        <HowWeWork />
        <TalentInfrastructure />
        <Partnerships />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
