import { Link } from "../components/Elements";
import { people } from "../models/people";

export function Contact() {
  return (
    <main className="flex flex-col items-center gap-4">
      <p className="max-w-4xl">
        Please contact the organisers at{" "}
        <Link
          href="mailto:structural-biology-summer-school@york.ac.uk"
          text="structural-biology-summer-school@york.ac.uk"
        />{" "}
        if you have any queries related to the school, including the programme,
        registration, or accommodation. If you prefer to contact an individual
        organiser, for example with conduct or safeguarding concerns, please use
        the e-mail addresses below.
      </p>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {people
          .filter((p) => p.tags?.includes("Organiser"))
          .map((person) => {
            return (
              <div key={person.name} className="flex flex-col items-center">
                <img
                  src={`/people/${person.photo}`}
                  className="mb-1 h-50 w-50 object-cover"
                />
                <p>{person.name}</p>
                <Link href={`mailto:${person.email}`} text={person.email!} />
              </div>
            );
          })}
      </div>
    </main>
  );
}
