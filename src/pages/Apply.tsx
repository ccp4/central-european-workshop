import { Heading, Link, List } from "../components/Elements";

export function Apply() {
  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <Heading text="Registration" />
      <p>
      The workshop is open to structural biologists from any part of the world who need to develop knowledge and skills
      in macromolecular crystallography and electron cryo-microscopy (cryo-EM), particularly in using software for data processing and analysis.
      </p>
      <p>
      The programme is designed mainly for beginners in the field, however, even experienced users can
      gain from the opportunity to discuss problems with the experts in person. The workshop is mainly intended for
      PhD students and early career researchers, nevertheless, researchers at any career stage are welcome to apply.
      </p>
      <p>
        Please send your application to{" "}
        <Link
          href="mailto:martin.maly@mrc-lmb.cam.ac.uk"
          text="martin.maly@mrc-lmb.cam.ac.uk"
        />{" "}
        and include:
      </p>
      <List>
        <li>
          A <b>motivation letter</b> (PDF format), maximum of one page. Please tell us
          why you think attending will be important for your future. It is desirable to bring
          experimental data to work on during the workshop, so please also include a brief description
          of your project.
        </li>
        <li>
          An up to date <b>curriculum vitae</b> (PDF format) including education, maximum of one page. If applicable also
          include any publications, meetings or workshops attended and employment history.
        </li>
      </List>
      <p>
        We require that your supervisor or line manager will send us their <b>letter of reference </b>
        before the registration deadline so we know they are onboard with the application.
      </p>
      <p>
        Registration will be open until <b>Saturday 28th February 2026</b> or when 60 applications have been received.
      </p>
      <p>
        Applicants will hear back from the organising committee by Monday 13th
        March. We will select 30 participants who will be sent more information about the next
        steps for registration.
      </p>
      <p>
        We are committed to provide inclusive environment for all participants. Please let us know
        if you have any specific requirements that we should be aware of to help you attend the workshop.
        Also, please let us know if you would be interested in the availability of on-site childcare support while attending the workshop.
      </p>
      <Heading text="Cost" />
      <p><b>The participant fee is 5000 CZK.</b></p>
      <p>
        It covers accommodation at the venue (from Saturday 25th April to Saturday 2nd May)
        and all meals during the workshop (from dinner on Sunday 26th April to lunch on Saturday 2nd May),
        as well as workshop materials. We do not provide any travel bursaries.
      </p>
      <p>
        Selected participants will be supported by the European Crystallographic Association.
      </p>
  
    </main>
  );
}