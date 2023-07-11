import React, { useContext } from "react";
import JobOfferContext from "../../../contexts/JobOfferContext/JobOfferContext";

function CityInput() {
  const { searchCity, setSearchCity } = useContext(JobOfferContext);

  const handleChangeInput = (event) => {
    setSearchCity(event.target.value);
  };

  return (
    <input
      className="selected"
      type="text"
      value={searchCity}
      placeholder="France entière"
      onChange={handleChangeInput}
    />
  );
}

export default CityInput;
