export type PubLink = { label: string; url: string };

export type Publication = {
  authors: string[];
  title: string;
  journal: string;
  details: string; // volume, issue, pages, year
  links: PubLink[];
};

// Authors list: "R. Momier" is highlighted (underlined) in the UI
export const publications: Publication[] = [
  {
    authors: ["A. Sargsyan", "R. Momier", "D. Sarkisyan"],
    title:
      "Doppler-free Selective Reflection spectroscopy of the 6s²S₁/₂ → 7p²P₃/₂ transition of Cesium using a nanofabricated vapor cell",
    journal: "J. Phys. B: At. Mol. Opt. Phys.",
    details: "vol. 58 (2025), p. 195001",
    links: [
      { label: "ArXiV", url: "https://arxiv.org/abs/2501.11548" },
    ],
  },
  {
    authors: ["A. Sargsyan", "R. Momier", "C. Leroy", "D. Sarkisyan"],
    title:
      "Influence of buffer gas on the formation of N-resonances in rubidium vapors",
    journal: "Spectrochim Acta B",
    details: "vol. 221 (2024), p. 107051",
    links: [
      {
        label: "Elsevier (OA)",
        url: "https://www.sciencedirect.com/science/article/pii/S0584854724001952",
      },
    ],
  },
  {
    authors: ["R. Momier", "A. Sargsyan", "A. Tonoyan", "C. Leroy", "D. Sarkisyan"],
    title:
      "Micrometric-Thin Cell Filled with Rb Vapor for High-Resolution Atomic Spectroscopy",
    journal: "Opt. Mem. Neural Networks",
    details: "vol. 32, iss. S3 (2023), pp. 349–355",
    links: [
      {
        label: "Springer",
        url: "https://link.springer.com/article/10.3103/S1060992X23070135",
      },
    ],
  },
  {
    authors: ["A. Tonoyan", "A. Sargsyan", "R. Momier", "C. Leroy", "D. Sarkisyan"],
    title:
      "Formation of Narrow Atomic Lines of Rb in the UV Region Using a Magnetic Field",
    journal: "Opt. Mem. Neural Networks",
    details: "vol. 32, iss. S3 (2023), pp. 343–348",
    links: [
      {
        label: "Springer",
        url: "https://link.springer.com/article/10.3103/S1060992X23070196",
      },
      { label: "ArXiV", url: "https://arxiv.org/abs/2305.05174" },
    ],
  },
  {
    authors: ["A. Sargsyan", "R. Momier", "C. Leroy", "D. Sarkisyan"],
    title:
      "Competing van der Waals and Dipole-Dipole interactions in optical nanocells at thicknesses below 100 nm",
    journal: "Physics Letters A",
    details: "vol. 483 (2023), p. 129069",
    links: [
      {
        label: "Elsevier",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0375960123004498",
      },
    ],
  },
  {
    authors: ["A. Sargsyan", "A. Tonoyan", "R. Momier", "C. Leroy", "D. Sarkisyan"],
    title:
      "Formation of strongly shifted EIT resonances using \"forbidden\" transitions of Cesium",
    journal: "J. Quant. Spectrosc. Radiat. Transfer",
    details: "vol. 303 (2023), p. 108582",
    links: [
      {
        label: "Elsevier",
        url: "https://www.sciencedirect.com/science/article/pii/S0022407323001000",
      },
      { label: "ArXiV", url: "https://arxiv.org/abs/2007.12279" },
    ],
  },
  {
    authors: ["A. Sargsyan", "R. Momier", "C. Leroy", "D. Sarkisyan"],
    title:
      "Saturated absorption used in potassium microcells for magnetic field sensing",
    journal: "Laser Physics",
    details: "vol. 32 (2022), p. 105701",
    links: [
      {
        label: "IOP",
        url: "https://iopscience.iop.org/article/10.1088/1555-6611/ac8c42",
      },
      { label: "ArXiV", url: "https://arxiv.org/abs/2207.02703" },
    ],
  },
  {
    authors: [
      "M. Auzinsh",
      "A. Sargsyan",
      "A. Tonoyan",
      "C. Leroy",
      "R. Momier",
      "D. Sarkisyan",
      "A. Papoyan",
    ],
    title: "Wide range linear magnetometer based on a sub-microsized K vapor cell",
    journal: "Applied Optics",
    details: "vol. 61, iss. 19 (2022), pp. 5749–5754",
    links: [
      {
        label: "Optica",
        url: "https://opg.optica.org/ao/abstract.cfm?uri=ao-61-19-5749",
      },
      { label: "ArXiV", url: "https://arxiv.org/abs/2203.11553" },
    ],
  },
  {
    authors: ["A. Aleksanyan", "R. Momier", "E. Gazazyan", "A. Papoyan", "C. Leroy"],
    title:
      "Cancellation of D₁ line transitions of alkali-metal atoms by magnetic-field values",
    journal: "Physical Review A",
    details: "vol. 105 (2022), p. 042810",
    links: [
      {
        label: "APS",
        url: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.105.042810",
      },
      { label: "ArXiV", url: "https://arxiv.org/abs/2008.03581" },
    ],
  },
  {
    authors: ["A. Sargsyan", "A. Tonoyan", "R. Momier", "C. Leroy", "D. Sarkisyan"],
    title:
      "Dominant Magnetically Induced Transitions in alkali metal atoms with nuclear spin 3/2",
    journal: "J. Opt. Soc. Am. B",
    details: "vol. 39, iss. 4 (2022), pp. 973–978",
    links: [
      {
        label: "Optica",
        url: "https://opg.optica.org/josab/fulltext.cfm?uri=josab-39-4-973&id=470140",
      },
      { label: "ArXiV", url: "https://arxiv.org/abs/2112.07351" },
    ],
  },
  {
    authors: ["R. Momier", "A. Papoyan", "C. Leroy"],
    title:
      "Sub-Doppler spectra of sodium D lines in a wide range of magnetic field: Theoretical study",
    journal: "J. Quant. Spectrosc. Radiat. Transfer",
    details: "vol. 272 (2021), p. 107780",
    links: [
      {
        label: "Elsevier",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0022407321002739",
      },
      { label: "ArXiV", url: "https://arxiv.org/abs/2104.14896" },
    ],
  },
  {
    authors: ["A. Sargsyan", "R. Momier", "A. Papoyan", "D. Sarkisyan"],
    title:
      "Sub-Doppler spectroscopy in a 400 nm Cs atomic vapor column at room temperature",
    journal: "J. Exp. Theor. Phys.",
    details: "vol. 133, iss. 4 (2021), pp. 404–410",
    links: [
      {
        label: "Springer",
        url: "https://link.springer.com/article/10.1134/S1063776121100113",
      },
    ],
  },
  {
    authors: ["A. Aleksanyan", "R. Momier", "E. Gazazyan", "A. Papoyan", "C. Leroy"],
    title:
      "Transition cancellations of ⁸⁷Rb and ⁸⁵Rb atoms in a magnetic field",
    journal: "J. Opt. Soc. Am. B",
    details: "vol. 37, iss. 11 (2020), pp. 3504–3514",
    links: [
      {
        label: "Optica",
        url: "https://opg.optica.org/josab/fulltext.cfm?uri=josab-37-11-3504&id=442027",
      },
      { label: "ArXiV", url: "https://arxiv.org/abs/2007.11484" },
    ],
  },
  {
    authors: ["R. Momier", "A. Aleksanyan", "E. Gazazyan", "A. Papoyan", "C. Leroy"],
    title:
      "New standard magnetic field values determined by cancellations of ⁸⁵Rb and ⁸⁷Rb atomic vapors 5S → 6P transitions",
    journal: "J. Quant. Spectrosc. Radiat. Transfer",
    details: "vol. 257 (2020), p. 107371",
    links: [
      {
        label: "Elsevier",
        url: "https://www.sciencedirect.com/science/article/pii/S0022407320306312",
      },
      { label: "ArXiV", url: "https://arxiv.org/abs/2007.12279" },
    ],
  },
];
