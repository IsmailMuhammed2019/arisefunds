"use client";

import React, { useState } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import Breadcrumbs from "./Breadcrumbs";
import { X, Plus } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

interface TeamMember {
    role: string;
    name: string;
    title: string;
    image: string;
    imagePosition?: string;
    bio: string;
    creds: string[];
    linkedin?: string;
}

const leadership: TeamMember[] = [
    {
        role: "Arise Funds Inc.",
        name: "Aisha Saaka Lewis",
        title: "Founder & Chief Executive Officer",
        image: "/aisha-portrait.png",
        bio: "Most impact investors come from finance. Aisha Saaka Lewis comes from technology. As a Data & AI Strategist at Accenture Federal Services — where she led analytics transformation for public sector clients, including enterprise reporting oversight for PEPFAR — and a management consultant at Booz Allen Hamilton, she spent her career applying data and analytics to the hardest problems in government and global development. What she kept seeing was a gap: the infrastructure to connect capital, technology, and workforce development existed in pieces, but never as a coherent investment thesis. Arise Funds is her response to that gap — and the Harvard Kennedy School MPP she holds is why the policy architecture matches the investment one. Born in Ghana and based in Washington, D.C., she leads a firm built on the conviction that the infrastructure of work — and the capital to finance it — must reach every market where talent exists.",
        creds: [
            "MPP · Harvard Kennedy School",
            "Data & AI · Accenture Federal",
            "PEPFAR",
            "Booz Allen Hamilton",
        ],
        linkedin: "https://linkedin.com",
    },
];

const teamMembers: TeamMember[] = [
    {
        role: "Arise Funds Inc.",
        name: "LaTonya Blakes",
        title: "Vice President, Human Resources",
        image: "/latonya.png",
        imagePosition: "center 20%",
        bio: "When Arise Funds deploys capital into a portfolio company, LaTonya Blakes is the person who goes in to build it. Seconded from Arise Funds to SBTS Group LLC, she leads the HR infrastructure, compliance frameworks, talent systems, and organizational design that turn an operating company into an institutionally investable one — the people side of the active-investor model in practice. Her career spans more than three decades in human capital leadership, including a decade at Booz Allen Hamilton, where she directed HR supporting the National Defense University, led the firmwide Veterans Recruiting program, and built early-career talent pipelines across the DMV region. A George Mason University alumna with certifications in Human Capital Strategy, she leads people strategy, governance, and workforce compliance across Arise Funds' multi-country portfolio operations.",
        creds: [
            "30+ Years HR Leadership",
            "Booz Allen Hamilton",
            "National Defense University",
            "George Mason University",
        ],
        linkedin: "https://www.linkedin.com/in/latonyablakes/",
    },
];

const advisors: TeamMember[] = [
    {
        role: "Strategic Advisor · Arise Funds Inc.",
        name: "Laura C. Rudert",
        title: "Global Strategy & Delivery Leader · Formerly Gates Foundation & MCC",
        image: "/laura.jpeg",
        bio: "Laura C. Rudert brings more than two decades of experience across federal government, global development, and philanthropy. As a senior executive at the U.S. Millennium Challenge Corporation, she worked on multi-billion-dollar infrastructure and economic-reform programs — spanning education, vocational training, and transport — that link economic growth to good governance. She later supported global advocacy strategy and operations at the Bill & Melinda Gates Foundation, and founded Partners for Reimagined Economies, advising governments, philanthropies, and companies on economic resilience and equity. As Chief Operating Officer for the sovereign Muckleshoot Indian Tribe, she oversees government services spanning health, education, infrastructure, and natural resources. She holds a master's in political and economic development from the Harvard Kennedy School.",
        creds: [
            "Harvard Kennedy School",
            "Millennium Challenge Corporation",
            "Bill & Melinda Gates Foundation",
            "Partners for Reimagined Economies",
            "Muckleshoot Indian Tribe · COO",
        ],
        linkedin: "https://www.linkedin.com/in/laura-c-rudert/",
    },
];

/* ── Section label with horizontal rule ── */
function SectionLabel({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-4 mb-7">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">
                {label}
            </span>
            <div className="flex-1 h-px bg-slate-700/60" />
        </div>
    );
}

/* ── Placeholder card (future staff) ── */
function PlaceholderCard() {
    return (
        <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#0b1c38] border border-slate-700/30 border-dashed flex items-center justify-center">
                <span className="text-[11px] font-mono text-slate-600 italic">[ future staff ]</span>
            </div>
        </div>
    );
}

/* ── Filled member card ── */
function MemberCard({
    member,
    large = false,
    onClick,
}: {
    member: TeamMember;
    large?: boolean;
    onClick: () => void;
}) {
    return (
        <div className="flex flex-col gap-3">
            <div
                className={`relative rounded-xl overflow-hidden bg-[#0b1c38] group cursor-pointer ${large ? "aspect-[4/5]" : "aspect-[3/4]"
                    }`}
                onClick={onClick}
            >
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    style={{ objectPosition: member.imagePosition ?? "center top" }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04112a]/70 via-transparent to-transparent" />

                {/* + button bottom-left */}
                <button
                    onClick={(e) => { e.stopPropagation(); onClick(); }}
                    className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-white/10 hover:bg-cyan-500/80 backdrop-blur-sm border border-white/20 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    aria-label={`View ${member.name}'s profile`}
                >
                    <Plus className="w-4 h-4 text-white" />
                </button>
            </div>

            {/* Name & title below card */}
            <div>
                <h3 className={`font-bold text-white leading-tight ${large ? "text-xl" : "text-sm"}`}>
                    {member.name}
                </h3>
                <p className={`text-slate-400 mt-0.5 ${large ? "text-sm" : "text-xs"}`}>
                    {member.title}
                </p>
            </div>
        </div>
    );
}

