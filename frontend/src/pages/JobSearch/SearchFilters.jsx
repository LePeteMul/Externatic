import React from "react";
import PropTypes from "prop-types";
import BlackButton from "../../components/Elements/BlackButton";
import InputList from "../../components/Elements/InputList";

function SearchFilters({ handleClickFilters }) {
  return (
    <>
      <div className="SearchFiltersTitle">
        <h1>Mes filtres</h1>
      </div>
      <div className="SearchFiltersSelection">
        <InputList
          label="Mon rythme de travail idéal"
          inputMessage="Selectionner le mode de télétravail"
          data={[
            { value: "total", name: "Total" },
            { value: "partiel", name: "Partiel" },
            { value: "occasionnel", name: "Occasionnel" },
          ]}
        />
        <InputList
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
          <div className="AnnualSalary">
            <p>Brut Annuel</p>
            <p>20 000 €</p>
          </div>
          <div className="MensualSalary">
            <p>Brut Mensuel</p>
            <p>1 667 €</p>
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
