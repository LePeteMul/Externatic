import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";
import Textearea from "../../components/Elements/Textearea";

function CompanyPresentation() {
  const navigate = useNavigate();

  // const handleValidateModifClick = () => {

  // comportement de "valider la modification"
  // + REQUETE POST DB non encore implémentée

  // };

  const handleReturnDashboardClick = () => {
    navigate("/pro/dashboard");
  };

  return (
    <div className="CompanyPresentation">
      <HeaderBasic />
      <section className="boxWithoutHeader">
        <div className="title">
          Présentation de
          <br />
          votre entreprise
        </div>
        <div className="textAreaContainer">
          <Textearea className="textPres" rows={16} />
        </div>
        <div className="actionbuttons">
          <BlackButton
            className="validate"
            buttonName="Valider la modification"
            // buttonFunction={handleValidateModifClick}
          />{" "}
          <br />
          <WhiteButton
            className="validate"
            buttonName="Retour à mon espace"
            buttonFunction={handleReturnDashboardClick}
          />
        </div>
      </section>
    </div>
  );
}

export default CompanyPresentation;
