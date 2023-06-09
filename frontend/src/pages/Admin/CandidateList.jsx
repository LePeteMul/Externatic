import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import CandidateCard from "../../components/Elements/CandidateCard";
import userlogo from "../../assets/icons/userIcon2.png";
import BlackButton from "../../components/Elements/BlackButton";

function CandidateList() {
  return (
    <div className="CandidateList">
      <HeaderBasic />

      <div className="boxWithoutHeader">
        <div className="CandidateListTitle">
          <h1>Candidats</h1>
        </div>

        <div className="candidate">
          <CandidateCard
            profilpicture={userlogo}
            lastname="Dupont"
            firstname="Marie"
            email="marie.dupont@gmail.com"
          />
          <CandidateCard
            profilpicture={userlogo}
            lastname="Dupont"
            firstname="Marie"
            email="marie.dupont@gmail.com"
          />
          <CandidateCard
            profilpicture={userlogo}
            lastname="Dupont"
            firstname="Marie"
            email="marie.dupont@gmail.com"
          />
          <CandidateCard
            profilpicture={userlogo}
            lastname="Dupont"
            firstname="Marie"
            email="marie.dupont@gmail.com"
          />
        </div>
        <div className="returnButton">
          <NavLink to="/admin/dashboard">
            <BlackButton buttonName="Retour à l'administration" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CandidateList;
