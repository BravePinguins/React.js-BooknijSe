import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { SelectRangeEventHandler, DateRange } from "react-day-picker";

export function TravelDateSelector() {
  const [date, setDate] = useState<DateRange | undefined>(undefined);

  const handleDateSelect: SelectRangeEventHandler = (
    value: DateRange | undefined
  ) => {
    setDate(value);
  };

  return (
    <Sheet>
      <SheetTrigger className="flex border-[1px] gap-5 p-3 bg-zinc-50 justify-center items-center flex-col shadow-2xl border-zinc-200 rounded-2xl w-full">
        <div className="flex justify-between w-11/12 text-sm">
          <div className="w-3 text-zinc-600">Kiedy</div>
          <div className="font-semibold">Podaj daty</div>
        </div>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-full flex items-center flex-col">
        <h2 className="font-bold self-start text-2xl ml-3 mt-3">
          Kiedy planujesz podróż?
        </h2>
        <Calendar
          mode="range"
          selected={date}
          onSelect={handleDateSelect}
          className="rounded-md border mt-10 h-fit"
        />
      </SheetContent>
    </Sheet>
  );
}
