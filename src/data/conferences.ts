export type ConfLink = { label: string; url: string };

export type Conference = {
  authors: string[];
  title: string;
  event: string;
  location: string;
  date: string;
  type: "Invited" | "Oral" | "Poster" | "Seminar" | "Organizing";
  prize?: string;
  links?: ConfLink[];
};

export const conferences: Conference[] = [
  {
    authors: ["R. Momier", "A. Aleksanyan", "E. Gazazyan", "A. Papoyan", "C. Leroy"],
    title: "B-field values cancelling 5S → 6P hyperfine transitions of ⁸⁵Rb and ⁸⁷Rb",
    event: "International online seminar ICB – Institute for Physical Research, NAS of Armenia",
    location: "Online",
    date: "May 7, 2020",
    type: "Seminar",
    links: [
      { label: "Slides", url: "https://momierr.github.io/docs/main_slides_seminar_IPR_2020.pdf" },
    ],
  },
  {
    authors: ["R. Momier", "C. Leroy", "A. Papoyan"],
    title: "Zeeman transitions of ²³Na in an external magnetic field",
    event: "Internal seminar, Institute for Physical Research, NAS of Armenia",
    location: "Ashtarak, Armenia",
    date: "April 16, 2021",
    type: "Seminar",
    links: [
      { label: "Slides", url: "https://momierr.github.io/docs/main_slides_seminar_IPR_160421.pdf" },
    ],
  },
  {
    authors: ["A. Aleksanyan", "R. Momier", "E. Gazazyan", "A. Papoyan", "C. Leroy"],
    title: "Alkali atom transition cancellations within magnetic field",
    event: "52nd Conference of the European Group on Atomic Systems (EGAS 52)",
    location: "Zagreb, Croatia (online)",
    date: "July 6–8, 2021",
    type: "Oral",
  },
  {
    authors: ["R. Momier", "A. Papoyan", "C. Leroy"],
    title:
      "Theoretical study of sodium D lines in a wide range of magnetic field with sub-Doppler resolution",
    event: "International Conference Laser Physics 21",
    location: "Ashtarak, Armenia",
    date: "September 21–24, 2021",
    type: "Oral",
    prize: "2nd best student presentation",
    links: [
      { label: "Slides", url: "https://momierr.github.io/docs/main_slides_lp2021_0921.pdf" },
    ],
  },
  {
    authors: ["A. Aleksanyan", "R. Momier", "E. Gazazyan", "A. Papoyan", "C. Leroy"],
    title: "Determination of the magnetic field values cancelling D1 line transitions of alkali-metal atoms",
    event: "Internal seminar, Institute for Physical Research, NAS of Armenia",
    location: "Ashtarak, Armenia",
    date: "June 2, 2022",
    type: "Seminar",
    links: [
      { label: "Slides", url: "https://momierr.github.io/docs/main_slides_seminar_IPR_02062022.pdf" },
    ],
  },
  {
    authors: [
      "R. Momier",
      "A. Aleksanyan",
      "A. Sargsyan",
      "A. Tonoyan",
      "M. Auzinsh",
      "D. Sarkisyan",
      "A. Papoyan",
      "C. Leroy",
    ],
    title: "Magnetometry with a nanometric-thin K vapor cell",
    event: "14th European Conference on Atoms, Molecules and Photons (ECAMP14)",
    location: "Vilnius, Lithuania",
    date: "June 27 – July 1, 2022",
    type: "Invited",
    links: [
      { label: "Slides", url: "https://momierr.github.io/docs/main_slides_ecamp_INV_240622.pdf" },
    ],
  },
  {
    authors: [
      "R. Momier",
      "A. Sargsyan",
      "A. Tonoyan",
      "M. Auzinsh",
      "D. Sarkisyan",
      "A. Papoyan",
      "C. Leroy",
    ],
    title: "Nanometric-Thin K Vapor Cell used as a Large-Range Magnetometer",
    event: "International Conference Laser Physics 22",
    location: "Ashtarak, Armenia",
    date: "September 14–16, 2022",
    type: "Oral",
    prize: "Best student oral presentation",
    links: [
      { label: "Slides", url: "https://momierr.github.io/docs/main_slides_lp2022_150922.pdf" },
    ],
  },
  {
    authors: ["R. Momier", "A. Sargsyan", "A. Tonoyan", "M. Auzinsh", "D. Sarkisyan", "A. Papoyan", "C. Leroy"],
    title: "Sub-Doppler spectroscopy of ³⁹K for magnetic field measurements",
    event: "54th Conference of the European Group on Atomic Systems (EGAS 54)",
    location: "Strasbourg, France",
    date: "June 18–22, 2023",
    type: "Poster",
    links: [
      { label: "Poster", url: "https://momierr.github.io/docs/poster_magnetometry_EGAS_2023.pdf" },
    ],
  },
  {
    authors: ["R. Momier", "A. Sargsyan", "A. Tonoyan", "D. Sarkisyan", "C. Leroy"],
    title: "Formation of strongly shifted EIT resonances using \"forbidden\" transitions of Cesium",
    event: "54th Conference of the European Group on Atomic Systems (EGAS 54)",
    location: "Strasbourg, France",
    date: "June 18–22, 2023",
    type: "Poster",
    links: [
      { label: "Poster", url: "https://momierr.github.io/docs/poster_EIT_EGAS_2023.pdf" },
    ],
  },
  {
    authors: ["R. Momier", "A. Sargsyan", "A. Tonoyan", "D. Sarkisyan", "C. Leroy"],
    title: "Formation of strongly shifted EIT resonances using \"forbidden\" transitions of Cesium",
    event: "XXIIè journées de l'École Doctorale Carnot-Pasteur",
    location: "Dijon, France",
    date: "June 30, 2023",
    type: "Poster",
    prize: "Best poster presentation",
    links: [
      { label: "Poster", url: "https://momierr.github.io/docs/poster_EIT_EGAS_2023.pdf" },
    ],
  },
  {
    authors: ["R. Momier", "A. Sargsyan", "A. Tonoyan", "D. Sarkisyan", "C. Leroy"],
    title: "Formation of strongly shifted EIT resonances using \"forbidden\" transitions of Cesium",
    event: "28th Colloquium on High-Resolution Molecular Spectroscopy (HRMS)",
    location: "Dijon, France",
    date: "August 29, 2023",
    type: "Poster",
    links: [
      { label: "Poster", url: "https://momierr.github.io/docs/poster_EIT_EGAS_2023.pdf" },
    ],
  },
  {
    authors: ["R. Momier", "A. Sargsyan", "A. Tonoyan", "D. Sarkisyan", "C. Leroy"],
    title: "Sub-Doppler spectroscopy of ³⁹K for magnetic field measurements",
    event: "28th Colloquium on High-Resolution Molecular Spectroscopy (HRMS)",
    location: "Dijon, France",
    date: "August 29, 2023",
    type: "Poster",
    links: [
      { label: "Poster", url: "https://momierr.github.io/docs/poster_magnetometry_EGAS_2023.pdf" },
    ],
  },
  {
    authors: [],
    title: "Member of the Local Organizing Committee",
    event: "28th Colloquium on High-Resolution Molecular Spectroscopy (HRMS 2023)",
    location: "Dijon, France",
    date: "August 2023",
    type: "Organizing",
  },
  {
    authors: ["R. Momier", "A. Sargsyan", "A. Tonoyan", "D. Sarkisyan", "C. Leroy"],
    title: "Generation of EIT resonances with ΔF = +2 transitions of Cs D₂ line",
    event: "International Conference Laser Physics 23",
    location: "Ashtarak, Armenia",
    date: "September 12–15, 2023",
    type: "Oral",
    links: [
      { label: "Slides", url: "https://momierr.github.io/docs/slides_EIT_LP2023.pdf" },
    ],
  },
];
