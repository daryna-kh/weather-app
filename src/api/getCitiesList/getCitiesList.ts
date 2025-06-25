import { cleanString } from "@/util/cleanString";
import { city as cities } from "@/mock/city/city";
import { CityType } from "@/mock/city/types";

export const getCitiesList = async (val: string): Promise<CityType[] | null> => {
  return new Promise((resolve) => {
    const getCitiesListTimeout = setTimeout(() => {
      try {
        const filteredCities = cities.filter((city) => cleanString(city.name).includes(cleanString(val)));
        resolve(filteredCities);
      } catch (err) {
        console.warn("Can not do fetch for getting cities list", err);
        resolve(null);
      }
    }, 1000);
  });
};
