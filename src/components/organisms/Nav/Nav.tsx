import { Logo } from "@assets/icons/logo";
import { FiltersSheet } from "@components/molecules/FiltersSheet/FiltersSheet";
import { SearchSheet } from "@components/molecules/SearchSheet/SearchSheet";

import { PropertyTypes } from "../PropertyTypes/PropertyTypes";

export function Nav() {
  return (
    <nav className="fixed z-0 w-full">
      <div className="my-10 flex h-20 w-full items-center justify-center gap-4 border-b-2 border-slate-200 pb-5">
        <Logo />
        <SearchSheet />
        <FiltersSheet />
      </div>
      <div className="mx-20">
        <PropertyTypes />
      </div>
    </nav>
  );
}
