import { information_centre, james_e, james_g } from "../code/locations";
import { Heading, InternalLink, Link } from "../components/Elements";

export function Location() {
  const video =
    "https://www.york.ac.uk/media/abouttheuniversity/campus/herovideo";

  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <video
        src={`${video}/campus-hero.mp4`}
        poster={`${video}/campus-hero-still.jpg`}
        autoPlay
        loop
        muted
      ></video>
      <Heading text="The University of York - Campus West" />
      <p>
        The school will be held at the University of York, York, YO10 5DD.
        Lectures and practical workshops will both be held in the Department of
        Biology, and accommodation and meals in nearby James College. The
        university is well-connected with excellent rail links, direct access to
        major road networks, and quick connections to international airports.
        Please see the university's{" "}
        <Link
          href="https://www.york.ac.uk/about/transport-maps-parking/"
          text="Transport, maps and parking"
        />{" "}
        page for more details on how to get here.
      </p>
      <Link href="https://www.york.ac.uk/map/" text="Interactive campus map" />
      <div className="flex max-w-full flex-wrap items-center justify-center gap-2">
        <img src="kblock.png" className="w-full max-w-xl flex-auto" />
        <img src="accommodation.png" className="w-full max-w-xl flex-auto" />
      </div>
      <p>
        Each session in the <InternalLink to="programme" text="Programme" />{" "}
        page contains a link to the location of the session in Google Maps.
      </p>
      <Heading text="Accommodation" />
      <p>
        Accommodation for both students and speakers has been arranged on campus
        in <Link href={james_e.link} text={james_e.name} /> and{" "}
        <Link href={james_g.link} text={james_g.name} />. Towels and bedding are
        provided. Check-in is from 1 pm on Thursday 31st July in the{" "}
        <Link href={information_centre.link} text="Information Centre" />. If
        you do not have time to check-in before the introductory lecture then we
        suggest you bring your luggage to the first session and check in after
        the student talks before dinner. Check-out is by 9:30 am, so this should
        be done before the first lecture of the day. We have a room available to
        store luggage during the sessions on Friday 8th August.
      </p>
      <p>
        There is a separate registration fee that does not include accommodation
        for students who already live in York.
      </p>
    </main>
  );
}
