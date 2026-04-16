import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// Mock data for links
const helpLinks = [
  "About Us",
  "Services",
  "Privacy Policy",
  "Terms & Condition",
];

const contactInfo = ["info@arisefunds.org", "+1 888 214 4005", "Head Office"];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#021526] text-white py-16 px-6 md:px-20 font-sans mt-auto">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer content: 4 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-16">
          {/* Column 1: Logo, Tagline, Social */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/ariseFunds_logoCircle.png"
                alt="Arisefunds Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <h2 className="text-3xl font-bold tracking-tight">Arisefunds</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Empowering the Future, One Student at a Time
            </p>
            <div className="flex items-center gap-6 text-slate-400 pt-3">
              <a href="#" className="hover:text-white transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Help Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">Help Links</h3>
            <ul className="space-y-3.5 text-slate-300 text-sm">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">Contact Info</h3>
            <ul className="space-y-3.5 text-slate-300 text-sm">
              {contactInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">
              Subscribe Our Newsletter
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-[280px]">
              Get the freshest job news and articles delivered to your inbox
              every week.
            </p>

            {/* Newsletter form with specific offset overlapping button */}
            <form className="relative flex items-center h-12 max-w-[300px]">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-full bg-white px-5 py-3 text-sm text-slate-800 focus:outline-none placeholder:text-[#b7b0e1]"
              />
              <button
                type="submit"
                className="absolute -right-4 -bottom-2 h-9 px-5 bg-[#006ca3] text-white text-sm font-semibold transition-colors hover:bg-[#005a96] flex items-center justify-center shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-slate-400 text-xs">
            © 2026 All Right Reserved Arisefunds
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
