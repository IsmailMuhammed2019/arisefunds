import ContactSection from "@/components/contact";
//import Footer from "@/components/footer";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100 flex flex-col">
      <NavBar />
      <ContactSection />
      <h1>Contact</h1>
      <Footer />
    </div>
  );
}
