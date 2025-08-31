import { TempUnit } from "@/global";

export function convertTemperature(val: number, param: TempUnit) {
  return param === "C" ? Math.round((val - 32) * 0.55 * 10) / 10 : Math.round((val * 0.55 + 32) * 10) / 10;
}
