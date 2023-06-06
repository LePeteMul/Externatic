import React from "react";
import PropTypes from "prop-types";
import BlackButton from "../../components/Elements/BlackButton";

function SearchFilters({ handleClickFilters }) {
  return (
    <div className="SearchFilters">
      <h1>Mes filtres</h1>
      <BlackButton buttonName="Appliquer" buttonFunction={handleClickFilters} />
    </div>
  );
}

SearchFilters.propTypes = {
  handleClickFilters: PropTypes.func.isRequired,
};

export default SearchFilters;
