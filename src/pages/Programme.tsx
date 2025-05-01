import { days } from "../code/sessions";

function colourForType(type: "Lecture" | "Practical" | "Break" | "Other") {
  switch (type) {
    case "Lecture":
      return "bg-emerald-100";
    case "Practical":
      return "bg-pink-100";
    case "Break":
      return "bg-yellow-100";
    case "Other":
      return "bg-sky-100";
  }
}

export function Programme() {
  return (
    <main className="flex w-full flex-col">
      <p className="text-center">
        The programme is still being finalised and is subject to change.
      </p>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {days.map((day) => {
          return (
            <div className="flex max-w-xs flex-auto flex-col items-stretch">
              <h2 className="bg-gray-100 p-2 text-center text-lg font-bold">
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
                        <p>{session.speakers?.map((s) => s.name).join(", ")}</p>
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
    </main>
  );
}
