export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: ForecastCity;
}

export interface ForecastItem {
  dt: number;
  main: ForecastMain;
  weather: WeatherCondition[];
  clouds: { all: number };
  wind: Wind;
  visibility?: number;
  pop?: number;
  rain?: Precipitation3h;
  snow?: Precipitation3h;
  sys?: { pod?: "d" | "n" };
  dt_txt?: string;
}

export interface ForecastMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
  temp_kf?: number;
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface Precipitation3h {
  "3h"?: number;
}

export interface ForecastCity {
  id: number;
  name: string;
  coord: { lat: number; lon: number };
  country: string;
  population?: number;
  timezone?: number;
  sunrise?: number;
  sunset?: number;
}
