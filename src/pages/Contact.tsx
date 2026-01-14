import { Heading, Link } from "../components/Elements";
import { people } from "../code/people";

export function Contact() {
  return (
    <main className="flex flex-col items-center gap-4">
      <Heading text="Email" />
      <p className="max-w-4xl">
        Feel free to contact us at{" "}
        <Link
          href="mailto:ccp4workshop@mrclmb.ac.uk"
          text="ccp4workshop@mrclmb.ac.uk"
        />{" "}
        should you have any queries related to the workshop, including the registration,
        programme, or accommodation. If you prefer to contact an individual
        organiser, please use the e-mail addresses below.
      </p>
      <Heading text="Organisers" />
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {people
          .filter((p) => p.tags?.includes("Organiser"))
          .map((person) => {
            return (
              <div key={person.name} className="flex flex-col items-center">
                <img
                  src={`${import.meta.env.BASE_URL}people/${person.photo}`}
                  className="mb-1 h-50 w-50 rounded-full object-cover"
                />
                <p className="text-lg">{person.name}</p>
                <Link href={`mailto:${person.email}`} text={person.email!} />
              </div>
            );
          })}
      </div>
      <Heading text="Discord" />
      <p className="max-w-4xl">
        We will be using a{" "}
        <Link text="Discord" href="https://discord.com/" newTab={true} /> server for the
        duration of the school. You should receive an invite link for this via
        email. Please contact one of the organisers if you cannot access it.
      </p>
    </main>
  );
}
