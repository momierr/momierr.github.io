import { conferences } from "@/data/conferences";

const SELF = "R. Momier";

function AuthorList({ authors }: { authors: string[] }) {
  if (authors.length === 0) return null;
  return (
    <span>
      {authors.map((a, i) => (
        <span key={i}>
          {i > 0 && ", "}
          {a === SELF ? <span className="underline font-medium">{a}</span> : a}
        </span>
      ))}
      .{" "}
    </span>
  );
}

const typeBadge: Record<string, string> = {
  Invited: "bg-amber-100 text-amber-800",
  Oral: "bg-blue-100 text-blue-800",
  Poster: "bg-slate-100 text-slate-600",
  Seminar: "bg-violet-100 text-violet-700",
  Organizing: "bg-green-100 text-green-700",
};

export default function Conferences() {
  return (
    <section id="conferences" className="py-12 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">Conferences &amp; Talks</h2>
        <ul className="space-y-5">
          {conferences.map((conf, i) => (
            <li key={i} className="text-sm text-slate-700">
              <div className="flex flex-wrap items-start gap-2 mb-1">
                <span
                  className={`text-xs px-2 py-0.5 rounded font-medium shrink-0 ${typeBadge[conf.type]}`}
                >
                  {conf.type}
                </span>
                {conf.prize && (
                  <span className="text-xs px-2 py-0.5 rounded bg-yellow-50 text-yellow-700 border border-yellow-200 font-medium shrink-0">
                    🏆 {conf.prize}
                  </span>
                )}
              </div>
              <div>
                <AuthorList authors={conf.authors} />
                <span className="font-medium text-slate-900">
                  &ldquo;{conf.title}&rdquo;
                </span>
              </div>
              <div className="text-slate-500 mt-0.5">
                <em>{conf.event}</em> · {conf.location} · {conf.date}
              </div>
              {conf.links && conf.links.length > 0 && (
                <div className="flex gap-2 mt-1">
                  {conf.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
