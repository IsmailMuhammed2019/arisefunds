"use client";

import Link from "next/link";
import { useState } from "react";
import { useModal } from "@/context/ModalContext";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const { openContactModal } = useModal();

  return (
    <nav className="sticky top-0 z-50 bg-[#03112c]/90 backdrop-blur-md border-b border-white/10">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 text-sm font-medium text-slate-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              
              {/* About Hover Dropdown */}
              <div className="relative group cursor-pointer py-5 flex items-center gap-1.5 hover:text-white transition-colors">
                <span>About</span>
                <svg className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 rounded-2xl border border-white/10 bg-[#05162e]/95 backdrop-blur-md p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link href="/how-it-works" className="block rounded-xl px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-white/5 transition-colors">
                    How It Works
                  </Link>
                  <Link href="/icbm" className="block rounded-xl px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-white/5 transition-colors">
                    ICBM
                  </Link>
                  <Link href="/investors" className="block rounded-xl px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-white/5 transition-colors">
                    Investors
                  </Link>
                  <Link href="/partners" className="block rounded-xl px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-white/5 transition-colors">
                    Partners
                  </Link>
                  <Link href="/team" className="block rounded-xl px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-white/5 transition-colors">
                    Team
                  </Link>
                </div>
              </div>

              <Link
                href="/portfolio"
                className="hover:text-white transition-colors"
              >
                Portfolio
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="space-y-2 rounded-3xl border border-white/10 bg-[#05162e]/95 backdrop-blur-md p-4">
              <Link
                href="/"
                className="block rounded-2xl px-4 py-3 text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile About Collapsible */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="w-full flex items-center justify-between rounded-2xl px-4 py-3 text-white hover:bg-white/10 text-left font-medium"
                >
                  <span>About</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isAboutOpen && (
                  <div className="pl-6 space-y-1 border-l border-white/10 ml-4 animate-fade-in">
                    <Link
                      href="/how-it-works"
                      className="block rounded-xl px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsAboutOpen(false);
                      }}
                    >
                      How It Works
                    </Link>
                    <Link
                      href="/icbm"
                      className="block rounded-xl px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsAboutOpen(false);
                      }}
                    >
                      ICBM
                    </Link>
                    <Link
                      href="/investors"
                      className="block rounded-xl px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsAboutOpen(false);
                      }}
                    >
                      Investors
                    </Link>
                    <Link
                      href="/partners"
                      className="block rounded-xl px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsAboutOpen(false);
                      }}
                    >
                      Partners
                    </Link>
                    <Link
                      href="/team"
                      className="block rounded-xl px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsAboutOpen(false);
                      }}
                    >
                      Team
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className="block rounded-2xl px-4 py-3 text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
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
