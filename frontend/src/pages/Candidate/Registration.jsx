import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";
import eye from "../../assets/icons/eye.png";

function Registration() {
  const [confirmation, setConfirmation] = useState(false);

  const handleConfirmation = () => {
    setConfirmation(true);
  };

  return (
    <div className="registration">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="registrationTitle">
          <h1>M'inscrire </h1>
        </div>
        <div className="registrationDetails">
          <InputText label="Nom" inputMessage={"Entrez l'information"} />
          <InputText label="Prénom" inputMessage={"Entrez l'information"} />
          <InputText
            label="Adresse mail :"
            inputMessage={"Entrez l'information"}
          />
          <InputText
            label="Mot de passe"
            inputMessage={"Entrez l'information"}
            image={eye}
          />
          <InputText
            label="Confirmer le mot de passe :"
            inputMessage="Entrez l'information"
            image={eye}
          />
        </div>
        <div className="btn_registration">
          <BlackButton
            buttonName="Je m'inscris"
            buttonFunction={handleConfirmation}
          />
        </div>

        {confirmation && (
          <div className="conf_registration">
            Un email de confirmation vous a été envoyé à XYZ@gmail.com Consultez
            votre boite mail et suivez les instructions pour confirmer votre
            inscription
          </div>
        )}
      </div>
    </div>
  );
}

export default Registration;
