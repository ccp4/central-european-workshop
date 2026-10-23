import { Link, InternalLink } from "../components/Elements";

export function Home() {
  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <div>
        <h2 className="text-center text-xl font-bold">
          Nové Hrady, South Bohemia, Czechia &ndash; 2-9 May 2027
        </h2>
      </div>
      <p>
        The CCP4 Central European
        Workshop 2027 on computational structural biology will take place in{" "}
        <InternalLink to="location" text="Nové Hrady" />, South Bohemia, Czechia
        from 2nd to 9th May 2027. More details will be published on this
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
      <div className="grid gap-4 sm:grid-cols-3">
        <img
          src="/images/lecture2_crop_h600.jpg"
          alt="Lecture theatre"
          className="mx-auto h-64 w-full rounded-lg object-cover shadow-sm"
        />
        <img
          src="/images/group_photo_h600.jpg"
          alt="Group photo"
          className="mx-auto h-64 w-full rounded-lg object-cover shadow-sm"
        />
        <img
          src="/images/castle_lake_h600.jpg"
          alt="Castle and park"
          className="mx-auto h-64 w-full rounded-lg object-cover shadow-sm"
        />
      </div>
    </main>
  );
}
