import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import InputLogo from "../../components/Elements/InputLogo";
import BlackButton from "../../components/Elements/BlackButton";

function CompanyCreation() {
  return (
    <div className="CompanyCreation">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="CompanyCreationTitle">
          <h1>Nouvelle entreprise</h1>
        </div>
        <div className="CompanyCreationInformations">
          <InputText
            label="Nom de la société"
            inputMessage={"Entrez l'information"}
            type="text"
          />
          <InputLogo label="Logo de la société" />
          <InputText
            label="Adresse mail de contact"
            inputMessage={"Entrez l'information"}
            type="email"
          />
          <InputText
            label="Téléphone de contact"
            inputMessage={"Entrez l'information"}
            type="tel"
          />
          <InputText
            label="Mot de passe provisoire"
            inputMessage={"Entrez l'information"}
            type="password"
          />
        </div>
        <div className="CompanyCreationEnd">
          <NavLink to="/admin/creationconfirmation">
            <BlackButton buttonName="Valider la création" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CompanyCreation;
