import React from "react";
import { NavLink } from "react-router-dom";
import HeaderWave from "../../components/Header/HeaderWave";
import WhiteButton from "../../components/Elements/WhiteButton";

function ConfirmationDeletion() {
  const companyName = "Groupama";

  return (
    <div className="Confirmation">
      <HeaderWave />
      <div className="boxWithoutHeader">
        <div className="ConfirmationMessage">
          <h1>
            L'entreprise {companyName} a bien été supprimée de la base de
            données.
          </h1>
        </div>
        <div className="ConfirmationButton">
          <NavLink to="/admin/dashboard">
            <WhiteButton buttonName="Retour à l'administration" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationDeletion;
