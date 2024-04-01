import {
  Building2,
  Castle,
  Cuboid,
  FlameKindling,
  Home,
  Landmark,
  Mountain,
  Sailboat,
  Tent,
  Tractor,
  TreePalm,
  Trees,
  University,
  Waves,
} from "lucide-react";

import { PropertyType } from "src/services/api/propertyTypes/propertyTypes.types";

import { CarouselItem } from "@/components/ui/carousel";

type PropertyTypeItemProps = {
  propertyType: PropertyType;
};

const iconMap = {
  APARTMENT: University,
  HOUSE: Home,
  VILLA: Landmark,
  BOAT: Sailboat,
  TENT: Tent,
  TREE_HOUSE: Trees,
  CAMPER_TRAILER: FlameKindling,
  TOWER: Building2,
  PALACE: Castle,
  APARTMENT_WITH_SEA_VIEW: Waves,
  FARM: Tractor,
  ISLAND_CABIN: TreePalm,
  MOUNTAIN_HOSTEL: Mountain,
  OTHER: Cuboid,
};

export function PropertyTypeItem({
  propertyType: { value, text },
}: PropertyTypeItemProps) {
  const Icon = iconMap[value];

  return (
    <CarouselItem className="flex basis-auto pl-5">
      <div className="flex w-full cursor-pointer flex-col items-center justify-center gap-1 border-b-[1px] border-transparent px-5 py-2 text-slate-500 transition-all duration-200 hover:border-black hover:text-black">
        <Icon className="text-inherit" />
        <p className="text-[13px] text-inherit">{text}</p>
      </div>
    </CarouselItem>
  );
}
