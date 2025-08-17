import { InternalLink, List } from "../components/Elements";

export function Home() {
  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <div>
        <h1 className="mb-1 text-center text-3xl font-bold">
          CCP4 Central European Workshop 2026
        </h1>
        <p className="text-center text-lg">
          Nové Hrady, Czechia &ndash; 26th April to 2nd May
        </p>
      </div>
      <img
        src="https://konferencnizamek.cz/wp-content/uploads/photo-gallery/imported_from_media_libray/z%C3%A1mek.jpg?bwg=1549014679"
        alt="Nové Hrady venue"
        className="min-h-40 max-w-full object-cover justify-center"
        width="50%"
        height="50%"
      />
      <p>
        It is a great pleasure to announce the CCP4 Central European
        Workshop on computational structure biology. The workshop will focus
        on the practical use of software tools for the methods of structural
        biology, macromolecular crystallography and electron
        cryo-microscopy (cryo-EM), as well as on bioinformatics.
        The workshop aims to bring together early-career scientists from
        Central Europe and beyond and train them in the latest advances in
        structural biology.
      </p>
      <p>
        Please see the{" "}
        <InternalLink to="programme" text="programme" /> for more details.
      </p>
      <p>
        Lectures and tutorials will be delivered by experts in the field,
        sometimes even software authors themselves!
        You will be able to work alongside world-leading scientists and
        methods developers on your own projects.
      </p>
      <p>
        The workshop will be based at the <a href="https://konferencnizamek.cz/en/">
        Nové Hrady Castle</a> in Czechia. 
        <InternalLink to="location" text="More details and directions" />
      </p>
      <p>
        Spaces are limited. The applicant will have to demonstrate the need for
        this sort of specialist training, and be prepared to submit the e-mail
        address of a supervisor who will write a letter of recommendation in
        support of their application.
      </p>
      <p>We look forward to welcoming you in Czechia this spring!</p>
    </main>
  );
}
