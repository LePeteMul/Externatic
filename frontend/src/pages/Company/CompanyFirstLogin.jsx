import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";

function CompanyFirstLogin() {
  const navigate = useNavigate();

  const handleValidateNewPwdClick = () => {
    navigate("/company/presentation");
  };
  return (
    <div className="CompanyFirstLogin">
      <HeaderBasic />
      <section className="boxWithoutHeader">
        <div className="welcomeText">
          <h1>Bienvenue sur votre espace entreprise.</h1>
          <br />
          <h2>
            Veuillez personnaliser votre mot de passe pour vos prochaines
            connexions sur la plateforme.
          </h2>
        </div>
        <div className="password">
          <InputText
            className="passwordInputField"
            label="Mot de passe"
            inputMessage="Nouveau mot de passe"
            type="password"
          />
          <BlackButton
            className="validate"
            buttonName="Valider"
            buttonFunction={handleValidateNewPwdClick}
          />
        </div>
      </section>
    </div>
  );
}

export default CompanyFirstLogin;
