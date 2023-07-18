import React, { useContext, useEffect, useState } from "react";
import JobOfferContext from "../../../contexts/JobOfferContext/JobOfferContext";

function CityInput() {
  const { searchCity, setSearchCity } = useContext(JobOfferContext);
  const cityLS = localStorage.getItem("city");

  const handleSelect = (event) => {
    setSearchCity(event.target.value);
    localStorage.setItem("city", event.target.value);
  };

  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/citiesOffers")
      .then((response) => response.json())
      .then((data) => setCityList(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <select onChange={handleSelect} value={cityLS || searchCity}>
      <option className="notselected" value="">
        France entière
      </option>
      {cityList.map((element) => {
        return (
          <option
            className="selected"
            value={element.city_job}
            key={element.id}
          >
            {element.city_job}
          </option>
        );
      })}
    </select>
  );
}

export default CityInput;
