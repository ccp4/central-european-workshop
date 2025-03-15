export interface Person {
  name: string;
  affiliation: string;
  email?: string;
  photo?: string;
  tags?: string[];
  homepage?: string;
  scholar?: string;
}

export const amy_thompson: Person = {
  name: "Amy Thompson",
  affiliation: "Diamond Light Source",
  tags: ["Crystallography", "Data Processing", "Synchrotrons"],
  homepage: "https://www.diamond.ac.uk/Instruments/Mx/VMXi/Staff/Thompson.html",
  scholar: "bDkXYJgAAAAJ",
};

export const chris_hill: Person = {
  name: "Chris Hill",
  affiliation: "University of York",
  email: "chris.hill@york.ac.uk",
  photo: "chris_hill.jpg",
  tags: ["Cryo-EM", "Crystallography", "Organiser"],
  homepage: "https://www.york.ac.uk/biology/people/chris-hill/",
  scholar: "R-zfmDIAAAAJ",
};

export const johan_turkenburg: Person = {
  name: "Johan Turkenburg",
  affiliation: "University of York",
  email: "johan.turkenburg@york.ac.uk",
  photo: "johan_turkenburg.jpg",
  tags: ["Cryo-EM", "Crystallography", "Organiser"],
  homepage: "https://www.york.ac.uk/chemistry/people/jturkenburg/",
  scholar: "V3vxoCsAAAAJ",
};

export const jon_agirre: Person = {
  name: "Jon Agirre",
  affiliation: "University of York",
  email: "jon.agirre@york.ac.uk",
  photo: "jon_agirre.jpg",
  tags: ["CCP4", "Crystallography", "EDI", "Organiser", "Sugars", "Validation"],
  homepage:
    "https://www.york.ac.uk/chemistry/research/ysbl/people/staff/jagirre/",
  scholar: "VARecawAAAAJ",
};

export const lucy_schofield: Person = {
  name: "Lucy Schofield",
  affiliation: "University of York",
  email: "lcs551@york.ac.uk",
  photo: "lucy_schofield.jpg",
  tags: ["CCP4", "EDI", "Organiser", "Sugars"],
  scholar: "njDsN5EAAAAJ",
};

export const paul_bond: Person = {
  name: "Paul Bond",
  affiliation: "University of York",
  email: "paul.bond@york.ac.uk",
  photo: "paul_bond.jpg",
  tags: ["CCP4", "Interfaces", "Model Building", "Organiser"],
  homepage: "https://paulsbond.co.uk",
  scholar: "38FsWSAAAAAJ",
};

export const people = [
  amy_thompson,
  chris_hill,
  johan_turkenburg,
  jon_agirre,
  lucy_schofield,
  paul_bond,
];
