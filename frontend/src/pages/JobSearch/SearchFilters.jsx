import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import PropTypes from "prop-types";
import BlackButton from "../../components/Elements/BlackButton";
import InputListe from "../../components/Elements/InputListe";

function SearchFilters({ handleClickFilters }) {
  const [mensualSalary, setMensualSalary] = useState(1700);
  const annualSalary = mensualSalary * 12;

  const handleSliderChange = (event, newValue) => {
    setMensualSalary(newValue);
  };

  return (
    <>
      <div className="SearchFiltersTitle">
        <h1>Mes filtres</h1>
      </div>
      <div className="SearchFiltersSelection">
        <InputListe
          label="Mon rythme de travail idéal"
          inputMessage="Selectionner le mode de télétravail"
          data={[
            { value: "total", name: "Total" },
            { value: "partiel", name: "Partiel" },
            { value: "occasionnel", name: "Occasionnel" },
          ]}
        />
        <InputListe
          label="Mes technos"
          inputMessage="Selectionner les technologies maitrisées"
          data={[
            { value: "JavaScript", name: "JavaScript" },
            { value: "PHP", name: "PHP" },
            { value: "Java", name: "Java" },
          ]}
        />
        <div className="Salary">
          <h2>Mon salaire minimum</h2>
          <div>
            <Slider
              value={mensualSalary}
              min={1700}
              max={10000}
              step={100}
              onChange={handleSliderChange}
              orientation="horizontal"
              style={{ color: "white" }}
            />
          </div>
          <div className="AnnualSalary">
            <p>Brut Annuel</p>
            <p>{annualSalary} €</p>
          </div>
          <div className="MensualSalary">
            <p>Brut Mensuel</p>
            <p>{mensualSalary} €</p>
          </div>
        </div>
      </div>
      <div className="SearchFiltersEnd">
        <BlackButton
          buttonName="Appliquer"
          buttonFunction={handleClickFilters}
        />
      </div>
    </>
  );
}

SearchFilters.propTypes = {
  handleClickFilters: PropTypes.func.isRequired,
};

export default SearchFilters;
