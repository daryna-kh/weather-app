import { WeatherResponse } from "@/api/getDataByCity/type";
import { getRandomWeather } from "./getRandomWeather";

export const londonWeatherMocks: WeatherResponse[] = [
  {
    coord: { lon: -0.1276, lat: 51.5072 },
    weather: [getRandomWeather()],
    base: "stations",
    main: {
      temp: 18.3,
      feels_like: 18.0,
      temp_min: 16.0,
      temp_max: 20.5,
      pressure: 1016,
      humidity: 65,
    },
    visibility: 10000,
    wind: {
      speed: 4.1,
      deg: 250,
    },
    clouds: { all: 75 },
    dt: 1719382800,
    sys: {
      country: "GB",
      sunrise: 1719379200,
      sunset: 1719441000,
    },
    timezone: 3600,
    id: 2,
    name: "London",
    cod: 200,
  },
];
