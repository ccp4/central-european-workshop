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
    <main className="flex w-full flex-col gap-4">
      <div>
        The programme will cover the practical use of software tools for
        the methods of structural
        biology, macromolecular crystallography and electron
        cryo-microscopy (cryo-EM), as well as on bioinformatics. 
        More details will be available here during autumn 2025.
      </div>
      <Heading text="Tentative programme" />
      <strong>26/04/2026 Sunday</strong>
      <div>
        17:00–18:00 Welcome – Organisation announcements, acknowledgement of sponsors and co-organisers<br />
        18:00–19:00 Motivational Lecture – Using MX and cryoEM to understand a biological problem/system<br />
        19:00–21:00 <i>Welcome reception – posters & refreshment</i>
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