import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">Personal projects</h2>
        <ul className="space-y-6">
          {projects.map((project) => (
            <li key={project.title} className="text-sm text-slate-700">
              <h3 className="font-medium text-slate-900 mb-1">{project.title}</h3>
              <p className="leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-2">
                {project.links.map((link) => (
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
