export type Location = {
  place_id: string;
  osm_id: string;
  osm_type: string;
  licence: string;
  lat: string;
  lon: string;
  boundingbox: [string, string, string, string];
  class: string;
  type: string;
  display_name: string;
  display_place: string;
  display_address: string;
  address: {
    name: string;
    house_number: string;
    road: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
};

export type CityType = {
  id: number;
  name: string;
  country_id: number;
};

export type ApiLocationType = {
  type: "api";
  res: {
    data: Location[];
  };
};

export type MockLocationType = {
  type: "mock";
  data: CityType[];
};
