export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-slate-200">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          Contact:{" "}
          <a href="mailto:momier.rodolphe@gmail.com" className="hover:text-blue-700 transition-colors">
            momier.rodolphe@gmail.com
          </a>
        </p>
        <p className="text-xs text-slate-400">Updated June 2026</p>
      </div>
    </footer>
  );
}
