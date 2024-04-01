import { useState } from "react";
import { DateRange, SelectRangeEventHandler } from "react-day-picker";

import { Calendar } from "@/components/ui/calendar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function TravelDateSelector() {
  const [date, setDate] = useState<DateRange | undefined>(undefined);

  const handleDateSelect: SelectRangeEventHandler = (
    value: DateRange | undefined
  ) => {
    setDate(value);
  };

  return (
    <Sheet>
      <SheetTrigger className="flex w-full flex-col items-center justify-center gap-5 rounded-2xl border-[1px] border-zinc-200 bg-zinc-50 p-3 shadow-2xl">
        <div className="flex w-11/12 justify-between text-sm">
          <div className="w-3 text-zinc-600">Kiedy</div>
          <div className="font-semibold">Podaj daty</div>
        </div>
      </SheetTrigger>
      <SheetContent side="bottom" className="flex h-full justify-center">
        <Calendar
          mode="range"
          selected={date}
          onSelect={handleDateSelect}
          className="mt-10 h-fit rounded-md border"
        />
      </SheetContent>
    </Sheet>
  );
}
