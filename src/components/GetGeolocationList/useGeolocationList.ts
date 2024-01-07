import { getGeolocation } from "../../api/getGeolocation";
import { useState } from "react";

export function useGeolocationList(): [string, React.Dispatch<React.SetStateAction<string>>, () => Promise<void>, string] {
  const [cityName, setCityName] = useState<string>("");
  const [list, setList] = useState<string>("");

  const fetchGeolocationList = async () => {
    const resp = await getGeolocation(cityName);
    setList(resp.request.response);
  };

  return [cityName, setCityName, fetchGeolocationList, list];
}
