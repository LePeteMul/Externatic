import React from "react";
import HeaderWave from "../../components/Header/HeaderWave";
// import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";
import InputText from "../../components/Elements/InputText";
import InputList from "../../components/Elements/InputList";
import InputImage from "../../components/Elements/InputImage";

function Modele() {
  return (
    <div className="HomePage">
      <HeaderWave />
      {/* <HeaderBasic /> */}
      <div className="boxWithoutHeader">
        <BlackButton
          buttonName="Suivant"
          buttonFunction={console.info("Fonction")}
        />
        <WhiteButton
          buttonName="Suivant"
          buttonFunction={console.info("Fonction")}
        />
        <InputText label="Label" inputMessage={"Entrez l'information"} />
        <InputList
          label="Label"
          inputMessage="Selectionner un choix"
          data={[
            { value: "choix1", name: "Choix n°1" },
            { value: "choix2", name: "Choix n°2" },
            { value: "choix3", name: "Choix n°3" },
          ]}
        />
        <InputImage label="CV" />
      </div>
    </div>
  );
}

export default Modele;
