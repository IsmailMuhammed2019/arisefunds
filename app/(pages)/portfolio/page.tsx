import NavBar from "@/components/NavBar";
import PortfolioInvestment from "@/components/PortfolioInvestment";
import ContactSection from "@/components/contact";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100 flex flex-col">
      <NavBar />
      <main>
        <PortfolioInvestment />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
