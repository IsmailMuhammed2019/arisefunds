import ContactSection from "@/components/contact";
//import Footer from "@/components/footer";
import Icbm from "@/components/icbm";
import NavBar from "@/components/NavBar";
import ICBMModel from "@/components/ICBMModel";
import PortfolioInvestment from "@/components/PortfolioInvestment";
import Footer from "@/components/Footer";

export default function IcbmPage() {
  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100 flex flex-col">
      <NavBar />
      <Icbm />
      <ContactSection />
      <h1>Icbm</h1>
      <Footer />
    </div>
  );
}
