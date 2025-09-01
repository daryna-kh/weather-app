import { TempUnit } from "@/global";
import { weatherVariants } from "@/mock/weatherVariants/weatherVariants";

export function cleanString(s: string): string {
  return s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^A-Za-zА-Яа-я0-9]/gu, "")
    .toLowerCase();
}

export function convertTemperature(val: number, param: TempUnit) {
  return param === "C" ? Math.round(val - 273.15) : Math.round(((val - 273.15) * 9) / 5 + 32);
}

export function findIcon(val: number) {
  return weatherVariants.find((item) => item.id === val)?.icon;
}
