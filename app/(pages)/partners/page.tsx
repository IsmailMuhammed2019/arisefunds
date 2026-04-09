import NavBar from "@/components/NavBar";
import PartnerTop from "@/components/PartnerTop";
import PartnerBottom from "@/components/PartnerBottom";
import Footer from "@/components/Footer";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100 flex flex-col">
      <NavBar />
      <PartnerTop />
      <PartnerBottom />
      <Footer />
    </div>
  );
}
