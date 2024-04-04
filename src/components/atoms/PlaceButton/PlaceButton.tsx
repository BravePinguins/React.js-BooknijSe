import { PlaceButtonProps } from "@types/placeButtonProps.type";

export function PlaceButton({ label, onClick, isActive }: PlaceButtonProps) {
  return (
    <button
      className={`w-full h-full text-center cursor-pointer ${
        isActive ? "text-white bg-zinc-700 bg-gradient-to-r from-zinc-950" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
