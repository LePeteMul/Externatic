import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import InputImage from "../../components/Elements/InputImage";
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
          />
          <InputImage label="Logo de la société" />
          <InputText
            label="Adresse mail de contact"
            inputMessage={"Entrez l'information"}
          />
          <InputText
            label="Téléphone de contact"
            inputMessage={"Entrez l'information"}
          />
          <InputText
            label="Mot de passe provisoire"
            inputMessage={"Entrez l'information"}
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
