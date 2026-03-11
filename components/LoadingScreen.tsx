"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  { text: "Welcome to the QA journey", author: "Devindi Uthpala" }
 
];

const steps = [
  "Initializing systems...",
  "Compiling roadmap...",
  "Starting session...",
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [quoteIndex] = useState(() => Math.floor(Math.random() * quotes.length));

  useEffect(() => {
    const totalMs = 3200; 
    const interval = 20;
    const increment = 100 / (totalMs / interval);
    let current = 0;

    const ticker = setInterval(() => {
      current += increment;
      
      // Eased organic pausing for absolute realism
      if (current > 25 && current < 30) current -= increment * 0.6;
      if (current > 65 && current < 75) current -= increment * 0.8;

      if (current >= 100) {
        current = 100;
        clearInterval(ticker);
        setTimeout(() => setVisible(false), 500); // 0.5s pause at 100%
      }
      
      setProgress(current);
      setStepIndex(Math.min(Math.floor((current / 100) * steps.length), steps.length - 1));
    }, interval);

    return () => clearInterval(ticker);
  }, []);

  const q = quotes[quoteIndex];

  // SVG Circle Math for the Progress Ring
  const circleRadius = 140;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circleCircumference - (progress / 100) * circleCircumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1, 
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#030712]"
        >
          {/* =========================================
              1. CINEMATIC LIGHTING (BACKGROUND)
          ========================================= */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay" />
            
            {/* Dynamic Orbs linked to progress */}
            <motion.div
              style={{ opacity: 0.1 + (progress / 100) * 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-cyan-600/30 rounded-full blur-[150px] mix-blend-screen transition-opacity duration-300"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-violet-600/20 rounded-full blur-[130px] mix-blend-screen"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[50vw] bg-amber-500/10 rounded-full blur-[130px] mix-blend-screen"
            />
          </div>

          {/* =========================================
              2. CENTRAL RADIAL HUD
          ========================================= */}
          <div className="relative z-10 flex items-center justify-center mt-8">
            
            {/* The SVG Progress Ring */}
            <svg 
              className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] -rotate-90 transform drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]" 
              viewBox="0 0 320 320"
            >
              {/* Background Track */}
              <circle
                cx="160"
                cy="160"
                r={circleRadius}
                fill="transparent"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="2"
              />
              {/* Solid Cyan Progress Indicator */}
              <motion.circle
                cx="160"
                cy="160"
                r={circleRadius}
                fill="transparent"
                stroke="#22d3ee" // Solid Cyan-400
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={circleCircumference}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </svg>

            {/* Inner Core Content */}
            <div className="relative flex flex-col items-center justify-center w-64 h-64 md:w-80 md:h-80 rounded-full bg-black/20 backdrop-blur-md border border-white/5 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
              
              {/* Top Branding */}
              <div className="absolute top-12 flex flex-col items-center">
                <span className="font-serif text-amber-400 font-bold tracking-[0.2em] text-xs">
                  QA ARCHIVE
                </span>
              </div>

              {/* Massive Percentage */}
              <div className="flex items-start justify-center">
                <span className="font-mono text-6xl md:text-7xl font-light tracking-tighter text-white tabular-nums">
                  {Math.round(progress)}
                </span>
                <span className="font-mono text-2xl text-cyan-400 mt-2 ml-1">%</span>
              </div>

              {/* Bottom Step Indicator */}
              <div className="absolute bottom-12 w-full flex justify-center px-4">
                <motion.span
                  key={stepIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-slate-400 text-[10px] md:text-xs font-mono tracking-widest uppercase text-center"
                >
                  {steps[stepIndex]}
                </motion.span>
              </div>

            </div>
          </div>

          {/* =========================================
              3. CINEMATIC FOOTER (Quote)
          ========================================= */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute bottom-12 left-0 right-0 px-6 flex flex-col items-center text-center"
          >
            <div className="max-w-md">
              <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed font-serif italic mb-4">
                "{q.text}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-6 h-px bg-white/10" />
                <p className="text-amber-400/80 text-[10px] font-bold tracking-[0.2em] uppercase">
                  {q.author}
                </p>
                <div className="w-6 h-px bg-white/10" />
              </div>
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}