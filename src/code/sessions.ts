{/*
import {
  atrium,
  cafeteria,
  computer_room,
  information_centre,
  lecture_theatre,
  Location,
} from "./locations";
*/}
import {
  agnel_joseph,
  andrey_lebedev,
  david_waterman,
  eugene_krissinel,
  isabel_uson,
  jan_dohnalek,
  jiri_cerny,
  kay_diederichs,
  keitaro_yamashita,
  lucrezia_catapano,
  lucy_schofield,
  maria_fando,
  martin_maly,
  paul_bond,
  Person,
  petr_kolenko,
  robbie_joosten,
  terezia_kovalova,
} from "./people";

interface Session {
  title: string;
  type: "Lecture" | "Tutorial" | "Meal" | "Break" | "Problem solving" | "Other";
  time: string;
  speakers?: Person[];
  // location?: Location;
}

interface Day {
  title: string;
  sessions: Session[];
}

const day1: Day = {
  title: "Sunday 26th April",
  sessions: [
    {
      title: "Welcome!",
      type: "Other",
      time: "17:00",
      speakers: [martin_maly],
    },
    {
      title: "Flash introduction talks by participants, part I",
      type: "Other",
      time: "17:30",
    },
    {
      title: "Using MX and cryoEM to understand a biological problem/system",
      type: "Lecture",
      time: "18:00",
      speakers: [terezia_kovalova],
    },
    {
      title: "Welcome reception",
      type: "Meal",
      time: "19:00",
    },
  ],
};

const day2: Day = {
  title: "Monday 27th April - Crystallography",
  sessions: [
    {
      title: "Symmetry – application in crystal structure and single particle analysis",
      type: "Lecture",
      time: "09:00",
      speakers: [petr_kolenko],
    },
    {
      title: "Principles of crystallography – diffraction",
      type: "Lecture",
      time: "09:45",
      speakers: [jan_dohnalek],
    },
    { title: "Break", time: "10:30", type: "Break" },
    {
      title: "Diffraction data processing using DIALS",
      type: "Lecture",
      time: "11:00",
      speakers: [david_waterman],
    },
    {
      title: "Diffraction data processing using DIALS",
      type: "Tutorial",
      time: "11:45",
      speakers: [david_waterman],
    },
    { title: "Lunch", type: "Meal", time: "12:30" },
    {
      title: "Diffraction data processing using XDS",
      type: "Lecture",
      time: "14:00",
      speakers: [kay_diederichs],
    },
    {
      title: "Diffraction data processing using XDS",
      type: "Tutorial",
      time: "14:45",
      speakers: [kay_diederichs],
    },
    { title: "Break", time: "15:30", type: "Break" },
    {
      title: "Pathologies in crystallographic data",
      type: "Lecture",
      time: "16:00",
      speakers: [andrey_lebedev],
    },
    {
      title: "CCP4 graphical user interfaces",
      type: "Lecture",
      time: "16:45",
      speakers: [eugene_krissinel, maria_fando],
    },
    {
      title: "Flash introduction talks by participants, part II",
      type: "Other",
      time: "17:30",
    },
    { title: "Dinner", type: "Meal", time: "18:00" },
    {
      title: "Hands-on problem solving – discussion and questions from participants",
      type: "Problem solving",
      time: "19:00",
    },
  ],
};

const day3: Day = {
  title: "Tuesday 28th April - Cryo-EM",
  sessions: [
    {
      title: "Principles of (cryo)EM with focus on particle reconstruction",
      type: "Lecture",
      time: "09:00",
      speakers: [agnel_joseph],
    },
    { title: "Break", time: "10:30", type: "Break" },
    {
      title: "CCP-EM Doppio graphical user interface",
      type: "Lecture",
      time: "11:00",
      speakers: [agnel_joseph],
    },
    {
      title: "Particle reconstruction with RELION in CCP-EM Doppio I",
      type: "Tutorial",
      time: "11:30",
      speakers: [agnel_joseph],
    },
    { title: "Lunch", type: "Meal", time: "12:30" },
    {
      title: "Particle reconstruction with RELION in CCP-EM Doppio II",
      type: "Tutorial",
      time: "14:00",
      speakers: [agnel_joseph],
    },
    { title: "Break", time: "16:00", type: "Break" },
    {
      title: "Atomic structure model prediction using AI – common tips and traps",
      type: "Lecture",
      time: "16:30",
      speakers: [maria_fando, andrey_lebedev],
    },
    {
      title: "Molecular replacement",
      type: "Tutorial",
      time: "17:15",
      speakers: [andrey_lebedev, maria_fando],
    },
    { title: "Dinner", type: "Meal", time: "18:00" },
    {
      title: "Hands-on problem solving – discussion and questions from participants",
      type: "Problem solving",
      time: "19:00",
    },
  ],
};

