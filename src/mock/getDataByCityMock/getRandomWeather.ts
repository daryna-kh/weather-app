import { Weather } from "@/api/getDataByCity/type";
import { weatherVariants } from "../weatherVariants/weatherVariants";

export const getRandomWeather = (): Weather => {
  const index = Math.floor(Math.random() * weatherVariants.length);
  return weatherVariants[index];
};
