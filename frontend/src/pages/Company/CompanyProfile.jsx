import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import InputImage from "../../components/Elements/InputImage";
import BlackButton from "../../components/Elements/BlackButton";

function CompanyProfile() {
  return (
    <div className="CompanyProfile">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="CompanyProfileTitle">
          <h1>Mon profil administrateur</h1>
        </div>
        <div className="CompanyProfileInformations">
          <InputText label="Email" inputMessage="bob@groupama.fr" />
          <InputText label="Téléphone" inputMessage="06 99 99 99 99" />
          <InputImage label="Logo de la société" />

          <InputText label="Mot de passe" inputMessage="*********" />
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
