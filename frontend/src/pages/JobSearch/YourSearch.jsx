import React from "react";
import PropTypes from "prop-types";
import InputList from "../../components/Elements/InputList";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";

function YourSearch({ count, handleClick }) {
  return (
    <>
      <div className="JobSearchTitle">
        <h2>Etape {count}/3</h2>
        <h1>Votre recherche</h1>
      </div>
      <div className="JobSearchSelection">
        {count === 1 && (
          <InputList
            label="Je recherche un poste de"
            inputMessage="Selectionner un métier"
            data={[
              { value: "metier1", name: "Metier n°1" },
              { value: "metier2", name: "Metier n°2" },
              { value: "metier3", name: "Metier n°3" },
            ]}
          />
        )}
        {count === 2 && (
          <InputList
            label="Mon type de poste"
            inputMessage="Selectionner un contrat"
            data={[
              { value: "CDI", name: "CDI" },
              { value: "CDD", name: "CDD" },
              { value: "Stage", name: "Stage" },
            ]}
          />
        )}
        {count === 3 && (
          <InputText
            label="Mon périmètre de recherche"
            inputMessage="Indiquer la ville ou France entière"
          />
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
