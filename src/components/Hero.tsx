import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col-reverse sm:flex-row items-start gap-10">
        <div className="flex-1">
          <h1 className="text-4xl font-light text-slate-900 mb-2">
            Dr. Rodolphe Momier
          </h1>
          <p className="text-lg text-blue-700 font-medium mb-1">
            Quantum Automation Engineer
          </p>
          <p className="text-slate-500 mb-6">
            Quobly · Grenoble, France
          </p>

          <div className="space-y-1 text-sm text-slate-600">
            <p>
              <a href="mailto:momier.rodolphe@gmail.com" className="hover:text-blue-700 transition-colors">
                momier.rodolphe@gmail.com
              </a>
              {" / "}
              <a href="mailto:rodolphe.momier@quobly.io" className="hover:text-blue-700 transition-colors">
                rodolphe.momier@quobly.io
              </a>
            </p>
            <p className="text-slate-400">he/him</p>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://www.researchgate.net/profile/Rodolphe-Momier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-full border border-slate-300 text-slate-600 hover:border-blue-400 hover:text-blue-700 transition-colors"
            >
              ResearchGate
            </a>
            <a
              href="https://orcid.org/0000-0002-0904-3934"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-full border border-slate-300 text-slate-600 hover:border-blue-400 hover:text-blue-700 transition-colors"
            >
              ORCID
            </a>
            <a
              href="/docs/CV_MOMIER.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
            >
              CV (FR)
            </a>
          </div>
        </div>

        <div className="sm:w-44 sm:flex-none">
          <Image
            src="/images/rm_picture.jpeg"
            alt="Rodolphe Momier"
            width={176}
            height={176}
            className="rounded-lg object-cover w-36 sm:w-44"
            priority
          />
        </div>
      </div>
    </section>
  );
}
