export const getCurrentPosition = (): Promise<GeolocationPosition> => {
  return new Promise((res, rej) => {
    if (!("geolocation" in navigator)) {
      return rej({
        code: 0,
        message: "Geolocation is not supported by your browser",
      } as GeolocationPositionError);
    }
    navigator.geolocation.getCurrentPosition(
      (pos: GeolocationPosition) => {
        res(pos);
      },
      (err: GeolocationPositionError) => {
        rej(err);
      }
    );
  });
};
