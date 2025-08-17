import { ccp4, csca, ccpem, cssb, dectris } from "../code/sponsors";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="my-4 flex flex-col items-center gap-2">
      <div className="flex flex-wrap justify-center gap-4">
        <Logo sponsor={ccp4} />
        <Logo sponsor={csca} />
        <Logo sponsor={ccpem} />
        <Logo sponsor={cssb} />
        <Logo sponsor={dectris} />
      </div>
    </footer>
  );
}
