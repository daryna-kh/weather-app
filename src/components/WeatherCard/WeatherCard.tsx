import { useCommonStore } from "@/store/useCommonStore";

export const WeatherCard = () => {
  const data = useCommonStore((state) => state.currentWeatherData);

  return data ? (
    <div>
      <div>
        <img src={`/public/assets/images/icons/.png`} alt="" />
      </div>
    </div>
  ) : null;
};
