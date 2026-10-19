// import { atrium, cafeteria } from "../code/locations";
// import { Heading, Link } from "../components/Elements";
import { Heading } from "../components/Elements";
import { days } from "../code/sessions";

function colourForType(
  type: "Lecture" | "Tutorial" | "Meal" | "Break" | "Problem solving" | "Other",
) {
  switch (type) {
    case "Lecture":
      return "bg-emerald-100";
    case "Tutorial":
      return "bg-sky-100";
    case "Meal":
      return "bg-white";
    case "Break":
      return "bg-white";
    case "Other":
      return "bg-pink-100";
    case "Problem solving":
      return "bg-orange-100";
  }
}

export function Programme() {
  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <Heading text="Programme" />
      <p>
        The programme covers the practical use of software tools for
        the methods of structural biology, i.e. macromolecular crystallography and electron
        cryo-microscopy (cryo-EM), as well as structural bioinformatics.

      <p><b>Preliminary programme</b></p>
      Sunday 9 May: Arrival in the evening<br />
      Monday 10 May: Diffraction data processing<br />
      Tuesday 11 May: Single particle reconstruction – electron cryo-microscopy<br />
      Wednesday 12 May: AI-based atomic structure model prediction, structure model placement<br />
      Thursday 13 May: Atomic structure model building<br />
      Friday 14 May: Structure refinement and stereochemical restraints<br />
      Saturday 15 May: Structure validation, structural bioinformatics and deposition in the Protein Data Bank<br />
      Sunday 16 May: Farewell<br />
      {/*
      <p>
        Most of the individual lectures and tutorials will be 45 minutes long. There will be 5 minute breaks between most sessions.
      </p>
      
      <div className="my-4 flex gap-4">
        <td className="border border-gray-300 px-4 py-2 bg-emerald-100">Lecture</td>
        <td className="border border-gray-300 px-4 py-2 bg-sky-100">Tutorial</td>
        <td className="border border-gray-300 px-4 py-2 bg-orange-100">Problem solving</td>
        <td className="border border-gray-300 px-4 py-2 bg-white border">Break</td>
        <td className="border border-gray-300 px-4 py-2 bg-pink-100">Other</td>
      </div>

      <div className="flex flex-col justify-center gap-4 p-4">
        {days.map((day) => {
          return (
            <div className="flex max-w-2xl flex-auto flex-col items-stretch">
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
        Participants are expected to attend all sessions.
      </p>
      */}
    </main>
  );
}