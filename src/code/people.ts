export interface Person {
  name: string;
  email?: string;
  photo?: string;
  tags?: string[];
  homepage?: string;
}

export const isabel_uson: Person = {
  name: "Isabel Usón",
  email: "iufcri@ibmb.csic.es",
  photo: "isabel_uson.jpg",
  homepage:
    "https://www.icrea.cat/community/icreas/17430/isabel-uson-finkenzeller/",
  tags: ["Molecular Replacement", "Model Building", "Refinement", "Validation"],
};

export const keitaro_yamashita: Person = {
  name: "Keitaro Yamashita",
  email: "keitaro-yamashita@g.ecc.u-tokyo.ac.jp",
  photo: "keitaro_yamashita.jpg",
  homepage:
    "https://www.rcast.u-tokyo.ac.jp/en/research/people/staff-yamashita_keitaro.html",
  tags: ["Model Building", "Refinement", "Validation", "Python"],
};

export const kay_diederichs: Person = {
  name: "Kay Diederichs",
  email: "kay.diederichs@uni-konstanz.de",
  photo: "kay_diederichs.png",
  homepage: "https://www.biologie.uni-konstanz.de/diederichs/",
  tags: ["Data Processing", "Refinement"],
};

export const terezia_kovalova: Person = {
  name: "Terézia Kovaľová",
  photo: "terezia_kovalova.jpg",
  tags: ["Model Building", "Refinement"],
};

export const paul_bond: Person = {
  name: "Paul Bond",
  email: "paul.bond@york.ac.uk",
  photo: "paul_bond.jpg",
  tags: ["CCP4", "Interfaces", "Model Building", "Python"],
  homepage: "https://paulsbond.co.uk",
};

export const david_waterman: Person = {
  name: "David Waterman",
  photo: "david_waterman.jpg",
  tags: ["CCP4", "Data Processing"],
  homepage:
    "https://www.rc-harwell.ac.uk/who-we-are/researchers/david-waterman",
};

export const lucy_schofield: Person = {
  name: "Lucy Schofield",
  email: "lcs551@york.ac.uk",
  photo: "lucy_schofield.jpg",
  tags: ["CCP4", "EDI", "Glycans", "Bioinformatics", "Python"],
  homepage: undefined,
};

export const jiri_cerny: Person = {
  name: "Jiří Černý",
  photo: "jiri_cerny.jpg",
  tags: ["Bioinformatics", "Nucleic acids", "Python"],
};

export const jan_dohnalek: Person = {
  name: "Jan Dohnálek",
  photo: "jan_dohnalek.jpg",
  tags: ["Data Processing", "Refinement", "Validation"],
};

export const petr_kolenko: Person = {
  name: "Petr Kolenko",
  photo: "petr_kolenko.png",
  tags: ["Data Processing", "Refinement", "Validation"],
};

export const martin_maly: Person = {
  name: "Martin Malý",
  email: "martin.maly@mrc-lmb.cam.ac.uk",
  photo: "martin_maly.jpg",
  tags: ["CCP4", "Organiser", "Python", "Interfaces", "Refinement"],
};

export const lucrezia_catapano: Person = {
  name: "Lucrezia Catapano",
  email: "lucrezia@mrc-lmb.cam.ac.uk",
  photo: "lucrezia_catapano.jpg",
  tags: ["CCP4", "Organiser", "Model Building", "Python", "Refinement"],
};

export const maria_fando: Person = {
  name: "Maria Fando",
  email: "maria.fando@stfc.ac.uk",
  photo: "maria_fando.png",
  tags: ["CCP4", "Organiser", "Interfaces", "Molecular Replacement"],
  homepage: "https://www.rc-harwell.ac.uk/who-we-are/researchers/maria-fando",
};

export const agnel_joseph: Person = {
  name: "Agnel Joseph",
  photo: "agnel_joseph.jpg",
  tags: ["CCP-EM", "Organiser", "Validation", "Python"],
};

export const garib_murshudov: Person = {
  name: "Garib Murshudov",
  photo: "garib_murshudov.jpg",
  tags: ["CCP4", "Organiser", "Refinement", "Hide"],
};

export const jarmila_duskova: Person = {
  name: "Jarmila Dušková",
  email: "duskovaj@ibt.cas.cz",
  photo: "jarmila_duskova.png",
  tags: ["Organiser", "Hide"],
};

export const radomir_kuzel: Person = {
  name: "Radomír Kužel",
  photo: "radomir_kuzel.jpg",
  tags: ["CSCA", "Organiser", "Hide"],
};

export const jindrich_hasek: Person = {
  name: "Jindřich Hašek",
  photo: "jindrich_hasek.jpg",
  tags: ["CSCA", "Organiser", "Hide"],
};

{/*
export const andrey_lebedev: Person = {
  name: "Andrey Lebedev",
  photo: "andrey_lebedev.jpg",
  tags: [
    "CCP4",
    "Crystallography",
    "Data Pathologies",
    "Data Processing",
    "Deposition",
    "Model Building",
    "Molecular Replacement",
    "Refinement",
    "Symmetry",
  ],
  homepage:
    "https://www.rc-harwell.ac.uk/who-we-are/researchers/andrey-lebedev",
};

export const jola_mirecka: Person = {
  name: "Jola Mirecka",
  photo: "jola_mirecka.jpg",
  tags: ["CCP-EM"],
  homepage: "https://www.ccpem.ac.uk/people/jola-mirecka/",
};

export const paul_emsley: Person = {
  name: "Paul Emsley",
  photo: "paul_emsley.jpg",
  tags: ["Model Building", "Refinement"],
  homepage: "https://en.wikipedia.org/wiki/Paul_Emsley_(crystallographer)",
};

export const ronan_keegan: Person = {
  name: "Ronan Keegan",
  tags: ["CCP4", "Crystallography", "Molecular Replacement"],
  homepage: "https://www.rc-harwell.ac.uk/who-we-are/researchers/ronan-keegan",
};
*/}

export const people: Person[] = [
  isabel_uson,
  keitaro_yamashita,
  kay_diederichs,
  terezia_kovalova,
  paul_bond,
  david_waterman,
  lucy_schofield,
  jiri_cerny,
  jan_dohnalek,
  petr_kolenko,
  martin_maly,
  lucrezia_catapano,
  maria_fando,
  agnel_joseph,
  garib_murshudov,
  jarmila_duskova,
  radomir_kuzel,
  jindrich_hasek,
];
