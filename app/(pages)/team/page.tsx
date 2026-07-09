import NavBar from "@/components/NavBar";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/contact";
import Footer from "@/components/Footer";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100 flex flex-col">
      <NavBar />
      <main>
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
