import NavBar from "@/components/NavBar";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Hero from "@/components/Hero";
import InvestmentThesis from "@/components/InvestmentThesis";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100">
      <NavBar />
      <AnnouncementBanner />
      <Hero />
      <InvestmentThesis />
      <ContactSection />
      <Footer />
    </div>
  );
}
