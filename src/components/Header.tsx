import { ccp4, cssb } from "../code/sponsors";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="flex items-center justify-evenly gap-2">
      <Logo sponsor={ccp4} />
      <h1 className="mb-1 text-center text-3xl font-bold">
        CCP4 Central European Workshop 2027
      </h1>
      <Logo sponsor={cssb} />
    </header>
  );
}
