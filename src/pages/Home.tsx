import { Link, InternalLink } from "../components/Elements";

export function Home() {
  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <div>
        <h2 className="text-center text-xl font-bold">
          Nové Hrady, South Bohemia, Czechia &ndash; 10-16 May 2027
        </h2>
      </div>
      <p>
        The CCP4 Central European
        Workshop 2027 on computational structural biology will take place in{" "}
        <InternalLink to="location" text="Nové Hrady" />, South Bohemia, Czechia
        from 10th to 16th May 2027. More details will be published on this
        website in October 2026.
      </p>
      <p>
        Website for the previous edition in 2026 is available at{" "}
        <Link
          href="https://ccp4.github.io/central-european-workshop-2026"
          text="https://ccp4.github.io/central-european-workshop-2026"
        />.
      </p>
      <p>We look forward to welcoming you in Czechia this spring!</p>
      <div className="justify-center gap-4">
        <img
          src="https://konferencnizamek.cz/wp-content/uploads/photo-gallery/imported_from_media_libray/z%C3%A1mek.jpg?bwg=1549014679"
          alt="Nové Hrady venue"
          className="min-h-40 max-w-full object-cover mx-auto"
          width="40%"
          height="40%"
        />
      </div>
    </main>
  );
}
