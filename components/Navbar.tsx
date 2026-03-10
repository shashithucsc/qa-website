"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, Video, Map, Home, Sparkles, Globe } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/roadmap", label: "Roadmap", icon: Map },
  // { href: "/documents", label: "Library", icon: BookOpen },
  { href: "/videos", label: "Lectures", icon: Video },
  { href: "/other", label: "Other", icon: Globe },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* =========================================================
          TOP NAVBAR (Global for Desktop, Logo-only for Mobile)
      ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="relative border-b border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-sm">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent" />

          <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-wide">
                QA Archive
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-amber-400"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill-desktop"
                        className="absolute inset-0 rounded-xl bg-amber-500/10 border border-amber-500/20"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <Icon className="relative w-4 h-4" />
                    <span className="relative">{label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      {/* =========================================================
          BOTTOM NAVIGATION BAR (Mobile Only)
      ========================================================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe">
        <div className="relative border-t border-white/10 bg-slate-950/90 backdrop-blur-2xl">
          {/* Subtle background glow for the active state area */}
          <div className="absolute inset-0 bg-linear-to-t from-amber-500/5 to-transparent pointer-events-none" />

          <div className="flex items-center justify-around px-2 py-2">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative flex flex-col items-center gap-1 p-2 min-w-18 transition-colors duration-300 ${
                    isActive ? "text-amber-400" : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {/* Active Top Indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill-mobile"
                      className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-0.75 bg-amber-500 rounded-b-full shadow-[0_0_10px_rgba(245,158,11,0.6)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  
                  {/* Icon Box */}
                  <div className={`relative p-1.5 rounded-xl transition-all duration-300 ${isActive ? "bg-amber-500/15" : "bg-transparent"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Label */}
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}