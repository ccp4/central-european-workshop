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
        . Towels and bedding are provided. Check-in is from 4 pm on the day of
        arrival. We suggest that students bring their luggage to the first
        session and check in after the student talks. Check-out is by 9:30 am,
        so this should be done before the first lecture of the day.
      </p>
      <p>
        For students and tutors staying in the accommodation, breakfast will be
        provided in the Galleria Restaraunt in the Roger Kirk Centre from 7:30
        am to 8:45 am.
      </p>
      <p>
        There is a separate registration fee that does not include accommodation
        for students who already live in York.
      </p>
    </main>
  );
}
