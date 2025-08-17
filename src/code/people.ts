export interface Person {
  name: string;
  email?: string;
  photo?: string;
  tags?: string[];
  homepage?: string;
}

export const martin_maly: Person = {
  name: "Martin Malý",
  email: "martin.maly@mrc-lmb.cam.ac.uk",
  photo: "martin_maly.jpg",
  tags: ["CCP4", "Organiser", "Python", "Crystallography", "Interfaces", "Refinement"],
};

export const lucrezia_catapano: Person = {
  name: "Lucrezia Catapano",
  photo: "lucrezia_catapano.jpg",
  tags: ["CCP4", "Organiser", "Model Building", "Python", "Refinement"],
};

export const agnel_joseph: Person = {
  name: "Agnel Joseph",
  photo: "agnel_joseph.jpg",
  tags: ["CCP-EM", "Organiser", "Cryo-EM", "Validation", "Python"],
};

export const garib_murshudov: Person = {
  name: "Garib Murshudov",
  photo: "garib_murshudov.jpg",
  tags: ["CCP4", "Organiser", "Refinement"],
};

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

export const david_waterman: Person = {
  name: "David Waterman",
  photo: "david_waterman.jpg",
  tags: ["CCP4", "Data Processing"],
  homepage:
    "https://www.rc-harwell.ac.uk/who-we-are/researchers/david-waterman",
};

export const jola_mirecka: Person = {
  name: "Jola Mirecka",
  photo: "jola_mirecka.jpg",
  tags: ["CCP-EM", "Cryo-EM"],
  homepage: "https://www.ccpem.ac.uk/people/jola-mirecka/",
};

export const lucy_schofield: Person = {
  name: "Lucy Schofield",
  email: "lcs551@york.ac.uk",
  photo: "lucy_schofield.jpg",
  tags: ["CCP4", "EDI", "Sugars"],
  homepage: undefined,
};

export const maria_fando: Person = {
  name: "Maria Fando",
  photo: "maria_fando.png",
  tags: ["CCP4", "Organiser", "Crystallography", "Interfaces", "Molecular Replacement"],
  homepage: "https://www.rc-harwell.ac.uk/who-we-are/researchers/maria-fando",
};

export const paul_bond: Person = {
  name: "Paul Bond",
  email: "paul.bond@york.ac.uk",
  photo: "paul_bond.jpg",
  tags: ["CCP4", "Interfaces", "Model Building", "Python"],
  homepage: "https://paulsbond.co.uk",
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

export const jarmila_duskova: Person = {
  name: "Jarmila Dušková",
  photo: "jarmila_duskova.jpg",
  tags: ["Organiser", "Crystallography"],
};

export const radomir_kuzel: Person = {
  name: "Radomír Kužel",
  photo: "radomir_kuzel.jpg",
  tags: ["CSCA", "Organiser", "Crystallography"],
};

export const jindrich_hasek: Person = {
  name: "Jindřich Hašek",
  photo: "jindrich_hasek.jpg",
  tags: ["CSCA", "Organiser", "Crystallography"],
};

export const people: Person[] = [
  martin_maly,
  lucrezia_catapano,
  agnel_joseph,
  garib_murshudov,
  andrey_lebedev,
  david_waterman,
  jola_mirecka,
  lucy_schofield,
  maria_fando,
  paul_bond,
  paul_emsley,
  ronan_keegan,
  jarmila_duskova,
  radomir_kuzel,
  jindrich_hasek,
];
