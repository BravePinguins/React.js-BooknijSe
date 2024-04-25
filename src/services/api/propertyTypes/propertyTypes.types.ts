import { z } from "zod";

export enum EPropertyType {
  APARTMENT = "APARTMENT",
  HOUSE = "HOUSE",
  VILLA = "VILLA",
  BOAT = "BOAT",
  TENT = "TENT",
  TREE_HOUSE = "TREE_HOUSE",
  CAMPER_TRAILER = "CAMPER_TRAILER",
  TOWER = "TOWER",
  PALACE = "PALACE",
  APARTMENT_WITH_SEA_VIEW = "APARTMENT_WITH_SEA_VIEW",
  FARM = "FARM",
  ISLAND_CABIN = "ISLAND_CABIN",
  MOUNTAIN_HOSTEL = "MOUNTAIN_HOSTEL",
  OTHER = "OTHER",
}

export const propertyTypeSchema = z.object({
  id: z.string(),
  value: z.nativeEnum(EPropertyType),
  text: z.string(),
});

export const propertyTypesSchema = z.array(propertyTypeSchema);

export type PropertyType = z.infer<typeof propertyTypeSchema>;
