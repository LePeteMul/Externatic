import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import logoGroupama from "../../assets/images/HomePage/logo-groupama.jpg";
import Lengow from "../../assets/images/HomePage/logo-lengow.png";
import CandidateCard from "../../components/Elements/CandidateCard";
import logoAllovoisins from "../../assets/images/HomePage/logo-allovoisins.png";

function OffersList() {
  return (
    <div className="OffersList">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="page_title">
          <h1>Liste des offres</h1>
        </div>

        <div className="offer">
          <CandidateCard
            profilpicture={logoGroupama}
            lastname="Service Delivery Manager"
            email="admin.XYZ@gmail.com"
          />
        </div>
        <br />
        <br />

        <div className="offer">
          <CandidateCard
            profilpicture={Lengow}
            lastname="Service Delivery Manager"
            email="admin.XYZ@gmail.com"
          />
        </div>

        <br />
        <br />

        <div className="offer">
          <CandidateCard
            profilpicture={logoAllovoisins}
            lastname="Service Delivery Manager"
            email="admin.XYZ@gmail.com"
          />
        </div>

        <br />
        <br />

        <div className="offer">
          <CandidateCard
            profilpicture={Lengow}
            lastname="Service Delivery Manager"
            email="admin.XYZ@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

export default OffersList;
