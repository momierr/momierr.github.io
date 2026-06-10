import { publications } from "@/data/publications";

const SELF = "R. Momier";

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((a, i) => (
        <span key={i}>
          {i > 0 && ", "}
          {a === SELF ? <span className="underline font-medium">{a}</span> : a}
        </span>
      ))}
    </>
  );
}

const linkColors: Record<string, string> = {
  ArXiV: "bg-orange-100 text-orange-700 hover:bg-orange-200",
  Elsevier: "bg-blue-100 text-blue-700 hover:bg-blue-200",
  "Elsevier (OA)": "bg-blue-100 text-blue-700 hover:bg-blue-200",
  APS: "bg-red-100 text-red-700 hover:bg-red-200",
  Optica: "bg-teal-100 text-teal-700 hover:bg-teal-200",
  Springer: "bg-green-100 text-green-700 hover:bg-green-200",
  IOP: "bg-purple-100 text-purple-700 hover:bg-purple-200",
};

export default function Publications() {
  return (
    <section id="publications" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-baseline gap-3 mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Publications</h2>
          <div className="flex gap-2 text-xs">
            <a
              href="https://www.researchgate.net/profile/Rodolphe-Momier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-700 transition-colors"
            >
              ResearchGate
            </a>
            <span className="text-slate-300">·</span>
            <a
              href="https://orcid.org/0000-0002-0904-3934"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-700 transition-colors"
            >
              ORCID
            </a>
          </div>
        </div>

        <ol className="space-y-6 list-decimal list-outside ml-5">
          {publications.map((pub, i) => (
            <li key={i} className="text-sm text-slate-700 pl-1">
              <div className="mb-0.5">
                <AuthorList authors={pub.authors} />:
              </div>
              <div className="font-medium text-slate-900 mb-0.5">
                &ldquo;{pub.title}&rdquo;
              </div>
              <div className="text-slate-500 mb-1.5">
                <em>{pub.journal}</em>, {pub.details}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {pub.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs px-2 py-0.5 rounded font-medium transition-colors ${
                      linkColors[link.label] ?? "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
