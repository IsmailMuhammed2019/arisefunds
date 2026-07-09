import React from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#021526] text-white py-12 px-6 md:px-20 font-sans border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-md">
            <div className="flex items-center gap-3">
              <Image
                src="/ariseFunds_logoCircle.png"
                alt="Arise Funds Logo"
                width={36}
                height={36}
                className="object-contain"
              />
              <h2 className="text-2xl font-bold tracking-tight">Arise Funds</h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Deploying blended capital and operational infrastructure into workforce development and technology companies globally.
            </p>
          </div>

          {/* Contact info & Socials */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-3">
            <p className="text-sm font-semibold text-white">Contact Info</p>
            <a href="mailto:info@arisefunds.com" className="text-slate-400 hover:text-cyan-400 text-xs transition-colors">
              info@arisefunds.com
            </a>
            <a href="https://arisefunds.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 text-xs transition-colors">
              arisefunds.com
            </a>
            <div className="flex items-center gap-4 text-slate-500 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Arise Funds Inc. Powered by SBTS Group LLC.</p>
          <div className="flex gap-4">
            <span className="text-slate-600">Washington DC, USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
