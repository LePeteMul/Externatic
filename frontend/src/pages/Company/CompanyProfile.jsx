import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";

function CompanyProfile() {
  return (
    <div className="CompanyProfile">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="CompanyProfileTitle">
          <h1>Mon profil employeur</h1>
        </div>
        <div className="CompanyProfileInformations">
          <InputText label="Email" inputMessage="bob@groupama.fr" />
          <InputText label="Téléphone" inputMessage="06 99 99 99 99" />
          <InputText label="Nouveau mot de passe" inputMessage="*********" />
          <InputText
            label="Validation du nouveau mot de passe"
            inputMessage="****************"
          />
        </div>
        <div className="CompanyProfileEnd">
          <NavLink to="/company/dashboard">
            <BlackButton buttonName="Valider mes modifications" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
