import { countries } from "./country";
import { CountryType } from "./types";

export const getCountryById = (id: number): CountryType | null => {
  return countries.find((item) => item.id === id) || null;
};
