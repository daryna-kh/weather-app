import { useEffect, useState } from "react";
import { useGetCurrentGeolocation } from "../../api/useGetCurrentGeolocation/useGetCurrentGeolocation";

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
