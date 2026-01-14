import { Link, InternalLink, List } from "../components/Elements";

export function Home() {
  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <div>
        <h1 className="mb-1 text-center text-3xl font-bold">
          CCP4 Central European Workshop 2026
        </h1>
        <p className="text-center text-lg">
          Nové Hrady, South Bohemia, Czechia &ndash; 26th April to 2nd May
        </p>
      </div>
      <p>
        It is a great pleasure to announce the CCP4 Central European
        Workshop 2026 on computational structure biology. The workshop will focus
        on the practical use of software tools for the methods of structural
        biology, macromolecular crystallography and electron
        cryo-microscopy (cryo-EM), as well as on structural bioinformatics.
        The workshop aims to bring together scientists from
        Central Europe and beyond and train them in the latest advances in
        structural biology.
      </p>
      <p>
        Please see the{" "}
        <InternalLink to="programme" text="programme" /> for more details.
      </p>
      <p>
        <b>The deadline for <InternalLink to="apply" text="applications" /> is 28th February 2026.</b>
      </p>
      <p>
        Lectures and tutorials will be delivered by experts in the field,
        sometimes even software authors themselves!
        You will be able to work alongside world-leading scientists and
        methods developers on your own projects.
      </p>
      <p>
        The workshop will be based at the <InternalLink to="location"
        text="Nové Hrady Castle" /> in South Bohemia in Czechia.&nbsp;
        <InternalLink to="location" text="More details and directions" />
      </p>
      <div className="justify-center gap-4">
        <img
          src="https://konferencnizamek.cz/wp-content/uploads/photo-gallery/imported_from_media_libray/z%C3%A1mek.jpg?bwg=1549014679"
          alt="Nové Hrady venue"
          className="min-h-40 max-w-full object-cover mx-auto"
          width="40%"
          height="40%"
        />
      </div>
      <p>
        Spaces are limited. The applicant will have to demonstrate the need for
        this sort of specialist training. A letter of recommendation from a
        supervisor or a line manager will be required. Please see the{" "}
        <InternalLink to="apply" text="registration page" /> for more details.
      </p>
      <p>We look forward to welcoming you in Czechia this spring!</p>
    </main>
  );
}
