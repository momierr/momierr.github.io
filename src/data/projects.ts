export type ProjectLink = { label: string; url: string };

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
    {
    title: "wigxj",
    description:
      "Fast Wigner 3j, 6j, 9j symbols and Clebsch-Gordan coefficients for Python (C extension around wigxjpf, pure-Python fallback) ",
    tags: ["Python", "C", "Physics"],
    links: [
      { label: "Code", url: "https://github.com/momierr/wigxj/" },
      { label: "PyPI", url: "https://pypi.org/project/wigxj/" },
    ],
  },
  {
    title: "Home TCL dashboard",
    description:
      "A self-hosted wall dashboard of the next departures of Lyon's public transport (TCL) for my favourite stops, shown full screen on an old tablet. Real-time and GTFS timetable data from data.grandlyon.com, served by a FastAPI backend; a plain-JavaScript frontend that still runs on Firefox 68.",
    tags: ["Python", "FastAPI", "JavaScript", "GTFS", "GitHub Actions"],
    links: [
      { label: "Live demo", url: "https://momierr.github.io/home-tcl-dashboard/" },
      { label: "Code", url: "https://github.com/momierr/home-tcl-dashboard" },
      { label: "PyPI", url: "https://pypi.org/project/home-tcl-dashboard/" },
    ],
  },
];
