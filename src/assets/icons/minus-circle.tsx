export function MinusCircle({ isZero }: { isZero: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={isZero ? 0.2 : 1}
      stroke="currentColor"
      className={`w-10 h-10 ${isZero ? "cursor-auto" : "cursor-pointer"}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
