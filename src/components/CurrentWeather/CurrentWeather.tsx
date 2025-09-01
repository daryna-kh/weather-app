import { LocationIcon } from "@/share/icons/LocationIcon";
import { useCommonStore } from "@/store/useCommonStore";
import style from "./CurrentWeather.module.scss";
import { Arrow } from "@/share/icons/Arrow";
import { convertTemperature, findIcon } from "@/util";

export const CurrentWeather = () => {
  const data = useCommonStore((s) => s.currentWeatherData);
  const tempUnit = useCommonStore((s) => s.tempUnit);
  if (!data) return <>No data</>;

  return (
    <div>
      <div className={style.location}>
        <LocationIcon name={style.locationIcon} />
        {data.name}
      </div>

      <div className={style.main}>
        <div className={style.tempDisplay}>
          <div className={style.temp}>
            {convertTemperature(data.main.temp, tempUnit)}°{tempUnit}
          </div>
          {data.weather.map((weather, i) => (
            <div key={`${weather.id}-${i}`}>
              <div className={style.iconContainer}>
                <img className={style.weatherIcon} src={`/public/assets/images/icons/${findIcon(weather.id)}.png`} alt={weather.main} />
              </div>
              <div className={style.weatherDescription}>{weather.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.weatherDetails}>
        {data.visibility && (
          <div className={style.detailCard}>
            <div className={style.detailIcon}>👁️</div>
            <div className={style.detailLabel}>Visibility</div>
            <div className={style.detailValue}>{data.visibility / 1000} Km</div>
          </div>
        )}
        {data.wind && (
          <div className={style.detailCard}>
            <div className={style.detailIcon}>💨</div>
            <div className={style.detailLabel}>Wind </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className={style.detailValue}>
                <Arrow deg={data.wind.deg} />
              </div>
              <div className={style.detailValue}>{data.wind.speed} km/h</div>
            </div>
          </div>
        )}
        {data.main.humidity && (
          <div className={style.detailCard}>
            <div className={style.detailIcon}>💧</div>
            <div className={style.detailLabel}>Humidity</div>
            <div className={style.detailValue}>{data.main.humidity}%</div>
          </div>
        )}
        {data.main.pressure && (
          <div className={style.detailCard}>
            <div className={style.detailIcon}>🌡️</div>
            <div className={style.detailLabel}>Pressure</div>
            <div className={style.detailValue}>{data.main.pressure / 100} hPa</div>
          </div>
        )}
      </div>
    </div>
  );
};
