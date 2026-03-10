"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, BarChart3, Code2, Brain, FileText, X, 
  Download, CheckCircle2, Circle, ArrowRight, Check, Sparkles 
} from "lucide-react";

// Updated data array using solid Tailwind color classes instead of gradients
const phases = [
  {
    id: "phase-01",
    phase: "Phase 01",
    title: "Quality Engineering Foundations",
    icon: Shield,
    textColor: "text-cyan-400",
    bgColor: "bg-cyan-400",
    borderColor: "border-cyan-400",
    hoverBg: "group-hover:bg-cyan-500/20",
    glowColor: "rgba(34,211,238,0.6)",
    pdf: "/phase-01-foundations.pdf",
    filename: "QE_Foundations_Guide.pdf",
    fileSize: "2.4 MB",
    side: "right" as const,
  },
  {
    id: "phase-02",
    phase: "Phase 02",
    title: "Quality Management Systems",
    icon: BarChart3,
    textColor: "text-violet-400",
    bgColor: "bg-violet-400",
    borderColor: "border-violet-400",
    hoverBg: "group-hover:bg-violet-500/20",
    glowColor: "rgba(167,139,250,0.6)",
    pdf: "/phase-02-management.pdf",
    filename: "Quality_Management_QMS.pdf",
    fileSize: "1.8 MB",
    side: "left" as const,
  },
  {
    id: "phase-03",
    phase: "Phase 03",
    title: "Test Automation Frameworks",
    icon: Code2,
    textColor: "text-pink-400",
    bgColor: "bg-pink-400",
    borderColor: "border-pink-400",
    hoverBg: "group-hover:bg-pink-500/20",
    glowColor: "rgba(244,114,182,0.6)",
    pdf: "/phase-03-automation.pdf",
    filename: "Automation_Mastery.pdf",
    fileSize: "3.1 MB",
    side: "right" as const,
  },
  {
    id: "phase-04",
    phase: "Phase 04",
    title: "AI & Next-Gen Testing",
    icon: Brain,
    textColor: "text-emerald-400",
    bgColor: "bg-emerald-400",
    borderColor: "border-emerald-400",
    hoverBg: "group-hover:bg-emerald-500/20",
    glowColor: "rgba(52,211,153,0.6)",
    pdf: "/phase-04-ai-testing.pdf",
    filename: "NextGen_AI_Testing.pdf",
    fileSize: "4.5 MB",
    side: "left" as const,
  },
];

type Phase = (typeof phases)[number];

