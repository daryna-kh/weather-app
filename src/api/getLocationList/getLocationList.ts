import { locationApiKey } from "@/share/constans/api";
import { getLocation } from "../axiousInstance";
import { cleanString } from "@/util/cleanString";
import { city as cities } from "@/mock/city/city";
import { ApiLocationType, MockLocationType } from "./types";

export const getLocationList = async (val: string): Promise<ApiLocationType | MockLocationType> => {
  if (locationApiKey) {
    const data = await getLocation<Location[], any>(`/v1/autocomplete?dedupe=1&key=${locationApiKey}&q=${val}&limit=5normalizeaddress=1`);
    return { type: "api", res: data };
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = cities.filter((city) => cleanString(city.name).includes(cleanString(val)));
        resolve({ type: "mock", data: data });
      }, 1000);
    });
  }
};
