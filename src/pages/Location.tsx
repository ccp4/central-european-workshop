import { information_centre, james_e, james_g } from "../code/locations";
import { Heading, InternalLink, Link } from "../components/Elements";

export function Location() {
  const video =
    "https://www.york.ac.uk/media/abouttheuniversity/campus/herovideo";

  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <div className="justify-center gap-4">
        <img
          src="https://konferencnizamek.cz/wp-content/uploads/photo-gallery/imported_from_media_libray/z%C3%A1mek.jpg?bwg=1549014679"
          alt="Nové Hrady venue"
         className="min-h-40 max-w-full object-cover text-center"
          width="50%"
          height="50%"
       />
      </div>
      <p>
        The workshop will be held at the <a href="https://konferencnizamek.cz/en/">
        Nové Hrady Castle</a> in Czechia. 
      </p>
    </main>
  );
}
