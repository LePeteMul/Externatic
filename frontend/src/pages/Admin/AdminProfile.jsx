import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import InputList from "../../components/Elements/InputList";
import BlackButton from "../../components/Elements/BlackButton";

function AdminProfile() {
  return (
    <div className="AdminProfile">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="AdminProfileTitle">
          <h1>Mon profil administrateur</h1>
        </div>
        <div className="AdminProfileInformations">
          <InputList
            label="Genre"
            inputMessage="Je suis une femme"
            data={[
              { value: "choix1", name: "Je suis une femme" },
              { value: "choix2", name: "Je suis un homme" },
              { value: "choix3", name: "Je suis non binaire" },
            ]}
          />
          <InputText label="Nom" inputMessage="DURAND" type="text" />
          <InputText label="Prénom" inputMessage="Franck" type="text" />
          <InputText
            label="Email"
            inputMessage="f.durand@externatic.fr"
            type="email"
          />
          <InputText
            label="Téléphone"
            inputMessage="06 99 99 99 99"
            type="tel"
          />
        </div>
        <div className="AdminProfileEnd">
          <NavLink to="/admin/dashboard">
            <BlackButton buttonName="Valider les modifications" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
