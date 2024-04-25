import { MagnifyingGlass } from "@assets/icons/magnifying-glass";

export function NavTools() {
  return (
    <div className="flex w-full items-center justify-between">
      <button className="font-semibold underline">Wyczyść wszystko</button>
      <button className="flex w-32 items-center justify-center gap-3 rounded-lg bg-rose-500 p-3 font-bold text-white">
        <MagnifyingGlass />
        <div>Szukaj</div>
      </button>
    </div>
  );
}
