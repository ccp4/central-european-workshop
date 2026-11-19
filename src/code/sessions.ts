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
  artur_biela,
  bohdan_schneider,
  charlotte_cordery,
  jan_dohnalek,
  jiri_cerny,
  kay_diederichs,
  lucrezia_catapano,
  maria_fando,
  martin_maly,
  paul_bond,
  Person,
  petr_kolenko,
  terezia_kovalova,
  vernon_smith,
  ludmila_leroy,
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
  title: "Sunday 2nd May - Arrival",
  sessions: [
    {
      title: "Arrival, registration (dinner available from 18:30 till late)",
      type: "Other",
      time: "17:00-20:00",
    },

    {
      title: "Troubleshooting with software installation. <br />Get in touch with tutors if you need their help.",
      type: "Other",
      time: "20:00-21:00",
    },
  ],
};

const day2: Day = {
  title: "Monday 3rd May - Crystallography",
  sessions: [
    {
      title: "Breakfast",
      type: "Meal",
      time: "08:00",
    },
    {
      title: "Welcome!",
      type: "Other",
      time: "09:00",
      speakers: [martin_maly],
    },
    {
      title: "Using MX and cryoEM to understand a biological problem/system",
      type: "Lecture",
      time: "09:50",
      speakers: [terezia_kovalova],
    },
    { title: "Break", time: "10:35", type: "Break" },
    {
      title: "Symmetry – application in crystal structure and single particle analysis",
      type: "Lecture",
      time: "11:00",
      speakers: [petr_kolenko],
    },
    {
      title: "Principles of crystallography – diffraction",
      type: "Lecture",
      time: "11:50",
      speakers: [jan_dohnalek],
    },
    { title: "Lunch", type: "Meal", time: "12:40" },
    {
      title: "Diffraction data processing using XDS",
      type: "Lecture",
      time: "14:00",
      speakers: [kay_diederichs],
    },
    {
      title: "Diffraction data processing using XDS",
      type: "Tutorial",
      time: "14:50",
      speakers: [kay_diederichs],
    },
    { title: "Break", time: "15:35", type: "Break" },
    {
      title: "Pathologies in crystallographic data",
      type: "Lecture",
      time: "16:00",
      speakers: [andrey_lebedev],
    },
    {
      title: "CCP4 graphical user interfaces",
      type: "Lecture",
      time: "16:50",
      speakers: [maria_fando, paul_bond],
    },
    {
      title: "Flash introduction talks by participants, part I",
      type: "Other",
      time: "17:40",
    },
    { title: "Dinner - Welcome reception", type: "Meal", time: "18:10" },
    {
      title: "Hands-on problem solving – discussion and questions from participants",
      type: "Problem solving",
      time: "19:00",
    },
  ],
};

const day3: Day = {
  title: "Tuesday 4th May - Cryo-EM",
  sessions: [
    {
      title: "Breakfast",
      type: "Meal",
      time: "08:00",
    },
    {
      title: "Principles of (cryo)EM with focus on particle reconstruction",
      type: "Lecture",
      time: "09:00",
      speakers: [agnel_joseph],
    },
    { title: "Group photo and break", time: "10:30", type: "Break" },
    {
      title: "CCP-EM Doppio graphical user interface",
      type: "Lecture",
      time: "11:00",
      speakers: [agnel_joseph],
    },
    {
      title: "Particle reconstruction with RELION in CCP-EM Doppio I",
      type: "Tutorial",
      time: "11:50",
      speakers: [agnel_joseph],
    },
    { title: "Lunch", type: "Meal", time: "12:40" },
    {
      title: "Particle reconstruction with RELION in CCP-EM Doppio II",
      type: "Tutorial",
      time: "14:00",
      speakers: [agnel_joseph],
    },
    { title: "Break", time: "16:00", type: "Break" },
    {
      title: "Cryo-EM facility and projects at Solaris, Poland",
      type: "Lecture",
      time: "16:25",
      speakers: [artur_biela],
    },
    {
      title: "Atomic structure model prediction and molecular replacement",
      type: "Tutorial",
      time: "17:15",
      speakers: [andrey_lebedev, maria_fando],
    },
    {
      title: "Flash introduction talks by participants, part II",
      type: "Other",
      time: "17:40",
    },
    { title: "Dinner", type: "Meal", time: "18:10" },
    {
      title: "Hands-on problem solving – discussion and questions from participants",
      type: "Problem solving",
      time: "19:00",
    },
  ],
};

const day4: Day = {
  title: "Wednesday 5th May - Model Building and Refinement",
  sessions: [
    {
      title: "Breakfast",
      type: "Meal",
      time: "08:00",
    },
    {
      title: "Automated model building and density modification",
      type: "Lecture",
      time: "09:00",
      speakers: [paul_bond],
    },
    {
      title: "Automated model building with ModelCraft",
      type: "Tutorial",
      time: "09:50",
      speakers: [paul_bond],
    },
    { title: "Break - snacks which you brought", time: "10:35", type: "Break" },
    {
      title: "Interactive model building and refinement in Coot & Moorhen",
      type: "Lecture",
      time: "11:00",
      speakers: [lucrezia_catapano],
    },
    {
      title: "Interactive model building and refinement in Coot & Moorhen",
      type: "Tutorial",
      time: "11:50",
      speakers: [lucrezia_catapano],
    },
    { title: "Lunch", type: "Meal", time: "12:40" },
    {
      title: "Automated model building in cryoEM with ModelAngelo",
      type: "Tutorial",
      time: "14:00",
      speakers: [agnel_joseph],
    },
    {
      title: "Atomic structure model refinement",
      type: "Lecture",
      time: "14:50",
      speakers: [martin_maly],
    },
    { title: "Break", time: "15:35", type: "Break" },
    {
      title: "Refinement in crystallography – Servalcat & Coot",
      type: "Tutorial",
      time: "16:00",
      speakers: [andrey_lebedev, martin_maly, lucrezia_catapano],
    },
    {
      title: "Bruker (online)",
      type: "Other",
      time: "17:50",
      speakers: [vernon_smith],
    },
    { title: "Dinner", type: "Meal", time: "18:10" },
    {
      title: "Hands-on problem solving – discussion and questions from participants",
      type: "Problem solving",
      time: "19:00",
    },
  ],
};

