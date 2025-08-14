import { CityType } from "@/api/getLocationList/types";
import { city } from "./city";

export const getCountryById = (name: string): CityType | null => {
  return city.find((item) => item.name === name) || null;
};
