"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, BarChart3, Code2, Brain, FileText, X, 
  CheckCircle2, Circle, ArrowRight, Check, Sparkles 
} from "lucide-react";

// 1. UPDATED DATA: Added descriptions, phase numbers, and skill tags for visual variety
const phases = [
  {
    id: "phase-01",
    phaseNum: "01",
    phase: "Phase 01",
    title: "Quality Engineering Foundations",
    description: "Master the Software Testing Life Cycle (STLC), bug reporting, and manual testing fundamentals.",
    tags: ["STLC", "Jira", "Manual Testing"],
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
    phaseNum: "02",
    phase: "Phase 02",
    title: "Quality Management Systems",
    description: "Learn test estimation, scheduling, and Agile testing methodologies to manage large teams.",
    tags: ["Agile", "Scrum", "Test Plans"],
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
    phaseNum: "03",
    phase: "Phase 03",
    title: "Test Automation Frameworks",
    description: "Transition from manual to automated execution using modern, industry-standard frameworks.",
    tags: ["Selenium", "Java", "CI/CD", "API"],
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
    phaseNum: "04",
    phase: "Phase 04",
    title: "AI & Next-Gen Testing",
    description: "Leverage LLMs and generative AI tools for self-healing scripts and automated test case generation.",
    tags: ["Agentic AI", "Prompt Eng", "Copilot"],
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

// ... (Keep the main VibrantRoadmap component exactly as it was, including the layout and PDF modal)
// Scroll down to the updated HeavyGlassCard component below:

// ==========================================
// ENHANCED HEAVY REFRACTIVE GLASS CARD
// ==========================================
function HeavyGlassCard({ item, isCompleted, onToggle, onView }: any) {
  const Icon = item.icon;

  return (
    <div className={`relative rounded-[2rem] overflow-hidden transition-all duration-500
      ${isCompleted ? `shadow-[0_0_30px_rgba(255,255,255,0.05)] border-white/20` : `hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_${item.glowColor}]`}
    `}>
      
      {/* Main Glass Body */}
      <div className={`relative p-6 md:p-8 bg-white/5 backdrop-blur-[40px] border border-white/10 hover:${item.borderColor} shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-colors duration-300 overflow-hidden`}>
        
        {/* GIANT TYPOGRAPHIC WATERMARK */}
        <div className="absolute -top-6 -right-4 text-[140px] font-black italic tracking-tighter opacity-[0.03] text-white select-none pointer-events-none">
          {item.phaseNum}
        </div>
        
        {/* Header Section */}
        <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-5">
            {/* Transparent Background, Solid Neon Icon */}
            <div className="shrink-0 p-1">
              <Icon className={`w-10 h-10 ${item.textColor} drop-shadow-[0_0_12px_currentColor]`} />
            </div>
            
            <div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-2 bg-white/5 border border-white/10 ${item.textColor}`}>
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
            className={`shrink-0 p-2 rounded-full border transition-all duration-300 group/btn
              ${isCompleted 
                ? `bg-white border-white text-black shadow-[0_0_20px_rgba(255,255,255,0.6)]` 
                : 'bg-black/20 border-white/20 text-white hover:bg-white/20'
              }
            `}
          >
            {isCompleted ? (
              <CheckCircle2 className="w-6 h-6" />
            ) : (
              <Circle className="w-6 h-6 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
            )}
          </button>
        </div>

        {/* Dynamic Context: Description */}
        <div className="relative z-10 mb-8 pl-1">
          <p className="text-sm text-slate-400 leading-relaxed max-w-[90%]">
            {item.description}
          </p>
        </div>

        {/* The "Document Pill" inside the glass */}
        <div 
          onClick={onView}
          className={`group cursor-pointer relative z-10 overflow-hidden rounded-2xl bg-black/40 border border-white/10 p-4 transition-all duration-300 ${item.hoverBg} hover:${item.borderColor}`}
        >
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white backdrop-blur-md transition-colors group-hover:bg-white/10">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className={`text-white font-semibold text-base transition-colors duration-300 group-hover:${item.textColor}`}>
                  {item.filename}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.bgColor} text-black`}>PDF</span>
                  <span className="text-xs text-slate-400 font-medium">{item.fileSize}</span>
                </div>
              </div>
            </div>
            <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${item.textColor}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// MAIN ROADMAP SECTION
// ==========================================
export default function RoadmapSection() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [activePhase, setActivePhase] = useState<Phase | null>(null);

  const toggleCompleted = (id: string) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 px-4">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Learning Path
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            QA Engineering Roadmap
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            A structured path from manual testing fundamentals to AI-powered quality engineering.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 p-4 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-white">Your Progress</span>
            <span className="text-sm text-slate-400">{completed.length} / {phases.length} phases</span>
          </div>
          <div className="h-2 rounded-full bg-white/10">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-700"
              style={{ width: `${(completed.length / phases.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Phase Cards */}
        <div className="relative space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HeavyGlassCard
                item={phase}
                isCompleted={completed.includes(phase.id)}
                onToggle={() => toggleCompleted(phase.id)}
                onView={() => setActivePhase(phase)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {activePhase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActivePhase(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-white/10 overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className={`font-semibold text-sm ${activePhase.textColor}`}>{activePhase.filename}</span>
                <button
                  onClick={() => setActivePhase(null)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="h-[70vh]">
                <iframe src={activePhase.pdf} className="w-full h-full" title={activePhase.filename} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}