const day5: Day = {
  title: "Thursday 6th May - Restraints, Ligands",
  sessions: [
    {
      title: "Breakfast",
      type: "Meal",
      time: "08:00",
    },
    {
      title: "Stereochemistry restraints with AceDRG, ProSMART and MetalCoord",
      type: "Lecture",
      time: "09:00",
      speakers: [martin_maly],
    },
    {
      title: "Tools for ligands in Coot & Moorhen",
      type: "Tutorial",
      time: "09:50",
      speakers: [lucrezia_catapano],
    },
    { title: "Break", time: "10:35", type: "Break" },
    {
      title: "Restraints for unusual covalent links",
      type: "Tutorial",
      time: "11:00",
      speakers: [andrey_lebedev],
    },
    {
      title: "To be announced",
      type: "Lecture",
      time: "11:50",
      speakers: [],
    },
    { title: "Lunch", type: "Meal", time: "12:40" },
    { title: "Social event (until 21:00)", type: "Other", time: "14:00" },

  ],
};

const day6: Day = {
      title: "Friday 7th May - Restraints, Ligands, Validation",
  sessions: [
    {
      title: "Breakfast",
      type: "Meal",
      time: "08:00",
    },
    {
      title: "DNATCO – nucleic acids: building, restraints and validation",
      type: "Lecture",
      time: "09:00",
      speakers: [bohdan_schneider, jiri_cerny],
    },
    {
      title: "DNATCO – nucleic acids: building, restraints and validation",
      type: "Tutorial",
      time: "09:50",
      speakers: [jiri_cerny, bohdan_schneider],
    },
    { title: "Break", time: "10:35", type: "Break" },
    {
      title: "Metal containing ligands",
      type: "Tutorial",
      time: "11:50",
      speakers: [martin_maly],
    },
    {
      title: "Dectris (online)",
      type: "Other",
      time: "12:20",
      speakers: [ludmila_leroy],
    },
    { title: "Lunch", type: "Meal", time: "12:40" },
    {
      title: "Atomic structure model validation and optimisation",
      type: "Lecture",
      time: "14:00",
      speakers: [maria_fando],
    },
    {
      title: "Deposition and validation in Protein Data Bank",
      type: "Lecture",
      time: "14:50",
      speakers: [charlotte_cordery],
    },
    { title: "Break", time: "15:35", type: "Break" },
    {
      title: "To be announced",
      type: "Lecture",
      time: "16:00",
      speakers: [],
    },
    {
      title: "To be announced",
      type: "Tutorial",
      time: "16:50",
      speakers: [],
    },
    { title: "Dinner", type: "Meal", time: "18:10" },
    {
      title: "Hands-on problem solving – discussion and questions from participants",
      type: "Problem solving",
      time: "19:00",
    },
  ],
};

const day7: Day = {
  title: "Saturday 8th May - Deposition and Structural Bioinformatics",
  sessions: [
    {
      title: "Breakfast",
      type: "Meal",
      time: "08:00",
    },
    {
      title: "To be announced",
      type: "Tutorial",
      time: "09:00",
      speakers: [],
    },
    {
      title: "Structure stability and dynamics: small angle scattering, serial crystallography - low radiation dose and time-resolved studies",
      type: "Lecture",
      time: "09:50",
      speakers: [martin_maly, terezia_kovalova],
    },
    { title: "Break", time: "10:35", type: "Break" },
    {
      title: "Molecular graphics",
      type: "Tutorial",
      time: "11:00",
      speakers: [lucrezia_catapano],
    },
      {
      title: "Structure alignment and superposition",
      type: "Lecture",
      time: "11:50",
      speakers: [petr_kolenko],
    },
    {title: "Lunch", type: "Meal", time: "12:40"},
    {
      title: "Protein Data Bank Knowledge Base (PDBe-KB)",
      type: "Tutorial",
      time: "14:00",
      speakers: [charlotte_cordery],
    },
    {
      title: "Structural bioinformatics workshop using Python",
      type: "Tutorial",
      time: "14:50",
      speakers: [jiri_cerny],
    },
    { title: "Break", time: "15:35", type: "Break" },
    {
      title: "To be announced",
      type: "Tutorial",
      time: "16:00",
      speakers: [],
    },
    {
      title: "Data backup, feedback, closing remarks",
      type: "Other",
      time: "17:20",
      speakers: [martin_maly],
    },
    { title: "Dinner", type: "Meal", time: "18:10" },
    {
      title: "Hands-on problem solving – discussion and questions from participants and party",
      type: "Problem solving",
      time: "19:00",
    },
  ],
};

const day8: Day = {
  title: "Sunday 9th May",
  sessions: [
    {
      title: "Breakfast & Farewell",
      type: "Meal",
      time: "08:00",
    },
  ],
};

export const days = [day1, day2, day3, day4, day5, day6, day7, day8]