import type { SearchCounterPropsType } from "@types/searchCounterProps.type";
import { MinusCircle } from "@assets/icons/minus-circle";
import { PlusCircle } from "@assets/icons/plus-circle";
import { useState } from "react";

export function SearchCounter({ title, subtitle }: SearchCounterPropsType) {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => setCount((prevCount) => ++prevCount);

  const handleDecrement = () => {
    if (count > 0) setCount((prevCount) => --prevCount);
  };

  return (
    <div className="w-11/12 h-14 flex items-center justify-between">
      <div>
        <div className="font-semibold">{title}</div>
        <div>{subtitle}</div>
      </div>
      <div className="flex gap-2">
        <button onClick={handleDecrement}>
          <MinusCircle isZero={count === 0} />
        </button>
        <div className="flex items-center text-2xl">{count}</div>
        <button onClick={handleIncrement}>
          <PlusCircle />
        </button>
      </div>
    </div>
  );
}
