import { useGetCurrentGeolocation } from "@/api/useGetCurrentGeolocation/useGetCurrentGeolocation";
import { useEffect } from "react";

export const HomePage = () => {
  const { currentGeolocation } = useGetCurrentGeolocation();

  const getGeolocation = async () => {
    return await currentGeolocation();
  };

  useEffect(() => {
    console.log(getGeolocation());
  }, []);
  return <></>;
};
