import { ReactNode } from "react";
import { NavLink } from "react-router";

export function Heading({ text }: { text: string }) {
  return <h2 className="mb-1 text-2xl font-bold">{text}</h2>;
}

export function Link({ href, text, newTab = false }: { href: string; text: string; newTab?: boolean }) {
  return (
    <a 
      href={href} 
      className="text-sky-600 underline hover:text-sky-800"
      {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {text}
    </a>
  );
}

export function InternalLink({ to, text }: { to: string; text: string }) {
  return (
    <NavLink to={to} className="text-sky-600 underline hover:text-sky-800">
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
