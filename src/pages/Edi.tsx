import { Heading, InternalLink, Link, List } from "../components/Elements";

export function Edi() {
  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <Heading text="Statement on equity, diversity and inclusion" />
      <p>
        The organisers are committed to making the school productive and
        enjoyable for everyone, regardless of sex, gender identity, sexual
        orientation, disability, age, physical appearance, body size, ethnicity,
        nationality or religion/belief.
      </p>
      <p>
        We are committed to achieving a balanced and diverse panel of speakers
        at all our events by inviting speakers of all races, ethnicities,
        genders, ages, abilities, religions, and sexual orientation without
        compromising the quality, and remaining within the topic, of the
        programme. All speakers will have agreed to the Code of Conduct prior to
        agreeing to speak at the event.
      </p>
      <p>
        We will not tolerate harassment of participants, students or tutors, in
        any form.
      </p>
      <p>
        As part of the registration process, attendees will be required to agree
        to adhere to the CCP4 Code of Conduct.
      </p>
      <Heading text="The CCP4 Code of Conduct" />
      <p>
        The latest version is available at 
        <Link href="https://www.ccp4.ac.uk/wp-content/uploads/2024/01/CCP4-Events-EDI-Policy-1.pdf " text=" the CCP4 website" />.
      </p>
      <p>Behave professionally.</p>
      <p>
        Harassment and sexist, racist, or exclusionary comments or jokes are not
        appropriate. Harassment includes sustained disruption of talks or other
        events, inappropriate physical contact, sexual attention or innuendo,
        deliberate intimidation, stalking, and photography or recording of an
        individual without consent. It also includes offensive or belittling
        comments related to sex, gender identity, sexual orientation,
        disability, age, physical appearance, body size, ethnicity, nationality
        or religion/belief.
      </p>
      <p>
        All communication should be appropriate for a professional audience
        including people of many different backgrounds. Sexual language and
        imagery are not appropriate.
      </p>
      <p>Be kind to others. Do not insult or put down other attendees.</p>
      <p>
        Delegates are reminded that the organisers reserve the right to remove
        any person who does not adhere to the Code of Conduct.
      </p>
      <Heading text="Incident reporting and resolution" />
      <p>
        If you observe someone making you or anyone else feel unsafe or
        unwelcome, please tell them so, and remind them of the Code of Conduct.
        If you are hesitant about addressing the person yourself, report it as
        soon as possible to a member of the Organising Committee. The Committee
        is committed to addressing and resolving the matter to the best of their
        abilities. Please use the <InternalLink to="/contact" text="Contact" /> section
        here, and explain what happened and who was involved so that we can
        investigate.
      </p>
      <p>
        If you would like to give any feedback to the CCP4 Equity, Diversity and
        Inclusion team please fill out the following{" "}
        <Link text="Google Form" href="https://forms.gle/jPgFzQe3yEYv2WVq6" />.
      </p>
      <p>
        When someone is asked to stop any behaviour that makes others
        uncomfortable, they are expected to comply immediately.
      </p>
      <p>
        In response to inappropriate behaviour organisers may take any action they deem appropriate,
        including warning the person in question, asking them to leave the
        event, or contacting relevant authorities.
      </p>
      <p>
        Thank you for your participation in the CCP4 community, and your efforts
        to keep our conference welcoming, respectful, and friendly for all
        participants!
      </p>
    </main>
  );
}
