export default function About() {
  return (
    <section id="about" className="py-12 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">About</h2>
        <div className="prose prose-slate max-w-none space-y-4 text-slate-700 leading-relaxed">
          <p>
            I am currently working as a Quantum Automation Engineer at{" "}
            <a
              href="https://www.quobly.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Quobly
            </a>
            , a French startup developing Quantum Computing platforms based on classical
            microelectronics.
          </p>
          <p>
            Before that, I completed a PhD at the{" "}
            <a
              href="https://icb.u-bourgogne.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Laboratoire Interdisciplinaire Carnot de Bourgogne
            </a>{" "}
            (ICB, UMR CNRS 6303, Dijon, France) and at the{" "}
            <a
              href="http://www.ipr.sci.am"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Institute for Physical Research
            </a>{" "}
            of the National Academy of Sciences of Armenia (IPR-NAS, Ashtarak), under the
            supervision of{" "}
            <a href="https://www.researchgate.net/profile/Claude-Leroy" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              Prof. Claude Leroy
            </a>
            ,{" "}
            <a href="https://scholar.google.com/citations?user=eEtcfroAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              Prof. Aram Papoyan
            </a>{" "}
            and{" "}
            <a href="https://scholar.google.com/citations?user=K90_NvMAAAAJ&hl=ru" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              Dr. Armen Sargsyan
            </a>
            . My research focused on quantum computing and atomic physics — in particular
            sub-Doppler spectroscopy, magnetometry with vapor cells, and EIT resonances in
            alkali metals.
          </p>
          <p>
            I then held a postdoctoral position in the{" "}
            <a href="https://www.quantenbit.physik.uni-mainz.de" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              Quantenbit AG team
            </a>{" "}
            led by Prof. Dr. Ferdinand Schmidt-Kaler at Johannes Gutenberg University Mainz, Germany.
          </p>
          <p>
            During my PhD, I served as a teaching assistant at Université de Bourgogne,
            teaching geometrical and wave optics, electromagnetism, and fluid
            mechanics/biophysics to BSc students. I have also been a reviewer for{" "}
            <em>New Journal of Physics</em> and <em>Optics Letters</em>.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-sm">
            <a href="/docs/136608_MOMIER_2024_archivage-3.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              PhD thesis
            </a>
            <a href="/docs/main_phd_thesis_slides.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              PhD defense slides
            </a>
            <a href="/docs/main_master_thesis_final.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              Master thesis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
