import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
        <h2 className="font-bold self-start text-2xl ml-3 mt-3">
          Kto przyjeżdża?
        </h2>
        <div className="w-11/12 h-14 flex items-center justify-between">
          <div>
            <div className="font-semibold">Dorośli</div>
            <div>Od 13 lat</div>
          </div>
          <div className="flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div>0</div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
