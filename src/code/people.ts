export interface Person {
  name: string;
  email?: string;
  photo?: string;
  tags?: string[];
  homepage?: string;
}

export const amy_thompson: Person = {
  name: "Amy Thompson",
  tags: ["Crystallography", "Data Processing", "Synchrotrons"],
  homepage: "https://www.diamond.ac.uk/Instruments/Mx/VMXi/Staff/Thompson.html",
};

export const andrey_lebedev: Person = {
  name: "Andrey Lebedev",
  tags: [
    "CCP4",
    "Crystallography",
    "Data Processing",
    "Data Pathologies",
    "Interfaces",
    "Molecular Replacement",
    "Refinement",
    "Symmetry",
  ],
  homepage:
    "https://www.rc-harwell.ac.uk/who-we-are/researchers/andrey-lebedev",
};

export const anna_warren: Person = {
  name: "Anna Warren",
  tags: ["Crystallography", "Data Collection", "Synchrotrons"],
  homepage: "https://www.diamond.ac.uk/Instruments/Mx/VMXm/Staff/Warren.html",
};

export const chris_hill: Person = {
  name: "Chris Hill",
  email: "chris.hill@york.ac.uk",
  photo: "chris_hill.jpg",
  tags: ["Cryo-EM", "Crystallography", "Organiser"],
  homepage: "https://www.york.ac.uk/biology/people/chris-hill/",
};

export const david_waterman: Person = {
  name: "David Waterman",
  tags: ["CCP4", "Crystallography", "Data Processing"],
  homepage:
    "https://www.rc-harwell.ac.uk/who-we-are/researchers/david-waterman",
};

export const jamie_blaza: Person = {
  name: "Jamie Blaza",
  tags: ["Cryo-EM"],
  email: "https://www.york.ac.uk/chemistry/people/jblaza/",
};

export const joel_greer: Person = {
  name: "Joel Greer",
  tags: ["CCP-EM", "Cryo-EM"],
  homepage: "https://www.ccpem.ac.uk/people/joel-greer/",
};

export const johan_turkenburg: Person = {
  name: "Johan Turkenburg",
  email: "johan.turkenburg@york.ac.uk",
  photo: "johan_turkenburg.jpg",
  tags: ["Cryo-EM", "Crystallography", "Organiser"],
  homepage: "https://www.york.ac.uk/chemistry/people/jturkenburg/",
};

export const jola_mirecka: Person = {
  name: "Jola Mirecka",
  tags: ["CCP-EM", "Cryo-EM"],
  homepage: "https://www.ccpem.ac.uk/people/jola-mirecka/",
};

export const jon_agirre: Person = {
  name: "Jon Agirre",
  email: "jon.agirre@york.ac.uk",
  photo: "jon_agirre.jpg",
  tags: ["CCP4", "Crystallography", "EDI", "Organiser", "Sugars", "Validation"],
  homepage:
    "https://www.york.ac.uk/chemistry/research/ysbl/people/staff/jagirre/",
};

export const jordan_dialpuri: Person = {
  name: "Jordan Dialpuri",
  tags: ["Model Building", "Nucleic Acids", "Sugars"],
  homepage: "https://jordandialpuri.co.uk/",
};

export const kathryn_cowtan: Person = {
  name: "Kathryn Cowtan",
  tags: ["CCP4", "Crystallography", "Model Building"],
  homepage: "https://www.york.ac.uk/chemistry/people/kcowtan/",
};

export const lucy_schofield: Person = {
  name: "Lucy Schofield",
  email: "lcs551@york.ac.uk",
  photo: "lucy_schofield.jpg",
  tags: ["CCP4", "EDI", "Organiser", "Sugars"],
};

export const maria_fando: Person = {
  name: "Maria Fando",
  tags: ["CCP4", "Crystallography", "Interfaces"],
  homepage: "https://www.rc-harwell.ac.uk/who-we-are/researchers/maria-fando",
};

export const paul_bond: Person = {
  name: "Paul Bond",
  email: "paul.bond@york.ac.uk",
  photo: "paul_bond.jpg",
  tags: ["CCP4", "Interfaces", "Model Building", "Organiser"],
  homepage: "https://paulsbond.co.uk",
};

export const rob_nicholls: Person = {
  name: "Rob Nicholls",
  tags: [
    "CCP-EM",
    "CCP4",
    "Cryo-EM",
    "Crystallography",
    "Interfaces",
    "Model Building",
    "Refinement",
  ],
  homepage: "https://www.ccpem.ac.uk/people/rob-nicholls/",
};

export const ronan_keegan: Person = {
  name: "Ronan Keegan",
  tags: ["CCP4", "Crystallography", "Molecular Replacement"],
  homepage: "https://www.rc-harwell.ac.uk/who-we-are/researchers/ronan-keegan",
};

export const sam_horrell: Person = {
  name: "Sam Horrell",
  tags: ["Crystallography", "Data Collection", "Synchrotrons"],
  homepage: "https://www.imperial.ac.uk/x-ray-crystallography/",
};

export const tom_davies: Person = {
  name: "Tom Davies",
  tags: ["Drug Discovery"],
};

export const people: Person[] = [
  amy_thompson,
  andrey_lebedev,
  anna_warren,
  chris_hill,
  david_waterman,
  jamie_blaza,
  joel_greer,
  johan_turkenburg,
  jola_mirecka,
  jon_agirre,
  jordan_dialpuri,
  kathryn_cowtan,
  lucy_schofield,
  maria_fando,
  paul_bond,
  rob_nicholls,
  ronan_keegan,
  sam_horrell,
  tom_davies,
];