export default function TeamSection() {
    const [selected, setSelected] = useState<TeamMember | null>(null);
    const closeModal = () => setSelected(null);

    return (
        <section id="team" className="bg-[#04112a] text-white py-24 px-6 relative overflow-hidden">
            {/* Decorative SVG */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none">
                    <path d="M0,20 Q50,0 100,20 T150,20" strokeWidth="0.5" />
                    <path d="M0,30 Q50,10 100,30 T150,30" strokeWidth="0.5" />
                    <path d="M0,40 Q50,20 100,40 T150,40" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto">
                {/* Page header */}
                <AnimatedWrapper type="fade-up" className="text-left max-w-4xl mb-14 relative z-10">
                    <Breadcrumbs items={[{ label: "About" }, { label: "Team" }]} />
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 mb-6">
                        The Team
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">
                        Built by practitioners,<br />
                        <span className="text-cyan-400">not theorists.</span>
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl">
                        The Arise Funds team brings together impact investment strategy,
                        federal systems expertise, and 30+ years of human capital leadership.
                    </p>
                </AnimatedWrapper>

                {/* ── LEADERSHIP ── */}
                <AnimatedWrapper type="fade-up" delay={0.05} className="mb-14 relative z-10">
                    <SectionLabel label="Leadership" />
                    {/* Large single featured card — ~40% width on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_3fr] gap-6">
                        <MemberCard member={leadership[0]} large onClick={() => setSelected(leadership[0])} />
                    </div>
                </AnimatedWrapper>

                {/* ── TEAM ── */}
                <AnimatedWrapper type="fade-up" delay={0.1} className="mb-14 relative z-10">
                    <SectionLabel label="Team" />
                    {/* 4-column row — 1 filled + 3 placeholders */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                        {teamMembers.map((m, i) => (
                            <MemberCard key={i} member={m} onClick={() => setSelected(m)} />
                        ))}
                        {/* Hidden until future staff are added:
            <PlaceholderCard />
            <PlaceholderCard />
            <PlaceholderCard />
            */}
                    </div>
                </AnimatedWrapper>

                {/* ── STRATEGIC ADVISORS ── */}
                <AnimatedWrapper type="fade-up" delay={0.15} className="relative z-10">
                    <SectionLabel label="Strategic Advisors" />
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                        {advisors.map((m, i) => (
                            <MemberCard key={i} member={m} onClick={() => setSelected(m)} />
                        ))}
                    </div>
                </AnimatedWrapper>
            </div>

            {/* ── RIGHT DRAWER MODAL ── */}
            {selected && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/65 backdrop-blur-sm z-50"
                        onClick={closeModal}
                    />

                    {/* Drawer panel */}
                    <div className="fixed top-0 right-0 h-full w-full max-w-[520px] bg-[#04112a] border-l border-cyan-900/30 shadow-2xl z-50 overflow-y-auto flex flex-col animate-slide-in-right">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/50 hover:text-white transition-all z-10"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Hero image — tall, full-width, correctly positioned */}
                        <div className="relative w-full bg-[#050e22] overflow-hidden shrink-0" style={{ height: "55vh" }}>
                            <img
                                src={selected.image}
                                alt={selected.name}
                                className="w-full h-full object-cover"
                                style={{ objectPosition: selected.imagePosition ?? "center top" }}
                            />
                            {/* Soft fade at the bottom only */}
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#04112a] to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="px-8 pb-10 pt-6 relative flex flex-col gap-5">
                            {/* Name block — no circular avatar */}
                            <div>
                                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400 mb-1">
                                    {selected.role}
                                </p>
                                <h3 className="text-2xl font-bold text-white leading-tight">
                                    {selected.name}
                                </h3>
                                <p className="text-sm text-slate-400 mt-1">{selected.title}</p>
                            </div>

                            <div className="h-px bg-cyan-900/30" />

                            {/* Bio */}
                            <p className="text-slate-300 text-sm leading-relaxed">{selected.bio}</p>

                            {/* LinkedIn */}
                            {selected.linkedin && (
                                <a
                                    href={selected.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 border border-slate-600 hover:border-cyan-500 hover:bg-cyan-500/5 text-slate-300 hover:text-cyan-400 text-xs font-semibold uppercase tracking-widest px-5 py-3 rounded-full transition-all duration-300 w-fit mt-1"
                                >
                                    <FaLinkedinIn className="w-3.5 h-3.5" />
                                    LinkedIn
                                </a>
                            )}
                        </div>
                    </div>
                </>
            )}

            <style jsx>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.35s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>
        </section>
    );
}
