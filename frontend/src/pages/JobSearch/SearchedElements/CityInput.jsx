import React, { useContext } from "react";
import JobOfferContext from "../../../contexts/JobOfferContext/JobOfferContext";

function CityInput() {
  const { searchCity, setSearchCity } = useContext(JobOfferContext);
  const cityLS = localStorage.getItem("city");

  const handleChangeInput = (event) => {
    setSearchCity(event.target.value);
    localStorage.setItem("city", event.target.value);
  };

  return (
    <input
      className="selected"
      type="text"
      value={cityLS || searchCity}
      placeholder="France entière"
      onChange={handleChangeInput}
    />
  );
}

export default CityInput;
