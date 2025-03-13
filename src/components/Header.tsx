import { NavLink } from "react-router";

export function Header() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/programme">Programme</NavLink>
      <NavLink to="/accommodation">Accommodation</NavLink>
      <NavLink to="/location">Location</NavLink>
      <NavLink to="/social">Social</NavLink>
      <NavLink to="/edi">EDI</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/apply">Apply</NavLink>
    </nav>
  );
}
