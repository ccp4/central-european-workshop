import { Heading, Link } from "../components/Elements";

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
      <Heading text="Accommodation" />
      <p>
        Accommodation for both students and speakers has been arranged on campus
        in James College{" "}
        <Link href="https://maps.app.goo.gl/ctGGmiNkq9P6cGi88" text="Block E" />{" "}
        and{" "}
        <Link href="https://maps.app.goo.gl/hG75A4R15adWfj2dA" text="Block G" />
        . Towels and bedding are provided. Check-in is from 1 pm on the 31st
        July. If you do not have time to check-in before the introductory
        lecture then we suggest you bring your luggage to the first session and
        check in after the student talks before dinner. Check-out is by 9:30 am,
        so this should be done before the first lecture of the day.
      </p>
      <p>
        Breakfast is provided for all registered students (whether you are
        staying in the campus accommodation or not) in the Galleria Restaurant
        in the Roger Kirk Centre from 7:30 am to 8:45 am.
      </p>
      <p>
        There is a separate registration fee that does not include accommodation
        for students who already live in York.
      </p>
    </main>
  );
}
