import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchCounter } from "@components/atoms/SearchCounter/SearchCounter";

export function TravelGuestsSelector() {
  return (
    <Sheet>
      <SheetTrigger className="flex border-[1px] gap-5 p-3 bg-zinc-50 justify-center items-center flex-col shadow-2xl border-zinc-200 rounded-2xl w-full">
        <div className="flex justify-between w-11/12 text-sm">
          <div className="w-3 text-zinc-600">Kto</div>
          <div className="font-semibold">Dodaj gości</div>
        </div>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="h-full flex flex-col gap-3 items-center"
      >
        <h2 className="font-bold self-start text-2xl m-3">Kto przyjeżdża?</h2>
        <SearchCounter title="Dorośli" subtitle="Od 13 lat" />
        <SearchCounter title="Dzieci" subtitle="Od 2 do 12 lat" />
        <SearchCounter title="Małe dzieci" subtitle="Poniżej 2 lat" />
        <SearchCounter title="Zwierzęta domowe" />
      </SheetContent>
    </Sheet>
  );
}
