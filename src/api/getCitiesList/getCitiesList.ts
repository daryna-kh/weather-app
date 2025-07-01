import { cleanString } from "@/util/cleanString";
import { city as cities } from "@/mock/city/city";
import { CityType } from "@/mock/city/types";

export const getCitiesList = async (val: string): Promise<CityType[] | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredCities = cities.filter((city) => cleanString(city.name).includes(cleanString(val)));
      resolve(filteredCities);
    }, 1000);
  });
};
