import NavBar from "@/components/NavBar";
import HowWeWork from "@/components/HowWeWork";
import ContactSection from "@/components/contact";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#04112a] text-slate-100 flex flex-col">
      <NavBar />
      <main>
        <HowWeWork />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
