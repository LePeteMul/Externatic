import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import CompanyCard from "../../components/Elements/CompanyCard";
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
          <CompanyCard
            logo={nickel}
            name="Nickel"
            email="admin.nickel@gmail.com"
          />

          <CompanyCard
            logo={nickel}
            name="Nickel"
            email="admin.nickel@gmail.com"
          />

          <CompanyCard
            logo={nickel}
            name="Nickel"
            email="admin.nickel@gmail.com"
          />

          <CompanyCard
            logo={nickel}
            name="Nickel"
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
