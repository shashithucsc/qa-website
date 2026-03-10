"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



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

  const q = quotes[quoteIndex];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between overflow-hidden bg-[#06060f]"
        >
          {/* ── 1. BACKGROUND ───────────────────── */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
            
            {/* Deep, subtle Aurora Orbs */}
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-amber-500/5 rounded-full blur-[100px]" />
          </div>

          <div className="h-24" />

          {/* ── 2. CENTERPIECE: THE CORE ──────────────────── */}
          <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6">
            
            {/* Glass Logo Orb */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="relative mb-12 flex items-center justify-center"
            >
              <motion.div 
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-3xl bg-amber-500/20 blur-md"
              />
              <motion.div 
                animate={{ scale: [1, 1.2], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                className="absolute inset-0 rounded-3xl border border-amber-400/30"
              />

              <div className="relative w-24 h-24 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(245,158,11,0.2)] flex items-center justify-center overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                />
                <span className="font-serif font-black text-3xl text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10">
                  QA
                </span>
              </div>
            </motion.div>

            {/* Brand Typography */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-10 w-full"
            >
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                QA For Devindi
              </h1>
              <div className="flex items-center justify-between w-full px-1">
                <motion.span 
                  key={stepIndex}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  className="text-slate-400 text-xs font-mono tracking-widest uppercase"
                >
                  {steps[stepIndex]}
                </motion.span>
                <span className="text-cyan-400 font-mono text-xs font-bold tabular-nums">
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>

            {/* Solid Color Laser Progress Track */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative shadow-inner"
            >
              {/* Solid Cyan Fill */}
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                style={{ width: `${progress}%` }}
              />
              {/* Glowing Leading Edge */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_2px_rgba(34,211,238,1)]"
                style={{ 
                  left: `calc(${progress}% - 4px)`,
                  opacity: progress > 0 && progress < 100 ? 1 : 0 
                }}
              />
            </motion.div>
          </div>

      
        </motion.div>
      )}
    </AnimatePresence>
  );
}