export const useGetCurrentGeolocation = () => {
  const token = process.env.REACT_APP_CURRENT_GEOLOCATION_TOKEN;
  const url = `https://ipinfo.io/json?token=${token}`;

  const currentGeolocation = async () => {
    fetch(url)
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);
        await data;
      })
      .catch((error) => console.error("Error:", error));
  };

  return { currentGeolocation };
};
