import {
  atrium,
  cafeteria,
  computer_room,
  lecture_theatre,
  Location,
} from "./locations";
import {
  airlie_mccoy,
  amy_thompson,
  andrey_lebedev,
  anna_warren,
  briony_yorke,
  chris_hill,
  clement_degut,
  david_aragao,
  david_waterman,
  huw_jenkins,
  jamie_blaza,
  joel_greer,
  jola_mirecka,
  jon_agirre,
  jordan_dialpuri,
  kathryn_cowtan,
  lucy_schofield,
  maria_fando,
  paul_bond,
  paul_emsley,
  pavol_bardy,
  Person,
  rob_nicholls,
  ronan_keegan,
  sam_horrell,
  sudakshina_ganguly,
  tom_davies,
  tracey_gloster,
  tristan_croll,
} from "./people";

interface Session {
  title: string;
  type: "Lecture" | "Practical" | "Meal" | "Break" | "Other";
  time: string;
  speakers?: Person[];
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
    { title: "Coffee", type: "Meal", time: "15:00", location: atrium },
    {
      title: "Student talks",
      type: "Lecture",
      time: "15:30",
      location: lecture_theatre,
    },
    {
      title: "Dinner (cafeteria)",
      type: "Meal",
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
      speakers: [chris_hill],
      location: lecture_theatre,
    },
    { title: "Break", time: "09:45", type: "Break" },
    {
      title: "Cryo-EM roadmap",
      type: "Lecture",
      time: "10:00",
      speakers: [jamie_blaza],
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Meal", time: "10:45", location: atrium },
    {
      title: "Constructs / expression / purification",
      type: "Lecture",
      time: "11:15",
      speakers: [tracey_gloster],
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Meal", time: "12:00", location: atrium },
    {
      title: "Crystallisation / harvesting",
      type: "Lecture",
      time: "13:00",
      speakers: [tracey_gloster],
      location: lecture_theatre,
    },
    { title: "Break", time: "13:45", type: "Break" },
    {
      title: "CCP4 Cloud workshop",
      type: "Practical",
      time: "14:00",
      speakers: [maria_fando],
      location: computer_room,
    },
    { title: "Coffee", type: "Meal", time: "15:30", location: atrium },
    {
      title: "Symmetry",
      type: "Lecture",
      time: "16:00",
      speakers: [chris_hill],
      location: lecture_theatre,
    },
    { title: "Break", time: "16:45", type: "Break" },
    {
      title: "Serial crystallography",
      type: "Lecture",
      time: "17:15",
      speakers: [briony_yorke],
      location: lecture_theatre,
    },
    {
      title: "Dinner (street food)",
      type: "Meal",
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
      speakers: [kathryn_cowtan],
      location: lecture_theatre,
    },
    { title: "Break", time: "09:45", type: "Break" },
    {
      title: "Data collection - experimental strategies",
      type: "Lecture",
      time: "10:00",
      speakers: [david_aragao],
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Meal", time: "10:45", location: atrium },
    {
      title: "Scaling, merging, resolution limit",
      type: "Lecture",
      time: "11:15",
      speakers: [amy_thompson],
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Meal", time: "12:00", location: atrium },
    {
      title: "DIALS",
      type: "Lecture",
      time: "13:00",
      speakers: [david_waterman],
      location: lecture_theatre,
    },
    { title: "Break", time: "13:45", type: "Break" },
    {
      title: "DIALS / DUI workshop",
      type: "Practical",
      time: "14:00",
      speakers: [david_waterman],
      location: computer_room,
    },
    { title: "Coffee", type: "Meal", time: "15:30", location: atrium },
    {
      title: "Multi-dataset DIALS / xia2.multiplex",
      type: "Practical",
      time: "16:00",
      speakers: [amy_thompson],
      location: computer_room,
    },
    { title: "Break", time: "17:00", type: "Break" },
    {
      title: "AlphaFold",
      type: "Lecture",
      time: "17:15",
      speakers: [jon_agirre],
      location: lecture_theatre,
    },
    {
      title: "Dinner (cafeteria)",
      type: "Meal",
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
      speakers: [joel_greer, jola_mirecka],
      location: lecture_theatre,
    },
    { title: "Break", time: "09:45", type: "Break" },
    {
      title: "EM map pathologies",
      type: "Lecture",
      time: "10:00",
      speakers: [jamie_blaza],
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Meal", time: "10:45", location: atrium },
    {
      title: "CCP-EM tools",
      type: "Lecture",
      time: "11:15",
      speakers: [joel_greer, jola_mirecka],
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Meal", time: "12:00", location: atrium },
    {
      title: "Data pathologies",
      type: "Lecture",
      time: "13:00",
      speakers: [andrey_lebedev],
      location: lecture_theatre,
    },
    { title: "Break", time: "13:45", type: "Break" },
    {
      title: "Scaling / merging workshop",
      type: "Practical",
      time: "14:00",
      speakers: [david_waterman, andrey_lebedev],
      location: computer_room,
    },
    { title: "Coffee", type: "Meal", time: "15:30", location: atrium },
    {
      title: "CCP-EM Doppio workshop",
      type: "Practical",
      time: "16:00",
      speakers: [joel_greer, jola_mirecka],
      location: computer_room,
    },
    {
      title: "Dinner (cafeteria)",
      type: "Meal",
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
      speakers: [david_aragao],
      location: lecture_theatre,
    },
    { title: "Break", time: "09:45", type: "Break" },
    {
      title: "I23 - SAD / experimental phasing",
      type: "Lecture",
      time: "10:00",
      speakers: [sam_horrell],
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Meal", time: "10:45", location: atrium },
    {
      title: "Nanofocus / microfocus / VMXm",
      type: "Lecture",
      time: "11:15",
      speakers: [anna_warren],
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Meal", time: "12:00", location: atrium },
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
      speakers: [huw_jenkins],
      location: lecture_theatre,
    },
    { title: "Break", time: "09:45", type: "Break" },
    {
      title: "EMplacement",
      type: "Lecture",
      time: "10:00",
      speakers: [airlie_mccoy],
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Meal", time: "10:45", location: atrium },
    {
      title: "Practical molecular replacement",
      type: "Lecture",
      time: "11:15",
      speakers: [huw_jenkins],
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Meal", time: "12:00", location: atrium },
    {
      title: "Molecular replacement workshop",
      type: "Practical",
      time: "13:00",
      speakers: [ronan_keegan],
      location: computer_room,
    },
    { title: "Coffee", type: "Meal", time: "15:30", location: atrium },
    {
      title: "Introduction to Coot (high resolution) workshop",
      type: "Practical",
      time: "16:00",
      speakers: [paul_bond],
      location: computer_room,
    },
    {
      title: "Dinner (pizza)",
      type: "Meal",
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
      speakers: [paul_bond],
      location: lecture_theatre,
    },
    { title: "Break", time: "09:45", type: "Break" },
    {
      title: "Refinement in X-ray and EM",
      type: "Lecture",
      time: "10:00",
      speakers: [rob_nicholls],
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Meal", time: "10:45", location: atrium },
    {
      title: "Ligand modelling, restraints",
      type: "Lecture",
      time: "11:15",
      speakers: [rob_nicholls],
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Meal", time: "12:00", location: atrium },
    {
      title: "Refinement workshop",
      type: "Practical",
      time: "13:00",
      speakers: [rob_nicholls],
      location: computer_room,
    },
    { title: "Coffee", type: "Meal", time: "15:30", location: atrium },
    {
      title: "Python for structural analysis workshop",
      type: "Practical",
      time: "16:00",
      speakers: [jon_agirre],
      location: computer_room,
    },
    {
      title: "Dinner (platters)",
      type: "Meal",
      time: "18:00",
      location: atrium,
    },
    {
      title: "Structural biology in industry",
      type: "Lecture",
      time: "19:30",
      speakers: [tom_davies],
      location: lecture_theatre,
    },
    { title: "Reception", type: "Other", time: "20:30", location: atrium },
  ],
};

const day8: Day = {
  title: "Day 8 - Thu 7th Aug",
  sessions: [
    {
      title: "NMR",
      type: "Lecture",
      time: "09:00",
      speakers: [clement_degut],
      location: lecture_theatre,
    },
    { title: "Break", time: "09:45", type: "Break" },
    {
      title: "Spectroscopy techniques (MST, ITC, DSF)",
      type: "Lecture",
      time: "10:00",
      speakers: undefined,
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Meal", time: "10:45", location: atrium },
    {
      title: "Electron tomography",
      type: "Lecture",
      time: "11:15",
      speakers: [pavol_bardy],
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Meal", time: "12:00", location: atrium },
    {
      title: "Coot at low resolution workshop",
      type: "Practical",
      time: "13:00",
      speakers: [paul_emsley],
      location: computer_room,
    },
    { title: "Coffee", type: "Meal", time: "15:30", location: atrium },
    {
      title: "Moorhen workshop",
      type: "Practical",
      time: "16:00",
      speakers: [paul_emsley],
      location: computer_room,
    },
    { title: "Break", time: "17:00", type: "Break" },
    {
      title: "Isolde",
      type: "Lecture",
      time: "17:15",
      speakers: [tristan_croll],
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
      speakers: [lucy_schofield],
      location: lecture_theatre,
    },
    { title: "Break", time: "09:45", type: "Break" },
    {
      title: "Nucleic acids",
      type: "Lecture",
      time: "10:00",
      speakers: [jordan_dialpuri],
      location: lecture_theatre,
    },
    { title: "Coffee", type: "Meal", time: "10:45", location: atrium },
    {
      title: "Validation",
      type: "Lecture",
      time: "11:15",
      speakers: undefined,
      location: lecture_theatre,
    },
    { title: "Lunch", type: "Meal", time: "12:00", location: atrium },
    {
      title: "Deposition",
      type: "Lecture",
      time: "13:00",
      speakers: [sudakshina_ganguly],
      location: lecture_theatre,
    },
    { title: "Break", time: "13:45", type: "Break" },
    {
      title: "Careers talk",
      type: "Lecture",
      time: "14:00",
      speakers: undefined,
      location: lecture_theatre,
    },
    { title: "Departure", type: "Other", time: "14:45" },
  ],
};

export const days = [day1, day2, day3, day4, day5, day6, day7, day8, day9];
