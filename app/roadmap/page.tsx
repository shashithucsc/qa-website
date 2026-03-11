import RoadmapSection from "@/components/RoadmapSection";

export const metadata = {
  title: "Roadmap · The QA Engineering Archive",
  description: "A structured learning path from QA foundations to AI-driven testing.",
};

export default function RoadmapPage() {
  return (
    <main className="bg-slate-950 min-h-screen pt-16">
      <RoadmapSection />
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-slate-950 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
        <p className="font-serif text-slate-400">The QA Engineering Archive</p>
        <p>© {new Date().getFullYear()} · Shashith Rashmika</p>
      </div>
    </footer>
  );
}
