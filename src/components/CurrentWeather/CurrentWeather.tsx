import { LocationIcon } from "@/share/icons/LocationIcon";
import { useCommonStore } from "@/store/useCommonStore";
import style from "./CurrentWeather.module.scss";

export const CurrentWeather = () => {
  const data = useCommonStore((s) => s.currentWeatherData);
  if (!data) return <>No data</>;

  return (
    <div>
      <div className={style.location}>
        <LocationIcon name={style.locationIcon} />
        Warsaw, Poland
      </div>

      <div className={style.main}>
        <div className={style.tempDisplay}>
          <div className={style.temp}>{data.main.temp}</div>
          {data.weather.map((weather, i) => (
            <div key={`${weather.id}-${i}`}>
              <div className={style.iconContainer}>
                <img className={style.weatherIcon} src={`/public/assets/images/icons/${weather.icon}.png`} alt={weather.main} />
              </div>
              <div className={style.weatherDescription}>{weather.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
