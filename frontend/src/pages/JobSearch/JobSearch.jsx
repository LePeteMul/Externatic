import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputList from "../../components/Elements/InputList";
import BlackButton from "../../components/Elements/BlackButton";

function JobSearch() {
  return (
    <div className="JobSearch">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="JobSearchTitle">
          <h2>Etape 1/3</h2>
          <h1>Votre recherche</h1>
        </div>
        <div className="JobSearchSelection">
          <InputList
            label="Je recherche un poste de"
            inputMessage="Selectionner un métier"
            data={[
              { value: "metier1", name: "Metier n°1" },
              { value: "metier2", name: "Metier n°2" },
              { value: "metier3", name: "Metier n°3" },
            ]}
          />
        </div>
        <div className="JobSearchEnd">
          <BlackButton
            buttonName="Suivant"
            buttonFunction={console.info("Fonction")}
          />
        </div>
      </div>
    </div>
  );
}

export default JobSearch;
