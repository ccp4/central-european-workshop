import { ccp4, Sponsor, york } from "../code/sponsors";

function Logo({ sponsor }: { sponsor: Sponsor }) {
  return (
    <a href={sponsor.url}>
      <img
        src={`${import.meta.env.BASE_URL}logos/${sponsor.logo}`}
        alt={sponsor.name}
        className="h-15"
      />
    </a>
  );
}

export function Header() {
  return (
    <header className="flex justify-evenly gap-2">
      <Logo sponsor={ccp4} />
      <Logo sponsor={york} />
    </header>
  );
}
