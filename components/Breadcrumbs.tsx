"use client";

import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center flex-wrap gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-8 select-none">
      <Link href="/" className="hover:text-cyan-400 transition-colors">
        Home
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="text-slate-600">/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-cyan-400 transition-colors whitespace-nowrap">
              {item.label}
            </Link>
          ) : (
            <span className="text-cyan-400 font-semibold whitespace-nowrap">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
