import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";

export function TravelDateSelector() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Sheet>
      <SheetTrigger className="flex border-[1px] gap-5 p-3 bg-zinc-50 justify-center items-center flex-col shadow-2xl border-zinc-200 rounded-2xl w-full m-10">
        <div className="w-3">Kiedy</div>
        <div>Podaj daty</div>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-full">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mt-10"
        />
      </SheetContent>
    </Sheet>
  );
}
