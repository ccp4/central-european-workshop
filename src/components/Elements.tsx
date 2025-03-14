import { ReactNode } from "react";
import { NavLink } from "react-router";

export function Link({ to, text }: { to: string; text: string }) {
  return (
    <NavLink to={to} className="text-sky-600 hover:text-sky-800">
      {text}
    </NavLink>
  );
}

export function List({ children }: { children: ReactNode }) {
  return (
    <ul className="flex list-outside list-disc flex-col gap-2 pl-8">
      {children}
    </ul>
  );
}