const day4: Day = {
  title: "Wednesday 29th April - Model Building",
  sessions: [
    {
      title: "Automated model building in crystallography and density modification",
      type: "Lecture",
      time: "09:00",
      speakers: [paul_bond],
    },
    {
      title: "Automated model building in crystallography with ModelCraft",
      type: "Tutorial",
      time: "09:45",
      speakers: [paul_bond],
    },
    { title: "Break", time: "10:30", type: "Break" },
    {
      title: "Structure solution with ARCIMBOLDO",
      type: "Lecture",
      time: "11:00",
      speakers: [isabel_uson],
    },
    {
      title: "Structure solution with ARCIMBOLDO",
      type: "Tutorial",
      time: "11:45",
      speakers: [isabel_uson],
    },
    { title: "Lunch", type: "Meal", time: "12:30" },
    {
      title: "Model-building and refinement in Coot & Moorhen",
      type: "Lecture",
      time: "13:30",
      speakers: [lucrezia_catapano],
    },
    {
      title: "Model-building and refinement in Coot & Moorhen",
      type: "Tutorial",
      time: "14:15",
      speakers: [lucrezia_catapano],
    },
    { title: "Social event", type: "Other", time: "15:00" },
    { title: "Dinner", type: "Meal", time: "19:00" },
  ],
};

const day5: Day = {
  title: "Thursday 30th April - Refinement",
  sessions: [
    {
      title: "Automated model building in cryoEM with ModelAngelo",
      type: "Tutorial",
      time: "09:00",
      speakers: [agnel_joseph],
    },
    {
      title: "Stereochemistry restraints with AceDRG, ProSMART",
      type: "Lecture",
      time: "09:45",
      speakers: [keitaro_yamashita],
    },
    { title: "Break", time: "10:30", type: "Break" },
    {
      title: "Atomic structure model refinement",
      type: "Lecture",
      time: "11:00",
      speakers: [keitaro_yamashita],
    },
    {
      title: "Refinement in crystallography I – Servalcat & Moorhen",
      type: "Tutorial",
      time: "11:45",
      speakers: [keitaro_yamashita, martin_maly, lucrezia_catapano],
    },
    { title: "Lunch", type: "Meal", time: "12:30" },
    {
      title: "Refinement in crystallography II – Servalcat & Moorhen",
      type: "Tutorial",
      time: "14:00",
      speakers: [keitaro_yamashita, martin_maly, lucrezia_catapano],
    },
    { title: "Break", time: "15:15", type: "Break" },
    {
      title: "Refinement in cryoEM I",
      type: "Tutorial",
      time: "15:30",
      speakers: [keitaro_yamashita, martin_maly, lucrezia_catapano],
    },
    { title: "Break", time: "16:30", type: "Break" },
    {
      title: "Refinement in cryoEM II",
      type: "Tutorial",
      time: "16:45",
      speakers: [keitaro_yamashita, martin_maly, lucrezia_catapano],
    },
    { title: "Dinner", type: "Meal", time: "18:00" },
    {
      title: "Hands-on problem solving – discussion and questions from participants",
      type: "Problem solving",
      time: "19:00",
    },
  ],
};

const day6: Day = {
      title: "Friday 1st May - Restraints, Ligands, Validation",
  sessions: [
    {
      title: "Privateer – glycosylation analysis",
      type: "Lecture",
      time: "09:00",
      speakers: [lucy_schofield],
    },
    {
      title: "MetalCoord restraints",
      type: "Tutorial",
      time: "09:45",
      speakers: [martin_maly],
    },
    { title: "Break", time: "10:30", type: "Break" },
    {
      title: "DNATCO – nucleic acids: building, restraints and validation",
      type: "Lecture",
      time: "11:00",
      speakers: [jiri_cerny],
    },
    {
      title: "DNATCO – nucleic acids: building, restraints and validation",
      type: "Tutorial",
      time: "11:45",
      speakers: [jiri_cerny],
    },
    { title: "Lunch", type: "Meal", time: "12:30" },
    {
      title: "Atomic structure model validation (including common model-building errors) and deposition",
      type: "Lecture",
      time: "14:00",
      speakers: [robbie_joosten],
    },
    {
      title: "Tools for ligands in Coot & Moorhen",
      type: "Tutorial",
      time: "14:45",
      speakers: [lucrezia_catapano],
    },
      { title: "Break", time: "15:30", type: "Break" },
    {
      title: "PDB deposition using CCP4 Cloud",
      type: "Lecture",
      time: "16:00",
      speakers: [maria_fando, eugene_krissinel],
    },
    {
      title: "Structure validation quiz",
      type: "Other",
      time: "16:45",
      speakers: [robbie_joosten],
    },
    { title: "Dinner", type: "Meal", time: "18:00" },
    {
      title: "Hands-on problem solving – discussion and questions from participants",
      type: "Problem solving",
      time: "19:00",
    },
  ],
};

const day7: Day = {
  title: "Saturday 2nd May",
  sessions: [
    {
      title: "Analysis of macromolecular assemblies",
      type: "Lecture",
      time: "9:00",
      speakers: [eugene_krissinel],
    },
    /* {
      title: "Overview of tools/databases for structure model analysis",
      type: "Lecture",
      time: "9:45",
      speakers: [martin_maly],
    }, */
    {
      title: "Python for structural analysis",
      type: "Tutorial",
      time: "9:45",
      speakers: [jiri_cerny],
    },
    { title: "Break", time: "10:30", type: "Break" },
    {
      title: "Molecular graphics",
      type: "Lecture",
      time: "11:00",
      speakers: [lucrezia_catapano],
    },
    {
      title: '"Context is important" - Emerging techniques to study structure dynamics and cells: serial crystallography, electron cryo-tomography, etc.',
      type: "Lecture",
      time: "11:45",
      speakers: [terezia_kovalova],
    },
    { title: "Lunch", type: "Meal", time: "12:30" },
  ],
};

export const days = [day1, day2, day3, day4, day5, day6, day7]