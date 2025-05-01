import { bca, hampton } from "../code/sponsors";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="my-4 flex flex-col items-center gap-2">
      <p className="text-gray-500">Additional support kindly received from:</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Logo sponsor={bca} />
        <Logo sponsor={hampton} />
      </div>
    </footer>
  );
}
