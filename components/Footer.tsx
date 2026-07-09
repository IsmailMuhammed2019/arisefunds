import React from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#021526]/90 backdrop-blur-md text-white py-3.5 px-6 md:px-12 font-sans border-t border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        {/* Left: Logo & Brand */}
        <div className="flex items-center gap-2">
          <Image
            src="/ariseFunds_logoCircle.png"
            alt="Arise Funds Logo"
            width={20}
            height={20}
            className="object-contain"
          />
          <span className="font-semibold tracking-tight text-white">Arise Funds</span>
        </div>

        {/* Center: Copyright */}
        <div className="text-[10px] text-slate-400 text-center sm:text-left">
          © 2026 Arise Funds Inc. Powered by SBTS Group LLC.
        </div>

        {/* Right: Contact & Socials */}
        <div className="flex items-center gap-4 text-slate-400">
          <a href="mailto:info@arisefunds.com" className="hover:text-cyan-400 transition-colors text-[11px]">
            info@arisefunds.com
          </a>
          <span className="text-slate-700">|</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
