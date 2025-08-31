import { useEffect, useState } from "react";
import style from "./TemperatureSwitch.module.scss";
import { useCommonStore } from "@/store/useCommonStore";

export const TemperatureSwitch = () => {
  const [active, setActive] = useState(0);
  const setTempUnit = useCommonStore((s) => s.setTempUnit);
  const tempUnit = useCommonStore((s) => s.tempUnit);

  useEffect(() => {
    if (tempUnit === "C") {
      setTempUnit("F");
    } else if (tempUnit === "F") {
      setTempUnit("C");
    }
  }, [active]);

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
