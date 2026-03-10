"use client";

import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 pt-16">
      {/* Warm radial gradient lamps */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-175 h-175 bg-amber-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-4xl mx-auto">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-medium tracking-[0.2em] uppercase"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Digital Library · Est. 2025
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight"
        >
          The QA Engineering
          <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400">
            Archive
          </span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-px bg-linear-to-r from-transparent via-amber-500/60 to-transparent"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="max-w-2xl text-slate-300 text-lg md:text-xl leading-relaxed font-light"
        >
          Your curated sanctuary for mastering{" "}
          <span className="text-white font-medium">Quality Assurance</span>,
          from foundational concepts to{" "}
          <span className="text-amber-300 font-medium">AI-driven automation</span>.
        </motion.p>

        

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="flex gap-8 sm:gap-16 mt-4"
        >
          {[
            { value: "120+", label: "Documents" },
            { value: "4", label: "Learning Phases" },
            { value: "50+", label: "Video Lectures" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl font-semibold text-white font-serif">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 tracking-widest uppercase mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-3 text-slate-600"
      >
        <span className="text-xs tracking-[0.25em] uppercase">
          Scroll to explore
        </span>
        <div className="relative w-px h-14">
          <div className="absolute inset-0 bg-linear-to-b from-amber-500/60 to-transparent" />
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 rounded-full bg-amber-400/60 blur-sm"
          />
        </div>
      </motion.div>
    </section>
  );
}
