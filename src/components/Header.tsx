import { NavLink } from "react-router";

export function Header() {
  return (
    <header>
      <div>
        <a href="https://www.ccp4.ac.uk">
          <img alt="CCP4" src="/logos/ccp4.png" />
        </a>
        <a href="https://york.ac.uk">
          <img alt="University of York" src="/logos/uoy.svg" />
        </a>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/programme">Programme</NavLink>
        <NavLink to="/tutors">Tutors</NavLink>
        <NavLink to="/location">Location</NavLink>
        <NavLink to="/edi">EDI</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/apply">Apply</NavLink>
      </nav>
    </header>
  );
}
