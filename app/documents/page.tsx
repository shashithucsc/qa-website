import PDFSection from "@/components/PDFSection";

export const metadata = {
  title: "Library · The QA Engineering Archive",
  description: "Curated PDFs and comprehensive guides for every stage of your QA journey.",
};

export default function DocumentsPage() {
  return (
    <main className="bg-slate-950 min-h-screen pt-16">
      <PDFSection />
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-slate-950 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
        <p className="font-serif text-slate-400">The QA Engineering Archive</p>
        <p>© {new Date().getFullYear()} · Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
