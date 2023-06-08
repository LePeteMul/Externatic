import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import CandidateCard from "../../components/Elements/CandidateCard";
import nickel from "../../assets/images/HomePage/logo-nickel.png";
import groupama from "../../assets/images/HomePage/Groupama-logo.png";

function CompanyList() {
  return (
    <div className="CompanyList">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="page_title">
          <h1>Entreprises</h1>
        </div>

        <div className="company">
          <CandidateCard
            profilpicture={nickel}
            lastname="Nickel"
            email="admin.nickel@gmail.com"
          />
        </div>
        <br />
        <br />

        <div className="company">
          <CandidateCard
            profilpicture={groupama}
            lastname="Groupama"
            email="admin.groupama@gmail.com"
          />
        </div>
        <br />
        <br />
        <div className="company">
          <CandidateCard
            profilpicture={nickel}
            lastname="Nickel"
            email="admin.nickel@gmail.com"
          />
        </div>
        <br />
        <br />
        <div className="company">
          <CandidateCard
            profilpicture={groupama}
            lastname="Groupama"
            email="admin.groupama@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

export default CompanyList;
