import React from "react";
import { NavLink } from "react-router-dom";
import HeaderWave from "../../components/Header/HeaderWave";
import WhiteButton from "../../components/Elements/WhiteButton";

function ConfirmationCreation() {
  const companyName = "Groupama";

  return (
    <div className="Confirmation">
      <HeaderWave />
      <div className="boxWithoutHeader">
        <div className="ConfirmationMessage">
          <h1>
            L'entreprise {companyName} a bien été crée dans la base de données.
          </h1>
          <br />
          <h2>
            Vous pouvez dès à présent communiquer les identifiants de connexion
            auprès de l'entreprise.
          </h2>
          <h2>L'entreprise vous rencontacteras dans les meilleurs délais</h2>
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

export default ConfirmationCreation;
