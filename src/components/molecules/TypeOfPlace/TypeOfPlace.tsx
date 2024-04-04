import { Separator } from "@/components/ui/separator";
import { PlaceButton } from "@components/atoms/PlaceButton/PlaceButton";
import { PlaceEnum } from "@types/placeEnum.enum";
import { Fragment, useState } from "react";

export function TypeOfPlace() {
  const [selectedPlace, setSelectedPlace] = useState<PlaceEnum>(
    PlaceEnum.Dowolny
  );

  const placeTypes: PlaceEnum[] = [
    PlaceEnum.Dowolny,
    PlaceEnum.Pokoj,
    PlaceEnum.CalyDom,
  ];

  const handlePlaceClick = (place: PlaceEnum) => {
    setSelectedPlace(place);
  };

  return (
    <div>
      <h2 className="font-semibold text-2xl ml-3 mt-3">Rodzaj miejsca</h2>
      <h3 className="text-sm ml-3 mt-3">Dom tylko dla Ciebie.</h3>
      <div className="h-16 w-11/12 mx-auto mt-5 rounded-xl overflow-hidden border-[1px] border-gray-200 flex items-center">
        {placeTypes.map((place, index) => (
          <Fragment key={place}>
            <PlaceButton
              label={place}
              onClick={() => handlePlaceClick(place)}
              isActive={selectedPlace === place}
            />
            {index !== placeTypes.length - 1 && (
              <Separator orientation="vertical" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
