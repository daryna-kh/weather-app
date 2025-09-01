import { useEffect, useState } from "react";
import style from "./TemperatureSwitch.module.scss";
import { useCommonStore } from "@/store/useCommonStore";

export const TemperatureSwitch = () => {
  const setTempUnit = useCommonStore((s) => s.setTempUnit);
  const tempUnit = useCommonStore((s) => s.tempUnit);
  const [active, setActive] = useState(tempUnit === "F" ? 1 : 0);

  useEffect(() => {
    setActive(tempUnit === "F" ? 1 : 0);
  }, [tempUnit]);

  const onToggle = () => {
    const next = active === 0 ? 1 : 0;
    setActive(next);
    setTempUnit(next === 1 ? "F" : "C");
  };

  return (
    <div className={style.controls}>
      <div className={style.switch} onClick={onToggle} role="button" aria-pressed={active === 1}>
        <div className={`${style.slider} ${active === 1 ? style.right : ""}`} />
        {["c", "f"].map((item, i) => (
          <div className={`${style.option} ${i === active ? style.active : ""}`} key={item} data-unit={i}>
            °{item.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};
