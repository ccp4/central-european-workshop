import { NavLink } from "react-router";

export function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/programme">Programme</NavLink>
    </nav>
  );
}
