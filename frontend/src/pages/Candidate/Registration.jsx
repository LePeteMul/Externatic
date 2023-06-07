import React from "react";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";
import HeaderBasic from "../../components/Header/HeaderBasic";

function Registration() {
  const handleClick = () => {};

  return (
    <div>
      <HeaderBasic />

      <div className="boxWithoutHeader">
        <h2 className="info">Mon profil</h2>

        <div className="civilite">
          <h3>Genre :</h3>

          <InputText />
        </div>

        <div className="name">
          <h3>Name :</h3>

          <InputText />
        </div>

        <div className="prenom">
          <h3>Prénom :</h3>

          <InputText />
        </div>

        <div className="tel">
          <h3>Téléphone :</h3>

          <InputText />
        </div>

        <div className="ville">
          <h3>Ville :</h3>

          <InputText />
        </div>

        <div className="techno">
          <h3>Technologie maitrisées :</h3>

          <InputText />
        </div>

        <div className="validation">
          <BlackButton
            buttonName="Valider mes changements"
            buttonFunction={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Registration;
