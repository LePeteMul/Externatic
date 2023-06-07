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
    <div>
      <HeaderBasic />

      <div className="registration">
        <div className="page_title">
          <h1>M'inscrire </h1>
        </div>

        <div className="inputs">
          <InputText
            label="Nom du contact :"
            inputMessage={"Entrez l'information"}
          />

          <InputText
            label="Mot de passe :"
            inputMessage={"Entrez l'information"}
          />
          <img className="eyeIcon1" src={eye} alt="" />

          <InputText
            label="Confirmer le mot de passe :"
            inputMessage={"Entrez l'information"}
          />
          <img className="eyeIcon2" src={eye} alt="" />

          <InputText
            label="adresse mail de contact :"
            inputMessage={"Entrez l'information"}
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
