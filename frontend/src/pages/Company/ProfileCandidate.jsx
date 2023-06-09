import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import user from "../../assets/icons/user.png";
import BlackButton from "../../components/Elements/BlackButton";

function ProfileCandidate() {
  return (
    <div>
      <HeaderBasic />
      <div className="profile_candidate">
        <div className="picture">
          <img src={user} alt="" />
        </div>

        <div className="name">
          <h2>Marie Dupont</h2>
        </div>

        <div className="candidateResume">
          <InputText label="Email:" inputMessage="marie.dupont@gmail.com" />

          <InputText label="Telephone :" inputMessage="06 61 62 63 64" />

          <InputText label="Ville :" inputMessage="Nantes" />

          <InputText
            label="Technologies maitrisées :"
            inputMessage="JavaScript, PHP"
          />

          <InputText label="Consulter le CV :" inputMessage="Consulter le CV" />
        </div>
        <div className="profileButton">
          <NavLink to="/company/application">
            <BlackButton buttonName="Retour aux candidatures" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProfileCandidate;
