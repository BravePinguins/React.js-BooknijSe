import { MagnifyingGlass } from "@assets/icons/magnifying-glass";
import { TravelDateSelector } from "@components/molecules/TravelDateSelector/TravelDateSelector";
import { TravelDirectionSelector } from "@components/molecules/TravelDirectionSelector/TravelDirectionSelector";
import { TravelGuestsSelector } from "@components/molecules/TravelGuestsSelector/TravelGuestsSelector";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { NavTools } from "../NavTools/NavTools";

export function SearchSheet() {
  return (
    <Sheet>
      <SheetTrigger className="flex h-14 w-8/12 items-center gap-5 rounded-full border-2 border-zinc-100 pl-3 shadow-lg">
        <MagnifyingGlass />
        <div className="flex flex-col items-start">
          <p className="text-[13px] font-bold">Gdziekolwiek</p>
          <p className="text-[11px]">Dowolny tydzień · Dodaj gości</p>
        </div>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="flex h-full flex-col items-center justify-between bg-zinc-100"
      >
        <div className="flex flex-col gap-3">
          <TravelDirectionSelector />
          <TravelDateSelector />
          <TravelGuestsSelector />
        </div>
        <NavTools />
      </SheetContent>
    </Sheet>
  );
}
