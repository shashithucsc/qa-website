"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

const books = [
  {
    title: "Software Testing Fundamentals",
    subtitle: "Core Concepts & Methodologies",
    coverFrom: "#451a03",
    coverVia: "#78350f",
    coverTo: "#0f172a",
    accentColor: "#f59e0b",
    spineColor: "#92400e",
    tags: ["Manual Testing", "SDLC"],
    href: "#",
  },
  {
    title: "ISTQB Foundation Level Guide",
    subtitle: "Certified Testing Professional",
    coverFrom: "#172554",
    coverVia: "#1e3a8a",
    coverTo: "#0f172a",
    accentColor: "#60a5fa",
    spineColor: "#1d4ed8",
    tags: ["Certification", "Theory"],
    href: "#",
  },
  {
    title: "Advanced Test Automation",
    subtitle: "Frameworks & Best Practices",
    coverFrom: "#2e1065",
    coverVia: "#4c1d95",
    coverTo: "#0f172a",
    accentColor: "#a78bfa",
    spineColor: "#6d28d9",
    tags: ["Selenium", "Playwright"],
    href: "#",
  },
  {
    title: "API Testing Mastery",
    subtitle: "REST, GraphQL & gRPC",
    coverFrom: "#022c22",
    coverVia: "#064e3b",
    coverTo: "#0f172a",
    accentColor: "#34d399",
    spineColor: "#047857",
    tags: ["Postman", "Newman"],
    href: "#",
  },
  {
    title: "Performance Testing Deep Dive",
    subtitle: "JMeter, k6 & Gatling",
    coverFrom: "#4c0519",
    coverVia: "#881337",
    coverTo: "#0f172a",
    accentColor: "#fb7185",
    spineColor: "#be123c",
    tags: ["Load Testing", "k6"],
    href: "#",
  },
  {
    title: "AI-Powered Testing Strategies",
    subtitle: "Machine Learning & LLMs in QA",
    coverFrom: "#083344",
    coverVia: "#164e63",
    coverTo: "#0f172a",
    accentColor: "#22d3ee",
    spineColor: "#0e7490",
    tags: ["AI", "LLMs", "Copilot"],
    href: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PDFSection() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 right-1/4 w-125 h-125 bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-125 h-125 bg-blue-600/4 rounded-full blur-3xl pointer-events-none" />

      {/* Horizontal separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 text-xs font-medium tracking-[0.25em] uppercase mb-4">
            The Reading Room
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            Document Library
          </h2>
          <div className="w-16 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-5" />
          <p className="text-slate-400 text-lg max-w-lg mx-auto leading-relaxed">
            Curated PDFs and comprehensive guides for every stage of your QA
            journey.
          </p>
        </motion.div>

        {/* Books grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {books.map((book) => (
            <motion.div
              key={book.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-white/2 hover:border-white/15 transition-all duration-300"
              style={{
                boxShadow: "0 0 0 0 transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px -10px ${book.accentColor}22, 0 0 0 1px ${book.accentColor}18`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 0 0 transparent";
              }}
            >
              {/* Book cover — top half */}
              <div
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${book.coverFrom}, ${book.coverVia}, ${book.coverTo})`,
                }}
              >
                {/* Book spine stripe */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-6 opacity-60"
                  style={{
                    background: `linear-gradient(to right, ${book.spineColor}, transparent)`,
                  }}
                />

                {/* Diagonal lines texture */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 12px)`,
                  }}
                />

                {/* Glow orb in cover */}
                <div
                  className="absolute w-32 h-32 rounded-full blur-2xl opacity-30"
                  style={{ background: book.accentColor }}
                />

                {/* Main icon */}
                <BookOpen
                  className="relative w-14 h-14 opacity-30"
                  style={{ color: book.accentColor }}
                />

                {/* Bottom fade into card */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-slate-950/60 to-transparent" />

                {/* Accent bottom line */}
                <div
                  className="absolute bottom-0 left-6 right-0 h-px opacity-50"
                  style={{ background: book.accentColor }}
                />
              </div>

              {/* Book info — bottom half */}
              <div className="flex flex-col grow p-5 gap-4">
                {/* Metadata */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1.5">
                    {book.subtitle}
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-white leading-snug">
                    {book.title}
                  </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full border border-white/8 text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <a
                    href={book.href}
                    className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 group/link"
                    style={{ color: book.accentColor }}
                  >
                    <BookOpen className="w-4 h-4 shrink-0" />
                    <span className="group-hover/link:underline underline-offset-4">
                      Read Document
                    </span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load more hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="px-6 py-3 rounded-full border border-white/8 text-slate-400 text-sm hover:border-amber-500/30 hover:text-amber-300 transition-colors duration-200">
            Browse full library →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
