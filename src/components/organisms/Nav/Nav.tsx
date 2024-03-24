import { Logo } from "@assets/icons/logo";
import { FiltersSheet } from "@components/molecules/FiltersSheet/FiltersSheet";
import { SearchSheet } from "@components/molecules/SearchSheet/SearchSheet";

export function Nav() {
  return (
    <nav className="w-full h-20 z-0 fixed flex justify-center gap-4 items-center">
      <Logo />
      <SearchSheet />
      <FiltersSheet />
    </nav>
  );
}
