import { usePropertTypesListQuery } from "src/libs/react-query/hooks/propertyTypes/query/many";

import { PropertyTypeItem } from "@components/atoms/PropertyTypeItem/PropertyTypeItem";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function PropertyTypes() {
  const { data: propertyTypes, isLoading } = usePropertTypesListQuery();

  if (isLoading) return null;

  return (
    propertyTypes && (
      <>
        {
          <Carousel>
            <CarouselContent className="-ml-5">
              {propertyTypes.map((propertyType) => (
                <PropertyTypeItem
                  key={propertyType.id}
                  propertyType={propertyType}
                />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        }
      </>
    )
  );
}
