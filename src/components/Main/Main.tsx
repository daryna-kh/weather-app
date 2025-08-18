import { CurrentWeather } from "../CurrentWeather/CurrentWeather";
import { Error as ErrorView } from "../Error/Error";
import { Forecast } from "../Forecast/Forecast";
import style from "./Main.module.scss";
import { useMain } from "./useMain";

export const Main = () => {
  const { hasCoords, isInitialLoading, bothFailed } = useMain();

  function renderContent() {
    if (!hasCoords) return <ErrorView message="No coords" />;
    if (isInitialLoading) return <div>Load ...</div>;
    if (bothFailed) return <ErrorView message="Smth went wrong" />;

    return (
      <>
        <CurrentWeather />
        <Forecast />
      </>
    );
  }

  return <div className={style.content}>{renderContent()}</div>;
};
