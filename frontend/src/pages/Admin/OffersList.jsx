import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import logoGroupama from "../../assets/images/HomePage/logo-groupama.jpg";
import Lengow from "../../assets/images/HomePage/logo-lengow.png";
import CandidateCard from "../../components/Elements/CandidateCard";
import logoAllovoisins from "../../assets/images/HomePage/logo-allovoisins.png";
import BlackButton from "../../components/Elements/BlackButton";

function OffersList() {
  return (
    <div className="OffersList">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="OffersListTitle">
          <h1>Offres</h1>
        </div>

        <div className="offer">
          <CandidateCard
            profilpicture={logoGroupama}
            lastname="Service Delivery Manager"
            email="admin.XYZ@gmail.com"
          />
          <CandidateCard
            profilpicture={Lengow}
            lastname="Service Delivery Manager"
            email="admin.XYZ@gmail.com"
          />

          <CandidateCard
            profilpicture={logoAllovoisins}
            lastname="Service Delivery Manager"
            email="admin.XYZ@gmail.com"
          />
          <CandidateCard
            profilpicture={Lengow}
            lastname="Service Delivery Manager"
            email="admin.XYZ@gmail.com"
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

export default OffersList;
