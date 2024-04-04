import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AdjustmentsHorizontal } from "@assets/icons/adjustments-horizaontal";
import { TypeOfPlace } from "../TypeOfPlace/TypeOfPlace";
import { PriceRange } from "../PriceRange/PriceRange";

export function FiltersSheet() {
  return (
    <div className="border-[1px] border-zinc-400 shadow-sm w-9 h-9 flex justify-center items-center rounded-full">
      <Sheet>
        <SheetTrigger>
          <AdjustmentsHorizontal />
        </SheetTrigger>
        <SheetContent className="h-full" side="bottom">
          <TypeOfPlace />
          <PriceRange />
        </SheetContent>
      </Sheet>
    </div>
  );
}
