import { Heading, Link } from "../components/Elements";
import { people } from "../code/people";

export function Contact() {
  return (
    <main className="flex flex-col items-center gap-4">
      <Heading text="Email" />
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
                  src={`${import.meta.env.BASE_URL}people/${person.photo}`}
                  className="mb-1 h-50 w-50 rounded-full object-cover"
                />
                <p>{person.name}</p>
                <Link href={`mailto:${person.email}`} text={person.email!} />
              </div>
            );
          })}
      </div>
      <Heading text="Phone" />
      <p className="max-w-4xl">
        In the case of a medical emergency please dial{" "}
        <Link href="tel:999" text="999" /> followed by campus Security on{" "}
        <Link href="tel:+441904323333" text="+44&nbsp;1904&nbsp;32&nbsp;3333" />
        , who will direct the emergency vehicle to campus location. The{" "}
        <Link
          text="Campus Safety"
          href="https://www.york.ac.uk/about/campus/campus-safety/"
        />{" "}
        team and{" "}
        <Link
          text="Reception Services"
          href="https://www.york.ac.uk/about/departments/support-and-admin/estates-and-campus-services/receptionservices/"
        />{" "}
        are available 24/7.
      </p>
      <div className="flex flex-col gap-4">
        <p>
          Emergency: <Link href="tel:999" text="999" />
        </p>
        <p>
          Campus Safety (urgent):{" "}
          <Link
            href="tel:+441904323333"
            text="+44&nbsp;1904&nbsp;32&nbsp;3333"
          />
        </p>
        <p>
          Campus Safety (non-urgent):{" "}
          <Link
            href="tel:+441904324444"
            text="+44&nbsp;1904&nbsp;32&nbsp;4444"
          />
        </p>
        <p>
          Information Centre Reception:{" "}
          <Link
            href="tel:+441904323200"
            text="+44&nbsp;1904&nbsp;32&nbsp;3200"
          />
        </p>
      </div>
      <p>
        If you are using one of the internal phones on campus, you can just dial
        the last 4-digit extension number.
      </p>
      <Heading text="Discord" />
      <p className="max-w-4xl">
        We will be using a{" "}
        <Link text="Discord" href="https://discord.com/"></Link> server for the
        duration of the school. You should receive an invite link for this via
        email. Please contact one of the organisers if you cannot access it.
      </p>
    </main>
  );
}
