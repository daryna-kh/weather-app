import { useState } from "react";
import style from "./TemperatureSwitch.module.scss";

export const TemperatureSwitch = () => {
  const [active, setActive] = useState(0);

  return (
    <div className={style.controls}>
      <div className={style.switch} onClick={() => setActive(Number(!Boolean(active)))}>
        <div className={style.slider}></div>
        {["c", "f"].map((item, i) => (
          <div className={`${style.option} ${active ? style.active : ""}`} key={`${item}-${i}`} data-unit={i}>
            °{item.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};
