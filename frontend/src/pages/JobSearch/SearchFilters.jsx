import React, { useContext } from "react";
import { Slider } from "@material-ui/core";
import PropTypes from "prop-types";
import BlackButton from "../../components/Elements/BlackButton";
import InputListe from "../../components/Elements/InputListe";
import JobOfferContext from "../../contexts/JobOfferContext/JobOfferContext";

function SearchFilters({ handleClickFilters }) {
  const {
    setSelectedRemote,
    setSelectedTechno,
    mensualSalary,
    setMensualSalary,
  } = useContext(JobOfferContext);
  const annualSalary = mensualSalary * 12;

  const handleSelectRemote = (e) => {
    setSelectedRemote(e.target.value);
  };

  const handleSelectTechno = (e) => {
    setSelectedTechno(e.target.value);
  };

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
          handleChange={handleSelectRemote}
        />
        <InputListe
          label="Mes technos"
          inputMessage="Selectionner les technologies maitrisées"
          data={[
            { value: "Java", name: "Java" },
            { value: "C#", name: "C#" },
            { value: "PHP", name: "PHP" },
            { value: "Python", name: "Python" },
            { value: "React", name: "React" },
          ]}
          handleChange={handleSelectTechno}
        />
        <div className="Salary">
          <h2>Mon salaire minimum</h2>
          <div>
            <Slider
              value={mensualSalary}
              min={1500}
              max={10000}
              step={100}
              onChange={handleSliderChange}
              orientation="horizontal"
              style={{ color: "white", zIndex: 0 }}
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
