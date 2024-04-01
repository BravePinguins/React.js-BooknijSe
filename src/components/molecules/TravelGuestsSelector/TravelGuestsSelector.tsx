import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function TravelGuestsSelector() {
  return (
    <Sheet>
      <SheetTrigger className="flex w-full flex-col items-center justify-center gap-5 rounded-2xl border-[1px] border-zinc-200 bg-zinc-50 p-3 shadow-2xl">
        <div className="flex w-11/12 justify-between text-sm">
          <div className="w-3 text-zinc-600">Kto</div>
          <div className="font-semibold">Dodaj gości</div>
        </div>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-full"></SheetContent>
    </Sheet>
  );
}
