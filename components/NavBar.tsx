"use client";

import Link from "next/link";
import { useState } from "react";
import { useModal } from "@/context/ModalContext";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openContactModal, openSpeechModal } = useModal();

  return (
    <nav className="relative z-20 bg-[#03112c] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/ariseFunds_logoCircle.png"
              alt="Arise Funds"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-white tracking-tight">
              Arise Funds
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 text-sm font-medium text-slate-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link
                href="/howWeWork"
                className="hover:text-white transition-colors"
              >
                How it work
              </Link>
              <Link href="/icbm" className="hover:text-white transition-colors">
                ICBM
              </Link>
              <Link
                href="/#portfolio"
                className="hover:text-white transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/#team"
                className="hover:text-white transition-colors"
              >
                Team
              </Link>
              <Link
                href="/partners"
                className="hover:text-white transition-colors"
              >
                Investors
              </Link>
              <Link
                href="/news"
                className="hover:text-white transition-colors"
              >
                News
              </Link>
            </div>
            <button
              onClick={openContactModal}
              className="inline-flex items-center rounded-full bg-cyan-500 px-6 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 cursor-pointer"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden rounded-full border border-white/10 bg-white/5 p-2 text-white shadow-sm"
            aria-label="Toggle navigation"
          >
            <img src="/homePageNavMenu.png" alt="Menu" className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2 rounded-3xl border border-white/10 bg-slate-950/90 p-4">
              <Link
                href="/"
                className="block rounded-2xl px-4 py-3 text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/howWeWork"
                className="block rounded-2xl px-4 py-3 text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                How we work
              </Link>
              <Link
                href="/icbm"
                className="block rounded-2xl px-4 py-3 text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                ICBM
              </Link>
              <Link
                href="/#portfolio"
                className="block rounded-2xl px-4 py-3 text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/#team"
                className="block rounded-2xl px-4 py-3 text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/partners"
                className="block rounded-2xl px-4 py-3 text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Investors
              </Link>
              <Link
                href="/news"
                className="block rounded-2xl px-4 py-3 text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openContactModal();
                }}
                className="w-full text-left block rounded-2xl bg-cyan-500 px-4 py-3 text-slate-950 font-semibold hover:bg-cyan-400 cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
