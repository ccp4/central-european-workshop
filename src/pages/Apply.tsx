import { Heading, Link, List } from "../components/Elements";

export function Apply() {
  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <Heading text="Application process" />
      <p>
        Please send your application to{" "}
        <Link
          href="mailto:structural-biology-summer-school@york.ac.uk"
          text="structural-biology-summer-school@york.ac.uk"
        />{" "}
        and include:
      </p>
      <List>
        <li>
          A motivation letter (PDF format). A one-pager really. Please tell us
          why you think attending will be important for your future.
        </li>
        <li>
          An up to date CV (PDF format) including education. If applicable also
          include any publications, meetings attended and employment history.
        </li>
      </List>
      <p>
        Please CC your supervisor / line manager when emailing so we know they
        are onboard with the application.
      </p>
      <p>
        The application deadline has been extended. Applications must now be
        received by <b>Wednesday 11th June 2025</b>.
      </p>
      <p>
        Applicants will hear back from the organising committee by Monday 16th
        June. Successful applicants will be sent more information about the next
        steps for registration.
      </p>
      <Heading text="Cost" />
      <p>The cost for registration is as follows:</p>
      <List>
        <li>
          Academic (with accommodation) - <b>£625</b>
        </li>
        <li>
          Academic (without accommodation) - <b>£325</b>
        </li>
        <li>
          Industrial (with accommodation) - <b>£1200</b>
        </li>
        <li>
          Industrial (without accommodation) - <b>£900</b>
        </li>
      </List>
      <p>
        Applicants who do not live in York are encouraged to stay at the
        accommodation provided by the school in order to engage with the social
        and networking activities. All of the registration fees include meal
        costs. Applicants will have to pay for their own travel to and from
        York.
      </p>
      <Heading text="Bursaries" />
      <p>
        Fees for up to 10 BBSRC funded attendees will be covered by generous
        support from the BBSRC.
      </p>
      <p>
        Additionally, with support from the BCA, we are able to provide a
        limited number of bursaries for students from UK academic institutions.
      </p>
      <p>
        Please state on your application if you are funded by the BBSRC or are
        only able to attend the school with the help of a bursary.
      </p>
    </main>
  );
}
