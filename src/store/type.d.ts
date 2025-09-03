export interface CommonState {
  location: OptionsType | null;
  currentWeatherData: WeatherResponse | null;
  forecastData: ForecastResponse | null;
  tempUnit: TempUnit;
  setLocation: (location: OptionsType) => void;
  setCurrentWeatherData: (data: WeatherResponse) => void;
  setForecastData: (data: ForecastResponse) => void;
  setTempUnit: (unit: TempUnit) => void;
}
