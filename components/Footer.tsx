import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const navLinks = [
  { label: "Our Thesis", href: "/#investment-thesis" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "ICBM", href: "/#icbm" },
  { label: "Partners", href: "/#partners" },
  { label: "News", href: "/#news" },
  { label: "Team", href: "/#team" },
  { label: "For Investors", href: "/#contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#021526] text-white py-16 px-6 md:px-20 font-sans mt-auto">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer content: 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {/* Column 1: Logo, Tagline, Social */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/ariseFunds_logoCircle.png"
                alt="Arise Funds Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <h2 className="text-3xl font-bold tracking-tight">Arise Funds</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Deploying blended capital and operational infrastructure into
              workforce development and technology companies globally.
            </p>
            <div className="flex items-center gap-6 text-slate-400 pt-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">Navigate</h3>
            <ul className="space-y-3.5 text-slate-300 text-sm">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">Contact Info</h3>
            <ul className="space-y-3.5 text-slate-300 text-sm">
              <li>
                <a
                  href="mailto:info@arisefunds.com"
                  className="hover:text-white transition-colors"
                >
                  info@arisefunds.com
                </a>
              </li>
              <li>
                <a
                  href="https://arisefunds.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  arisefunds.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-slate-400 text-xs">
            © 2026 Arise Funds Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
