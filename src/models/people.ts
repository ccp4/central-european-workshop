export interface Person {
  name: string;
  affiliation: string;
  email?: string;
  photo?: string;
  tags?: string[];
  homepage?: string;
  scholar?: string;
}

export const chris_hill: Person = {
  name: "Chris Hill",
  affiliation: "University of York",
  email: "chris.hill@york.ac.uk",
  photo: "chris_hill.jpg",
  tags: ["Organiser", "Cryo-EM", "Crystallography"],
  homepage: "https://www.york.ac.uk/biology/people/chris-hill/",
  scholar: "R-zfmDIAAAAJ",
};

export const johan_turkenburg: Person = {
  name: "Johan Turkenburg",
  affiliation: "University of York",
  email: "johan.turkenburg@york.ac.uk",
  photo: "johan_turkenburg.jpg",
  tags: ["Organiser", "Cryo-EM", "Crystallography"],
  homepage: "https://www.york.ac.uk/chemistry/people/jturkenburg/",
  scholar: "V3vxoCsAAAAJ",
};

export const jon_agirre: Person = {
  name: "Jon Agirre",
  affiliation: "University of York",
  email: "jon.agirre@york.ac.uk",
  photo: "jon_agirre.jpg",
  tags: ["Organiser", "Crystallography", "Sugars", "Validation", "CCP4", "EDI"],
  homepage:
    "https://www.york.ac.uk/chemistry/research/ysbl/people/staff/jagirre/",
  scholar: "VARecawAAAAJ",
};

export const lucy_schofield: Person = {
  name: "Lucy Schofield",
  affiliation: "University of York",
  email: "lcs551@york.ac.uk",
  photo: "lucy_schofield.jpg",
  tags: ["Organiser", "Sugars", "CCP4", "EDI"],
  scholar: "njDsN5EAAAAJ",
};

export const paul_bond: Person = {
  name: "Paul Bond",
  affiliation: "University of York",
  email: "paul.bond@york.ac.uk",
  photo: "paul_bond.jpg",
  tags: ["Organiser", "Model Building", "Graphical Interfaces", "CCP4"],
  homepage: "https://paulsbond.co.uk",
  scholar: "38FsWSAAAAAJ",
};

export const people = [
  chris_hill,
  johan_turkenburg,
  jon_agirre,
  lucy_schofield,
  paul_bond,
];
