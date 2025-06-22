import { countries } from "./country";
import { CountryType } from "./types";

export const getCountryById = (name: string): CountryType | null => {
  return countries.find((item) => item.name === name) || null;
};
