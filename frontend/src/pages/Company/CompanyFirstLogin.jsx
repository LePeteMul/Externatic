import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";

function CompanyFirstLogin() {
  const navigate = useNavigate();

  const handleValidateNewPwdClick = () => {
    navigate("/companypresentation");
  };
  return (
    <div className="CompanyFirstLogin">
      <HeaderBasic />
      <section className="boxWithoutHeader">
        <div className="welcomeText">
          Bienvenue sur votre espace entreprise.
          <br />
          <br />
          Veuillez personnaliser votre mot de passe pour vos prochaines
          connexions sur la plateforme.
        </div>

        <InputText
          className="passwordInputField"
          label="Mot de passe"
          inputMessage="Nouveau mot de passe"
        />
        <br />
        <BlackButton
          className="validate"
          buttonName="Valider"
          buttonFunction={handleValidateNewPwdClick}
        />
      </section>
    </div>
  );
}

export default CompanyFirstLogin;
