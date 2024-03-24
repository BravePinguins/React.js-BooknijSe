import { MagnifyingGlass } from "@assets/icons/magnifying-glass";

export function NavTools() {
  return (
    <div className="flex justify-between w-full items-center">
      <button className="underline font-semibold">Wyczyść wszystko</button>
      <button className="flex justify-center items-center gap-3 font-bold rounded-lg bg-rose-500 w-32 text-white p-3">
        <MagnifyingGlass />
        <div>Szukaj</div>
      </button>
    </div>
  );
}
