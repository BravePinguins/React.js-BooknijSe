import { Logo } from "@assets/images/Logo";
import { FiltersButton } from "@components/atoms/FiltersButton/FiltersButton";
import { SearchSheet } from "@components/atoms/SearchSheet/SearchSheet";

export function Nav() {
  return (
    <nav className="w-full h-20 z-0 fixed flex justify-center gap-4 items-center">
      <Logo />
      <SearchSheet />
      <FiltersButton />
    </nav>
  );
}
