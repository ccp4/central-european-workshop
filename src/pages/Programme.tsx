import { atrium, cafeteria } from "../code/locations";
import { days } from "../code/sessions";
import { Heading, Link } from "../components/Elements";

function colourForType(
  type: "Lecture" | "Practical" | "Meal" | "Break" | "Other",
) {
  switch (type) {
    case "Lecture":
      return "bg-emerald-100";
    case "Practical":
      return "bg-pink-100";
    case "Meal":
      return "bg-yellow-50";
    case "Break":
      return "bg-white";
    case "Other":
      return "bg-sky-100";
  }
}

export function Programme() {
  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <p>
        The programme will cover the practical use of software tools for
        the methods of structural
        biology, macromolecular crystallography and electron
        cryo-microscopy (cryo-EM), as well as on bioinformatics. 
        More details will be available here during autumn 2025.
      </p>
      <Heading text="Tentative programme" />
      <strong>26/04/2026 Sunday</strong>
      <div>
        17:00–18:00 Welcome – Organisation announcements, acknowledgement of sponsors and co-organisers<br />
        18:00–19:00 Motivational Lecture – Using MX and cryoEM to understand a biological problem/system<br />
        19:00–21:00 <i>Welcome reception – posters & refreshment</i>
      </div>

      <strong>27/04/2026 Monday - Crystallography</strong>
      <div>
        09:00–09:45 Talk – Symmetry – application in crystal structure and single particle analysis<br />
        09:45–10:30 Talk – Principles of crystallography – diffraction<br />
        10:30–11:00 <i>Break</i><br />
        11:00–11:30 Talk – Diffraction data processing<br />
        11:30–12:30 Tutorial – Diffraction data processing<br />
        12:30–14:00 <i>Lunch</i><br />
        14:00–14:45 Talk – Indicators of diffraction data quality<br />
        14:45–15:00 <i>Break</i><br />
        15:00–15:45 Tutorial – Diffraction data quality – AUSPEX<br />
        15:45–16:00 <i>Break</i><br />
        16:00–16:45 Talk – Pathologies in crystallographic data<br />
        16:45–17:00 <i>Break</i><br />
        17:00–17:45 Talk – CCP4 graphical user interfaces<br />
        18:00–19:00 <i>Dinner</i><br />
        19:00–20:00 Hands–on problem solving – discussion and questions from participants
      </div>

      <strong>28/04/2026 Tuesday - Cryo-EM</strong>
      <div>
        09:00–10:30 Talk – Principles of (cryo)EM with focus on particle reconstruction<br />
        10:30–11:00 <i>Break</i><br />
        11:00–11:30 Talk – CCP-EM Doppio graphical user interface<br />
        11:30–12:30 Tutorial – particle reconstruction with RELION in CCP-EM Doppio I<br />
        12:30–14:00 <i>Lunch</i><br />
        14:00–16:00 Tutorial – particle reconstruction with RELION in CCP-EM Doppio II<br />
        16:00–16:30 <i>Break</i><br />
        16:30–17:15 Talk or tutorial by a sponsor<br />
        17:15–18:00 Talk – Atomic structure model prediction using AI – common tips and traps<br />
        18:00–19:00 <i>Dinner</i><br />
        19:00–20:00 Hands-on problem solving – discussion and questions from participants
      </div>
      <strong>29/04/2026 Wednesday - Model Building</strong>
      <div>
        09:00–09:45 Talk – Molecular replacement<br />
        09:45–10:30 Tutorial – Molecular replacement<br />
        10:30–11:00 <i>Break</i><br />
        11:00–11:45 Talk – Model-building and density modification<br />
        11:45–12:30 Tutorial – Model-building in Coot & Moorhen<br />
        12:30–13:30 <i>Lunch</i><br />
        13:30–14:15 Talk – Structure solution with ARCIMBOLDO<br />
        14:15–15:00 Tutorial – Automated model building in crystallography<br />
        15:00–15:45 <i>Break</i><br />
        15:45–16:30 Tutorial – Identification of secondary structure and RNA/DNA in cryoEM reconstruction maps with HARUSPEX<br />
        16:30–19:00 Social event – Walk to Tereza's Valley or Červené blato wetland or trip to Třeboň<br />
        19:00–20:00 <i>Dinner</i>
      </div>

      <strong>30/04/2026 Thursday - Refinement</strong>
      <div>
        09:00–09:45 Tutorial – Automated model building in cryoEM with ModelAngelo<br />
        09:45–10:30 Talk – Stereochemistry restraints with AceDRG, ProSMART<br />
        10:30–11:00 <i>Break</i><br />
        11:00–11:45 Talk – Atomic structure model refinement<br />
        11:45–12:30 Tutorial – Refinement in crystallography I – Servalcat & Moorhen<br />
        12:30–14:00 <i>Lunch</i><br />
        14:00–15:15 Tutorial – Refinement in crystallography II – Servalcat & Moorhen<br />
        15:15–15:30 <i>Break</i><br />
        15:30–16:30 Tutorial – Refinement in cryoEM I<br />
        16:30–16:45 <i>Break</i><br />
        16:45–17:45 Tutorial – Refinement in cryoEM II<br />
        18:00–19:00 <i>Dinner</i><br />
        19:00–19:30 Hands-on problem solving – discussion and questions from participants<br />
        19:30–21:00 <i>Quiz in teams about the methods of structural biology</i>
      </div>

      <strong>01/05/2026 Friday - Restraints, Ligands, Validation</strong>
      <div>
        09:00–09:45 Talk – Privateer – glycosylation analysis<br />
        09:45–10:30 Tutorial – MetalCoord restraints<br />
        10:30–11:00 <i>Break</i><br />
        11:00–11:45 Talk – DNATCO – nucleic acids: building, restraints and validation<br />
        11:45–12:30 Talk – RestraintLib – nucleic acids: building, restraints and validation<br />
        12:30–14:00 <i>Lunch</i><br />
        14:00–14:45 Talk – Atomic structure model validation (including common model-building errors) and deposition<br />
        14:45–15:00 <i>Break</i><br />
        15:00–15:45 Talk/Tutorial – CheckMySequence<br />
        15:45–16:00 <i>Break</i><br />
        16:00–16:45 Tutorial – Atomic structure model validation in Coot & Moorhen<br />
        16:45–17:00 <i>Break</i><br />
        17:00–17:45 Talk – PDB deposition using CCP4 Cloud<br />
        18:00–19:00 <i>Dinner</i><br />
        19:00–20:00 Hands-on problem solving – discussion and questions from participants
      </div>

      <strong>02/05/2026 Saturday - Summary and Outlook</strong>
      <div>
        09:00–09:30 Talk – Analysis of Macromolecular Assemblies<br />
        09:30–10:00 Talk – Overview of tools/databases for structure model analysis (e.g. DALI, pfam, BRENDA, PDBsum…)<br />
        10:00–10:30 Talk – Running bioinformatic analyses using a PDB mirror<br />
        10:30–11:00 <i>Break</i><br />
        11:00–11:45 Talk/Tutorial – Molecular graphics<br />
        11:45–12:30 Talk – “Context is important” - Emerging techniques to study structure dynamics and cells: Serial Crystallography, Cryo-electron tomography, etc.<br />
        12:30–14:00 <i>Lunch</i><br />
        Departure
      </div>
    </main>
  );
}

  {/*
          <div className="flex flex-wrap justify-center gap-4 p-4">
        {days.map((day) => {
          return (
            <div className="flex max-w-xs flex-auto flex-col items-stretch">
              <h2 className="bg-sky-800 p-2 text-center text-lg font-bold text-white">
                {day.title}
              </h2>
              <table className="w-full">
                {day.sessions.map((session) => {
                  return (
                    <tr className={colourForType(session.type)}>
                      <td className="w-10 px-2 py-1 align-top">
                        {session.time}
                      </td>
                      <td className="px-2 py-1">
                        <p className="font-bold">{session.title}</p>
                        <p className="text-[0.9375rem]">
                          {session.speakers?.map((s) => s.name).join(", ")}
                        </p>
                        <p className="text-sm italic">
                          {session.location?.name}
                        </p>
                      </td>
                      <td className="px-2 py-1">
                        {session.location && (
                          <a href={session.location.link} className="text-lg">
                            <span className="material-symbols-outlined">
                              location_on
                            </span>
                          </a>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          );
        })}
      </div>
      <p className="text-center font-bold">
        Students are expected to attend all sessions.
      </p>
      <div className="flex max-w-7xl flex-col gap-4 self-center">
        <Heading text="Meals" />
        <p>
          A full breakfast with both hot and cold options is provided for all
          registered students (whether you are staying in the campus
          accommodation or not) in the{" "}
          <Link href={cafeteria.link} text={cafeteria.name} /> from 7:30 am to
          8:45 am.
        </p>
        <p>
          Lunch will be served in the{" "}
          <Link href={atrium.link} text={atrium.name} /> from 12 pm to 1 pm each
          day (apart from the day of arrival). Lunches will alternate between a
          sandwich and wrap platter with finger buffet items, and a cold buffet
          served with salad, pasta, potatoes and bread.
        </p>
        <p>
          Dinner is usually a 2-course cafeteria meal in the{" "}
          <Link href={cafeteria.link} text={cafeteria.name} />. During the
          ceilidh on Friday 1st August, the quiz on Tuesday 6th August, the
          evening lecture on the Wednesday 7th August there will be different
          dinner options on campus. The main conference dinner will take place
          on the River Ouse with York City Cruises on Thursday 8th August. You
          will have to cater for yourself on evening of Monday 4th August.
        </p>
        <p>
          All dietary requirements specified in the registration forms will be
          catered for. If your dietary requirements are not met by the standard
          meals provided, you will be given a personalised meal with your name
          on it. Please ask if you are unsure.
        </p>
      </div>
    */}