"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ExternalLink,
  BookOpen,
  Award,
  FileText,
  GraduationCap,
  Newspaper,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

const quickLinks = [
  {
    title: "Latest News & Updates",
    description: "Official ISTQB announcements, new syllabus releases, and certification changes.",
    icon: Newspaper,
    href: "https://www.istqb.org/news-room/",
    accentColor: "#f59e0b",
    badge: "News",
  },
  {
    title: "Exam Certifications",
    description: "Browse the full certification portfolio from Foundation to Expert level.",
    icon: Award,
    href: "https://www.istqb.org/certifications/",
    accentColor: "#3b82f6",
    badge: "Certifications",
  },
  {
    title: "Download Syllabi",
    description: "Free official syllabi PDFs for every ISTQB exam level and module.",
    icon: FileText,
    href: "https://www.istqb.org/certifications/certified-tester-foundation-level",
    accentColor: "#8b5cf6",
    badge: "Syllabi",
  },
  {
    title: "Exam Study Materials",
    description: "Sample questions, glossaries, and practice exams direct from ISTQB.",
    icon: BookOpen,
    href: "https://www.istqb.org/certifications/study-resources",
    accentColor: "#10b981",
    badge: "Study",
  },
  {
    title: "Find an Accredited Provider",
    description: "Locate accredited training providers near you or online.",
    icon: GraduationCap,
    href: "https://www.istqb.org/training-and-exam/find-training/",
    accentColor: "#ec4899",
    badge: "Training",
  },
  {
    title: "ISTQB Glossary",
    description: "The definitive software testing terminology glossary updated for 2025.",
    icon: Globe,
    href: "https://glossary.istqb.org/",
    accentColor: "#22d3ee",
    badge: "Glossary",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function OtherSection() {
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const handleIframeLoad = () => setIframeLoaded(true);

  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden min-h-screen">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-160 h-80 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-120 h-120 bg-blue-600/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-amber-400 text-xs font-medium tracking-[0.25em] uppercase mb-4">
            External Resources
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            ISTQB Official Portal
          </h1>
          <div className="w-16 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-4" />
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Stay current with the International Software Testing Qualifications Board — news, syllabi, and certification updates.
          </p>
        </motion.div>

        {/* ── Iframe Viewer ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur-sm shadow-2xl"
            style={{ boxShadow: "0 0 80px -20px rgba(245,158,11,0.12)" }}
          >
            {/* Toolbar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-white/2">
              <div className="flex items-center gap-3">
                {/* Traffic-light dots */}
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
                {/* URL bar */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/8 text-slate-400 text-xs">
                  <Globe className="w-3 h-3 shrink-0" />
                  <span className="hidden sm:inline">https://www.istqb.org</span>
                  <span className="sm:hidden">istqb.org</span>
                  {iframeLoaded && !iframeError && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1" />
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setIframeLoaded(false); setIframeError(false); setReloadKey(k => k + 1); }}
                  className="p-1.5 rounded-lg border border-white/8 text-slate-500 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  title="Reload"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://www.istqb.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-300 text-xs font-medium hover:bg-amber-500/20 transition-colors duration-200"
                >
                  <ExternalLink className="w-3 h-3" />
                  Open in new tab
                </a>
              </div>
            </div>

            {/* Loading shimmer */}
            {!iframeLoaded && !iframeError && (
              <div className="absolute inset-0 top-13 z-10 flex flex-col items-center justify-center gap-4 bg-slate-950/80 pointer-events-none">
                <div className="w-7 h-7 rounded-full border-2 border-amber-500/30 border-t-amber-400 animate-spin" />
                <p className="text-slate-500 text-sm">Loading ISTQB…</p>
              </div>
            )}

            {/* Blocked / error fallback */}
            {iframeError && (
              <div className="flex flex-col items-center justify-center gap-5 py-20 px-6 text-center">
                <div className="p-4 rounded-2xl bg-amber-500/8 border border-amber-500/20">
                  <AlertCircle className="w-8 h-8 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">
                    Embedded preview blocked by ISTQB
                  </p>
                  <p className="text-slate-500 text-sm max-w-sm">
                    The ISTQB website restricts embedding for security reasons. Use the quick links below or open the site directly.
                  </p>
                </div>
                <a
                  href="https://www.istqb.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium hover:bg-amber-500/20 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit ISTQB.org directly
                </a>
              </div>
            )}

            {/* Iframe */}
            {!iframeError && (
              <iframe
                key={reloadKey}
                src="https://www.istqb.org"
                title="ISTQB Official Website"
                className="w-full border-none"
                style={{ height: "680px", display: iframeLoaded ? "block" : "block" }}
                onLoad={handleIframeLoad}
                onError={() => setIframeError(true)}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            )}
          </div>

          {/* hint below iframe */}
          <p className="text-center text-slate-600 text-xs mt-3">
            If the preview does not load, use the quick-access cards below or open ISTQB.org in a new tab.
          </p>
        </motion.div>

        {/* ── Quick-access cards ──────────────────────────────── */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <h2 className="font-serif text-2xl font-bold text-white">Quick Access</h2>
            <div className="flex-1 h-px bg-white/5" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group flex flex-col p-5 rounded-2xl border border-white/8 bg-white/2 hover:border-white/15 transition-colors duration-300"
                  style={{
                    boxShadow: "0 0 0 0 transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 16px 48px -8px ${link.accentColor}22`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 0 0 transparent";
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="p-2.5 rounded-xl border"
                      style={{ background: `${link.accentColor}12`, borderColor: `${link.accentColor}25` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: link.accentColor }} />
                    </div>
                    <span
                      className="text-[10px] font-semibold tracking-[0.18em] uppercase px-2 py-0.5 rounded-full border"
                      style={{ color: link.accentColor, background: `${link.accentColor}12`, borderColor: `${link.accentColor}25` }}
                    >
                      {link.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-semibold text-white mb-1.5 leading-snug group-hover:text-white/90">
                    {link.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {link.description}
                  </p>

                  <div
                    className="flex items-center gap-1.5 mt-4 pt-3 border-t border-white/5 text-xs font-medium transition-colors duration-200"
                    style={{ color: link.accentColor }}
                  >
                    <ExternalLink className="w-3 h-3" />
                    Open on ISTQB.org
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
