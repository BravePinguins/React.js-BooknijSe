import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MagnifyingGlass } from "@assets/icons/magnifying-glass";
import { DestinationItem } from "@components/atoms/DestinationImages/DestinationImages";
import { DESTINATIONS } from "src/consts/destinations";

export function TravelDirectionSelector() {
  return (
    <div className="border-[1px] gap-5 p-3 bg-zinc-50 flex justify-center items-center flex-col shadow-2xl border-zinc-200 rounded-2xl w-full m-10">
      <h2 className="self-start ml-5 text-[24px] font-bold">Gdzie jedziesz?</h2>
      <Sheet>
        <SheetTrigger className="h-14 w-11/12 flex pl-3 border-[1px] gap-5 items-center border-zinc-400 rounded-xl shadow-sm">
          <MagnifyingGlass />
          <p className="text-sm">Wyszukaj kierunki </p>
        </SheetTrigger>
        <SheetContent className="h-full flex justify-center" side="bottom">
          <label className="bg-zinc-100 h-14 mt-10 w-full flex items-center pl-5 rounded-xl">
            <MagnifyingGlass />
            <input
              placeholder="Wyszukaj kierunki"
              className="bg-zinc-100 w-full h-full outline-none pl-5"
            />
          </label>
        </SheetContent>
      </Sheet>
      <div className="flex gap-5 justify-around">
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
