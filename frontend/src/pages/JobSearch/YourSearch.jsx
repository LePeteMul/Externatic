import React from "react";
import PropTypes from "prop-types";
import BlackButton from "../../components/Elements/BlackButton";
import CityInput from "./SearchedElements/CityInput";
import ContractInput from "./SearchedElements/ContractInput";
import JobInput from "./SearchedElements/JobInput";

function YourSearch({ count, handleClick }) {
  return (
    <>
      <div className="JobSearchTitle">
        <h2>Etape {count}/3</h2>
        <h1>Votre recherche</h1>
      </div>
      <div className="JobSearchSelection">
        {count === 1 && (
          <div className="InputText">
            <label htmlFor="label">Je recherche un poste de </label>
            <JobInput />
          </div>
        )}
        {count === 2 && (
          <div className="InputList">
            <label htmlFor="label">Mon type de poste </label>
            <ContractInput />
          </div>
        )}
        {count === 3 && (
          <div className="InputList">
            <label htmlFor="label">Ma localisation </label>
            <CityInput />
          </div>
        )}
      </div>
      <div className="JobSearchEnd">
        <BlackButton buttonName="Suivant" buttonFunction={handleClick} />
      </div>
    </>
  );
}

YourSearch.propTypes = {
  count: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default YourSearch;
