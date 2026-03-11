"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const quotes = [
  { text: "Quality is never an accident.", author: "John Ruskin" },
  { text: "Testing leads to failure, and failure leads to understanding.", author: "Burt Rutan" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "The only way to go fast is to go well.", author: "Robert C. Martin" },
];

// Reduced phrases for a cleaner, less noisy UX
const steps = [
  "Initializing systems...",
  "Loading curriculum...",
  "Starting session...",
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [quoteIndex] = useState(() => Math.floor(Math.random() * quotes.length));

  useEffect(() => {
    const totalMs = 3000;
    const interval = 20;
    const increment = 100 / (totalMs / interval);
    let current = 0;

    const ticker = setInterval(() => {
      current += increment;
      
      // Organic pausing for realism
      if (current > 30 && current < 35) current -= increment * 0.5;
      if (current > 70 && current < 75) current -= increment * 0.8;

      if (current >= 100) {
        current = 100;
        clearInterval(ticker);
        setTimeout(() => setVisible(false), 400);
      }
      
      setProgress(current);
      setStepIndex(Math.min(Math.floor((current / 100) * steps.length), steps.length - 1));
    }, interval);

    return () => clearInterval(ticker);
  }, []);

  

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#06060f]"
        >
          {/* ── 1. BACKGROUND ───────────────────── */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-cyan-600/10 rounded-full blur-[150px] mix-blend-screen"
            />
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] bg-amber-500/5 rounded-full blur-[90px]"
            />
          </div>

          {/* ── 2. GLASS CARD ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center w-full max-w-sm mx-4 px-8 py-10 rounded-3xl bg-white/[0.03] border border-white/[0.07] shadow-[0_0_80px_rgba(0,0,0,0.5)] backdrop-blur-sm"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

            {/* Glass Logo Orb */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="relative mb-8 flex items-center justify-center"
            >
              {/* Slow rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 rounded-[2rem] border border-dashed border-amber-400/15"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 rounded-[2.5rem] border border-dotted border-white/5"
              />
              <motion.div 
                animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-24 h-24 rounded-3xl bg-amber-500/15 blur-md"
              />
              <motion.div 
                animate={{ scale: [1, 1.25], opacity: [0.7, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                className="absolute w-24 h-24 rounded-3xl border border-amber-400/25"
              />
              <div className="relative w-24 h-24 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(245,158,11,0.25),inset_0_1px_1px_rgba(255,255,255,0.08)] flex items-center justify-center overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                />
                <span className="font-serif font-black text-3xl text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)] z-10">
                  QA
                </span>
              </div>
            </motion.div>

            {/* Brand Typography */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-7 w-full"
            >
              <h1 className="font-serif text-3xl font-bold text-white mb-1 tracking-tight">
                QA For Devindi
              </h1>
              <p className="text-slate-600 text-[10px] tracking-[0.2em] uppercase font-medium">
                Engineering Archive
              </p>
            </motion.div>

            {/* Progress */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="w-full"
            >
              <div className="flex items-center justify-between mb-2 px-0.5">
                <motion.span
                  key={stepIndex}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  className="text-slate-500 text-[10px] font-mono tracking-widest uppercase"
                >
                  {steps[stepIndex]}
                </motion.span>
                <span className="text-cyan-400 font-mono text-[10px] font-bold tabular-nums">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden relative">
                <div
                  className="absolute top-0 left-0 bottom-0 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300"
                  style={{ width: `${progress}%`, boxShadow: "0 0 12px rgba(34,211,238,0.7)" }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"
                  style={{
                    left: `calc(${progress}% - 3px)`,
                    opacity: progress > 0 && progress < 100 ? 1 : 0,
                    boxShadow: "0 0 8px 2px rgba(34,211,238,1)",
                  }}
                />
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.9 }}
              className="mt-7 pt-6 border-t border-white/[0.06] w-full text-center"
            >
              <p className="text-slate-500 text-[11px] italic leading-relaxed">
                &ldquo;{quotes[quoteIndex].text}&rdquo;
              </p>
              <p className="text-slate-600 text-[10px] mt-1.5 tracking-wider uppercase">
                — {quotes[quoteIndex].author}
              </p>
            </motion.div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}