import { AdjustmentsHorizontal } from "@assets/icons/adjustments-horizaontal";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function FiltersSheet() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full border-[1px] border-zinc-400 shadow-sm">
      <Sheet>
        <SheetTrigger>
          <AdjustmentsHorizontal />
        </SheetTrigger>
        <SheetContent className="h-full" side="bottom"></SheetContent>
      </Sheet>
    </div>
  );
}
