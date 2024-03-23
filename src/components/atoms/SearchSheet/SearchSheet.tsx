import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MagnifyingGlass } from "@assets/icons/magnifying-glass";
import { TravelDateSelector } from "@components/molecules/TravelDateSelector/TravelDateSelector";
import { TravelDirectionSelector } from "@components/molecules/TravelDirectionSelector/TravelDirectionSelector";

export function SearchSheet() {
  return (
    <Sheet>
      <SheetTrigger className="h-14 w-8/12 flex pl-3 border-2 gap-5 items-center border-zinc-100 rounded-full shadow-lg">
        <MagnifyingGlass />
        <div className="items-start flex flex-col">
          <p className="font-bold text-[13px]">Gdziekolwiek</p>
          <p className="text-[11px]">Dowolny tydzień · Dodaj gości</p>
        </div>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="h-full flex flex-col justify-around items-center bg-zinc-100"
      >
        <TravelDirectionSelector />
        <TravelDateSelector />
      </SheetContent>
    </Sheet>
  );
}
