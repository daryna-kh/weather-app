import { city as cities } from "@/mock/city/city";
import { cleanString } from "@/util/cleanString";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  location: string;
};

export const useSearch = () => {
  const [searchString, setSearchString] = useState("");
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      location: "",
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  // const watchLocation = watch();

  // useEffect(() => {
  //   const subscription = watch((data) => setSearchString(data.location || ""));
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  // const filteredCities = cities.filter((city) => cleanString(city.name).includes(cleanString(searchString)));

  return { register, onSubmit };
};
