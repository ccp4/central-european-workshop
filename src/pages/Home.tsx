import { InternalLink, List } from "../components/Elements";

export function Home() {
  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <div>
        <h1 className="mb-1 text-center text-3xl font-bold">
          CCP4 Structural Biology Summer School 2025
        </h1>
        <p className="text-center text-lg">
          University of York, UK &ndash; 31 July to 8 August
        </p>
      </div>
      <img
        src={`${import.meta.env.BASE_URL}panorama.jpg`}
        alt=""
        className="min-h-40 max-w-full object-cover"
      />
      <p>
        It is a great pleasure to announce the return of the CCP4 Structural
        Biology Summer School on macromolecular crystallography (MX), electron
        cryo-microscopy (cryo-EM), and associated techniques. The school aims to
        bring together early-career scientists from the UK, Europe and beyond
        and train them in the latest advances in structural biology, with a
        primary focus on MX and cryo-EM.
      </p>
      <p>
        This school was formerly the CCP4-BCA Summer School, which was run at
        the University of St. Andrews for many years. It has trained hundreds of
        crystallographers while also providing them with unforgettable
        collective memories. The York team aims to capture and continue the
        essence and tradition of the school, blending it with the best the City
        of York has to offer.
      </p>
      <p>
        This year, the programme has been extended from 7 to 9 days in order to
        include more cryo-EM content: map processing, docking, model building
        and refinement. Processing steps prior to this (image processing, 2D
        classification and 3D reconstruction) will not be covered in detail due
        to time constraints. All aspects of crystallographic structure solution
        will be covered during the workshop, from data collection through to
        phasing, refinement, validation and deposition. Please see the{" "}
        <InternalLink to="programme" text="programme" /> for more details.
      </p>
      <List>
        <li>
          Lectures and tutorials will be delivered by experts in the field,
          sometimes even software authors themselves!
        </li>
        <li>
          An exciting social programme will showcase some of the best the
          historical City of York can offer - and in summer.
        </li>
        <li>
          You will be able to work alongside world-leading scientists and
          methods developers on your own projects.
        </li>
      </List>
      <p>
        The school will be based at Tthe University of York's Campus West, with
        lectures and workshops in the main Biology building, and accommodation
        in nearby James College.
      </p>
      <InternalLink to="location" text="More details and directions" />
      <p>
        Spaces are limited. The applicant will have to demonstrate the need for
        this sort of specialist training, and be prepared to submit the e-mail
        address of a supervisor who will write a letter of recommendation in
        support of their application.
      </p>
      <p>We look forward to welcoming you in York this summer!</p>
      <p>
        The organisers,
        <br />
        Johan Turkenburg, Jon Agirre, Paul Bond, Chris Hill and Lucy Schofield.
      </p>
    </main>
  );
}
