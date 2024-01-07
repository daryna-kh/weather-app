import { Button, Form } from "react-bootstrap";
import { useGeolocationList } from "./useGeolocationList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type City = {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
  local_names: {};
};

export function GetGeolocationList() {
  const [cityName, setCityName, fetchGeolocationList, list] = useGeolocationList();
  const navigate = useNavigate();

  function parseList(list: string) {
    const countryList: City[] = JSON.parse(list);

    countryList.map(function (item, index) {
      return (
        <div city-name={index}>
          <table>
            <tr>
              <td>{item.name}</td>
              <td>{item.country}</td>
              <td>{item.lat}</td>
              <td>{item.lon}</td>
              <td>{item.state}</td>
            </tr>
          </table>
        </div>
      );
    });
  }

  useEffect(() => {
    parseList(list);
  }, [list]);

  return (
    <>
      <Form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          fetchGeolocationList();
        }}
      >
        <Form.Control type="text" placeholder="Search" value={cityName} onChange={(e) => setCityName(e.target.value)} />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {list.length > 0 && parseList(list)}
    </>
  );
}
