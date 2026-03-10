import OtherSection from "@/components/OtherSection";

export const metadata = {
  title: "Other Resources · The QA Engineering Archive",
  description: "ISTQB news, certification resources, and official updates for QA professionals.",
};

export default function OtherPage() {
  return (
    <main className="bg-slate-950 min-h-screen pt-16">
      <OtherSection />
      <footer className="relative border-t border-white/5 bg-slate-950 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
          <p className="font-serif text-slate-400">The QA Engineering Archive</p>
          <p>© {new Date().getFullYear()} · Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
