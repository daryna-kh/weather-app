import { useCommonStore } from "@/store/useCommonStore";
import style from "./Forecast.module.scss";
import { convertTemperature, findIcon } from "@/util";
export const Forecast = () => {
  const data = useCommonStore((s) => s.forecastData);
  const tempUnit = useCommonStore((s) => s.tempUnit);
  if (!data) return <>No data...</>;

  const forecastsAtNoon = data.list.filter((item) => {
    const date = new Date(item.dt * 1000);
    return date.getUTCHours() === 12;
  });

  return (
    <div className={style.forecast}>
      <h2 className={style.title}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        5-Day Forecast
      </h2>

      <div className={style.container}>
        {forecastsAtNoon.map((el, i) => (
          <div className={style.day}>
            <div className={style.date}>{new Date(el.dt * 1000).toISOString().split("T")[0]}</div>
            <img className={style.icon} src={`/public/assets/images/icons/${findIcon(el.weather[0].id)}.png`} alt="Icon" />
            <div className={style.temp}>
              {convertTemperature(el.main.temp, tempUnit)}°{tempUnit}
            </div>
            <div className={style.desc}>{el.weather[0].description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
