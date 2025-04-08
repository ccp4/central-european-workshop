import {
  atrium,
  cafeteria,
  computer_room,
  lecture_theatre,
  Location,
} from "./locations";
import {
  amy_thompson,
  andrey_lebedev,
  anna_warren,
  chris_hill,
  david_waterman,
  jamie_blaza,
  jon_agirre,
  jordan_dialpuri,
  kathryn_cowtan,
  lucy_schofield,
  maria_fando,
  paul_bond,
  Person,
  ronan_keegan,
  sam_horrell,
  tom_davies,
} from "./people";

interface Session {
  title: string;
  type: "Lecture" | "Practical" | "Break" | "Other";
  time: string;
  speaker?: Person;
  location?: Location;
}

interface Day {
  title: string;
  sessions: Session[];
}

const day1: Day = {
  title: "Day 1 - Thu 31st Jul",
  sessions: [
    {
      title: "Introduction",
      type: "Lecture",
      time: "14:30",
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Break", time: "15:00", location: atrium },
    {
      title: "Student talks",
      type: "Lecture",
      time: "15:30",
      location: lecture_theatre,
    },
    {
      title: "Dinner (cafeteria)",
      type: "Break",
      time: "18:00",
      location: cafeteria,
    },
    { title: "City tour", type: "Other", time: "19:30" },
  ],
};

const day2: Day = {
  title: "Day 2 - Fri 1st Aug",
  sessions: [
    {
      title: "Crystallography roadmap",
      type: "Lecture",
      time: "09:00",
      speaker: chris_hill,
      location: lecture_theatre,
    },
    {
      title: "Cryo-EM roadmap",
      type: "Lecture",
      time: "10:00",
      speaker: jamie_blaza,
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Break", time: "10:45", location: atrium },
    {
      title: "Constructs / expression / purification",
      type: "Lecture",
      time: "11:15",
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Break", time: "12:00", location: atrium },
    {
      title: "Crystallisation / harvesting",
      type: "Lecture",
      time: "13:00",
      location: lecture_theatre,
    },
    {
      title: "CCP4 Cloud workshop",
      type: "Practical",
      time: "14:00",
      speaker: maria_fando,
      location: computer_room,
    },
    { title: "Coffee", type: "Break", time: "15:30", location: atrium },
    {
      title: "AlphaFold",
      type: "Lecture",
      time: "16:00",
      speaker: jon_agirre,
      location: lecture_theatre,
    },
    {
      title: "Symmetry",
      type: "Lecture",
      time: "17:15",
      speaker: chris_hill,
      location: lecture_theatre,
    },
    {
      title: "Dinner (street food)",
      type: "Break",
      time: "18:00",
      location: cafeteria,
    },
    { title: "Ceilidh", type: "Other", time: "19:30", location: cafeteria },
  ],
};

const day3: Day = {
  title: "Day 3 - Sat 2nd Aug",
  sessions: [
    {
      title: "Diffraction theory",
      type: "Lecture",
      time: "09:00",
      speaker: kathryn_cowtan,
      location: lecture_theatre,
    },
    {
      title: "Data collection - experimental strategies",
      type: "Lecture",
      time: "10:00",
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Break", time: "10:45", location: atrium },
    {
      title: "Scaling, merging, resolution limit",
      type: "Lecture",
      time: "11:15",
      speaker: amy_thompson,
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Break", time: "12:00", location: atrium },
    {
      title: "DIALS",
      type: "Lecture",
      time: "13:00",
      speaker: david_waterman,
      location: lecture_theatre,
    },
    {
      title: "DIALS / DUI workshop",
      type: "Practical",
      time: "14:00",
      speaker: david_waterman,
      location: computer_room,
    },
    { title: "Coffee", type: "Break", time: "15:30", location: atrium },
    {
      title: "Serial crystallography",
      type: "Lecture",
      time: "16:00",
      location: lecture_theatre,
    },
    {
      title: "Multi-dataset DIALS / xia2.multiplex",
      type: "Practical",
      time: "17:00",
      speaker: amy_thompson,
      location: computer_room,
    },
    {
      title: "Dinner (cafeteria)",
      type: "Break",
      time: "18:00",
      location: cafeteria,
    },
  ],
};

const day4: Day = {
  title: "Day 4 - Sun 3rd Aug",
  sessions: [
    {
      title: "EM map manipulation, post-processing, sharpening",
      type: "Lecture",
      time: "09:00",
      location: lecture_theatre,
    },
    {
      title: "EM map pathologies",
      type: "Lecture",
      time: "10:00",
      speaker: jamie_blaza,
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Break", time: "10:45", location: atrium },
    {
      title: "CCP-EM tools",
      type: "Lecture",
      time: "11:15",
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Break", time: "12:00", location: atrium },
    {
      title: "Data pathologies",
      type: "Lecture",
      time: "13:00",
      speaker: andrey_lebedev,
      location: lecture_theatre,
    },
    {
      title: "Scaling / merging workshop",
      type: "Practical",
      time: "14:00",
      location: computer_room,
    },
    { title: "Coffee", type: "Break", time: "15:30", location: atrium },
    {
      title: "CCP-EM Doppio workshop",
      type: "Practical",
      time: "16:00",
      location: computer_room,
    },
    {
      title: "Dinner (cafeteria)",
      type: "Break",
      time: "18:00",
      location: cafeteria,
    },
  ],
};

const day5: Day = {
  title: "Day 5 - Mon 4th Aug",
  sessions: [
    {
      title: "Synchrotrons",
      type: "Lecture",
      time: "09:00",
      location: lecture_theatre,
    },
    {
      title: "I23 - SAD / experimental phasing",
      type: "Lecture",
      time: "10:00",
      speaker: sam_horrell,
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Break", time: "10:45", location: atrium },
    {
      title: "Nanofocus / microfocus / VMXm",
      type: "Lecture",
      time: "11:15",
      speaker: anna_warren,
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Break", time: "12:00", location: atrium },
    { title: "Free time", type: "Other", time: "13:00" },
  ],
};

const day6: Day = {
  title: "Day 6 - Tue 5th Aug",
  sessions: [
    {
      title: "Molecular replacement theory",
      type: "Lecture",
      time: "09:00",
      location: lecture_theatre,
    },
    {
      title: "Practical molecular replacement",
      type: "Lecture",
      time: "10:00",
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Break", time: "10:45", location: atrium },
    {
      title: "MR for EM / EMplacement",
      type: "Lecture",
      time: "11:15",
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Break", time: "12:00", location: atrium },
    {
      title: "Molecular replacement workshop",
      type: "Practical",
      time: "13:00",
      speaker: ronan_keegan,
      location: computer_room,
    },
    { title: "Coffee", type: "Break", time: "15:30", location: atrium },
    {
      title: "Introduction to Coot (high resolution) workshop",
      type: "Practical",
      time: "16:00",
      speaker: paul_bond,
      location: computer_room,
    },
    {
      title: "Dinner (pizza)",
      type: "Break",
      time: "18:00",
      location: cafeteria,
    },
    { title: "Quiz", type: "Other", time: "19:30" },
  ],
};

const day7: Day = {
  title: "Day 7 - Wed 6th Aug",
  sessions: [
    {
      title: "Automated model building",
      type: "Lecture",
      time: "09:00",
      speaker: paul_bond,
      location: lecture_theatre,
    },
    {
      title: "Refinement in X-ray and EM",
      type: "Lecture",
      time: "10:00",
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Break", time: "10:45", location: atrium },
    {
      title: "Ligand modelling, restraints",
      type: "Lecture",
      time: "11:15",
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Break", time: "12:00", location: atrium },
    {
      title: "Refinement workshop",
      type: "Practical",
      time: "13:00",
      location: computer_room,
    },
    { title: "Coffee", type: "Break", time: "15:30", location: atrium },
    {
      title: "Python for structural analysis workshop",
      type: "Practical",
      time: "16:00",
    },
    {
      title: "Dinner (platters)",
      type: "Break",
      time: "18:00",
      location: cafeteria,
    },
    {
      title: "Structural biology in industry",
      type: "Lecture",
      time: "19:30",
      speaker: tom_davies,
      location: lecture_theatre,
    },
    { title: "Reception", type: "Other", time: "20:30", location: atrium },
  ],
};

const day8: Day = {
  title: "Day 8 - Thu 7th Aug",
  sessions: [
    { title: "NMR", type: "Lecture", time: "09:00", location: lecture_theatre },
    {
      title: "Spectroscopy techniques (MST, ITC, DSF)",
      type: "Lecture",
      time: "10:00",
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Break", time: "10:45", location: atrium },
    {
      title: "Electron tomography",
      type: "Lecture",
      time: "11:15",
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Break", time: "12:00", location: atrium },
    {
      title: "Coot at low resolution workshop",
      type: "Practical",
      time: "13:00",
      location: computer_room,
    },
    { title: "Coffee", type: "Break", time: "15:30", location: atrium },
    {
      title: "Moorhen workshop",
      type: "Practical",
      time: "16:00",
      location: computer_room,
    },
    {
      title: "Isolde",
      type: "Lecture",
      time: "17:15",
      location: lecture_theatre,
    },
    { title: "Conference dinner", type: "Other", time: "18:00" },
  ],
};

const day9: Day = {
  title: "Day 9 - Fri 8th Aug",
  sessions: [
    {
      title: "Protein modifications",
      type: "Lecture",
      time: "09:00",
      speaker: lucy_schofield,
      location: lecture_theatre,
    },
    {
      title: "Nucleic acids",
      type: "Lecture",
      time: "10:00",
      speaker: jordan_dialpuri,
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Break", time: "10:45", location: atrium },
    {
      title: "Validation",
      type: "Lecture",
      time: "11:15",
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Break", time: "12:00", location: atrium },
    {
      title: "Deposition",
      type: "Lecture",
      time: "13:00",
      location: lecture_theatre,
    },
    {
      title: "Careers talk",
      type: "Lecture",
      time: "14:00",
      location: lecture_theatre,
    },
    { title: "Departure", type: "Other", time: "14:45" },
  ],
};

export const days = [day1, day2, day3, day4, day5, day6, day7, day8, day9];
