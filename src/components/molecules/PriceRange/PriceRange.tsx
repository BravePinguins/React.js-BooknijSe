import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export function PriceRange() {
  const [minPrice, setMinPrice] = useState<number>(40);
  const [maxPrice, setMaxPrice] = useState<number>(1300);

  const handleMinPriceChange = (newMinPrice: number[]) => {
    setMinPrice(newMinPrice[0]);
  };

  const handleMaxPriceChange = (newMaxPrice: number[]) => {
    setMaxPrice(newMaxPrice[0]);
  };
  return (
    <div>
      <h2 className="font-semibold text-2xl ml-3 mt-3">Przedział cenowy</h2>
      <h3 className="text-sm ml-3 mt-3">Ceny za noc z opłatami i podatkami</h3>
      <div className="mt-2 ml-2">
        <h4>Minimalnie:</h4>
        <p>
          <Slider min={40} max={1300} onValueChange={handleMinPriceChange} />
          Cena: {minPrice} zł
        </p>
        <h4>Maksymalnie:</h4>
        <p>
          <Slider min={40} max={1300} onValueChange={handleMaxPriceChange} />
          Cena: {maxPrice} zł
        </p>
      </div>
    </div>
  );
}
