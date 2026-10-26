import { ccpem, iucr, eca, rvs, ibt, pdbe, bruker, nanosoft, dectris } from "../code/sponsors";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="my-4 flex flex-col items-center gap-2">
      <p className="text-gray-500">Additional support kindly received from:</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Logo sponsor={ccpem} />
        <Logo sponsor={iucr} />
        <Logo sponsor={eca} />
        <Logo sponsor={rvs} />
        <Logo sponsor={ibt} />
        <Logo sponsor={pdbe} />
        <Logo sponsor={bruker} />
        <Logo sponsor={dectris} />
        <Logo sponsor={nanosoft} />
      </div>
    </footer>
  );
}
