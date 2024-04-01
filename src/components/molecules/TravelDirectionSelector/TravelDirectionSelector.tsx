import { MagnifyingGlass } from "@assets/icons/magnifying-glass";
import { DestinationItem } from "@components/atoms/DestinationItem/DestinationItem";
import { DESTINATIONS } from "src/consts/destinations";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function TravelDirectionSelector() {
  return (
    <div className="mt-8 flex w-full flex-col items-center justify-center gap-5 rounded-2xl border-[1px] border-zinc-200 bg-zinc-50 p-3 shadow-2xl">
      <h2 className="ml-5 self-start text-[24px] font-bold">Gdzie jedziesz?</h2>
      <Sheet>
        <SheetTrigger className="flex h-14 w-11/12 items-center gap-5 rounded-xl border-[1px] border-zinc-400 pl-3 shadow-sm">
          <MagnifyingGlass />
          <p className="text-sm">Wyszukaj kierunki </p>
        </SheetTrigger>
        <SheetContent className="flex h-full justify-center" side="bottom">
          <label className="mt-10 flex h-14 w-full items-center rounded-xl bg-zinc-100 pl-5">
            <MagnifyingGlass />
            <input
              placeholder="Wyszukaj kierunki"
              className="h-full w-full bg-zinc-100 pl-5 outline-none"
            />
          </label>
        </SheetContent>
      </Sheet>
      <div className="flex justify-around gap-5">
        {DESTINATIONS.map((destination, index) => (
          <DestinationItem
            key={index}
            image={destination.image}
            alt={destination.alt}
          />
        ))}
      </div>
    </div>
  );
}