export default function VibrantRoadmap() {
  const [activePdf, setActivePdf] = useState<Phase | null>(null);
  const [completedPhases, setCompletedPhases] = useState<string[]>([]);

  const toggleCompletion = (id: string) => {
    setCompletedPhases((prev) => 
      prev.includes(id) ? prev.filter(phaseId => phaseId !== id) : [...prev, id]
    );
  };

  const progressPercentage = Math.round((completedPhases.length / phases.length) * 100);

  return (
    <>
      <section className="relative py-32 bg-[#0a0a1a] overflow-hidden min-h-screen">
        
        {/* =========================================
            COSMIC AURORA BACKGROUND (Animated)
        ========================================= */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 mix-blend-overlay" />
          
          <motion.div
            animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-violet-600/30 blur-[120px] mix-blend-screen"
          />
          <motion.div
            animate={{ x: [100, -100, 100], y: [50, -50, 50] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-cyan-600/20 blur-[150px] mix-blend-screen"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-fuchsia-600/20 blur-[130px] mix-blend-screen"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* HEADER & PROGRESS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white tracking-widest uppercase">The Journey Scroll</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight drop-shadow-lg">
              Master Quality Assurance
            </h2>
            
            {/* Solid Glass Progress Bar */}
            <div className="max-w-lg mx-auto bg-white/5 border border-white/20 rounded-2xl p-5 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Curriculum Progress</span>
                <span className="text-lg font-black text-white">{progressPercentage}%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
                  className="h-full bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] relative"
                />
              </div>
            </div>
          </motion.div>

          {/* TIMELINE */}
          <div className="relative">
            {/* Central Solid Glowing Energy Beam */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-1.5 bg-white/10 rounded-full border border-white/5">
              <motion.div 
                className="w-full bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                initial={{ height: 0 }}
                animate={{ height: `${progressPercentage === 0 ? 15 : progressPercentage}%` }}
                transition={{ duration: 1 }}
              />
            </div>

            <div className="flex flex-col gap-12 md:gap-24">
              {phases.map((item, index) => {
                const isRight = item.side === "right";
                const isCompleted = completedPhases.includes(item.id);

                return (
                  <div key={item.id} className="relative flex flex-col md:flex-row items-center gap-8">
                    
                    {/* Left Side */}
                    {isRight ? (
                      <div className="hidden md:block w-full md:w-[calc(50%-3rem)]" />
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full md:w-[calc(50%-3rem)]"
                      >
                        <HeavyGlassCard item={item} isCompleted={isCompleted} onToggle={() => toggleCompletion(item.id)} onView={() => setActivePdf(item)} />
                      </motion.div>
                    )}

                    {/* Timeline Node (Solid Colors) */}
                    <div className="relative hidden md:flex items-center justify-center w-12 h-12 shrink-0 z-10">
                      <div className={`w-full h-full rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-500
                        ${isCompleted ? `${item.bgColor} border-white shadow-[0_0_20px_${item.glowColor}]` : 'bg-black/50 border-white/20'}
                      `}>
                        {isCompleted ? <Check className="w-6 h-6 text-black" /> : <div className={`w-3 h-3 rounded-full ${item.bgColor} shadow-[0_0_10px_${item.glowColor}]`} />}
                      </div>
                    </div>

                    {/* Right Side */}
                    {isRight ? (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full md:w-[calc(50%-3rem)]"
                      >
                        <HeavyGlassCard item={item} isCompleted={isCompleted} onToggle={() => toggleCompletion(item.id)} onView={() => setActivePdf(item)} />
                      </motion.div>
                    ) : (
                      <div className="hidden md:block w-full md:w-[calc(50%-3rem)]" />
                    )}

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SOLID COLOR PDF Modal */}
      <AnimatePresence>
        {activePdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setActivePdf(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-6xl h-[90vh] flex flex-col rounded-3xl border ${activePdf.borderColor} bg-slate-950/80 backdrop-blur-2xl overflow-hidden shadow-[0_0_40px_${activePdf.glowColor}]`}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-4">
                  {/* Solid transparent icon in header */}
                  <FileText className={`w-8 h-8 ${activePdf.textColor} drop-shadow-[0_0_8px_currentColor]`} />
                  <div>
                    <h3 className="text-white text-lg font-bold">{activePdf.filename}</h3>
                    <p className="text-slate-300 text-sm">{activePdf.title} • {activePdf.fileSize}</p>
                  </div>
                </div>
                <button onClick={() => setActivePdf(null)} className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 bg-black">
                <iframe src={`${activePdf.pdf}#toolbar=1`} className="w-full h-full border-none" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ==========================================
// HEAVY REFRACTIVE GLASS CARD (SOLID COLORS)
// ==========================================
function HeavyGlassCard({ item, isCompleted, onToggle, onView }: any) {
  const Icon = item.icon;

  return (
    <div className={`relative rounded-4xl overflow-hidden transition-all duration-500
      ${isCompleted ? `shadow-[0_0_30px_rgba(255,255,255,0.1)] border-white/40` : `hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_${item.glowColor}]`}
    `}>
      
      {/* Main Glass Body */}
      <div className={`relative p-6 md:p-8 bg-white/5 backdrop-blur-2xl border border-white/10 hover:${item.borderColor} shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-colors duration-300`}>
        
        {/* Header Section */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div className="flex items-center gap-5">
            {/* Transparent Background, Solid Neon Icon */}
            <div className="shrink-0 p-1">
              <Icon className={`w-10 h-10 ${item.textColor} drop-shadow-[0_0_12px_currentColor]`} />
            </div>
            
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-2 bg-white/5 border border-white/10 ${item.textColor}`}>
                {item.phase}
              </span>
              <h3 className="text-2xl font-bold text-white leading-tight">
                {item.title}
              </h3>
            </div>
          </div>

          {/* Completion Toggle */}
          <button 
            onClick={onToggle}
            className={`shrink-0 p-2 rounded-full border transition-all duration-300
              ${isCompleted 
                ? `bg-white border-white text-black shadow-[0_0_20px_rgba(255,255,255,0.6)]` 
                : 'bg-black/20 border-white/20 text-white hover:bg-white/20'
              }
            `}
          >
            {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6 opacity-50" />}
          </button>
        </div>

        {/* The "Document Pill" inside the glass */}
        <div 
          onClick={onView}
          className={`group cursor-pointer relative overflow-hidden rounded-2xl bg-black/40 border border-white/10 p-4 transition-all duration-300 ${item.hoverBg} hover:${item.borderColor}`}
        >
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-white/10 text-white backdrop-blur-md">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className={`text-white font-semibold text-lg transition-colors duration-300 group-hover:${item.textColor}`}>
                  {item.filename}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.bgColor} text-black`}>PDF</span>
                  <span className="text-xs text-slate-400 font-medium">{item.fileSize}</span>
                </div>
              </div>
            </div>
            
            <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white group-hover:${item.bgColor} group-hover:text-black transition-all`}>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}