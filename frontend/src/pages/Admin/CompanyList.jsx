import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import CandidateCard from "../../components/Elements/CandidateCard";
import nickel from "../../assets/images/HomePage/logo-nickel.png";
import BlackButton from "../../components/Elements/BlackButton";

function CompanyList() {
  return (
    <div className="CompanyList">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="CompanyListTitle">
          <h1>Entreprises</h1>
        </div>

        <div className="company">
          <CandidateCard
            profilpicture={nickel}
            lastname="Nickel"
            email="admin.nickel@gmail.com"
          />

          <CandidateCard
            profilpicture={nickel}
            lastname="Nickel"
            email="admin.nickel@gmail.com"
          />

          <CandidateCard
            profilpicture={nickel}
            lastname="Nickel"
            email="admin.nickel@gmail.com"
          />

          <CandidateCard
            profilpicture={nickel}
            lastname="Nickel"
            email="admin.nickel@gmail.com"
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

export default CompanyList;
