import React, { useContext } from "react";
import SearchCityContext from "../../../contexts/SearchCityContext/SearchCityContext";

function CityInput() {
  const { searchCity, setSearchCity } = useContext(SearchCityContext);

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
