import React from "react";
import { NavLink } from "react-router-dom";
import JobCard from "../../components/Elements/JobCard";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";

function FavoriteOffers() {
  return (
    <div className="favoriteOffers">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="titleFavoris">
          <h1>Favoris</h1>
        </div>
        <div className="cardFavoris">
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de projet"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de projet"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de projet"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de projet"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />{" "}
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de projet"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />
        </div>
        <div className="favoriteEnd">
          <NavLink to="/candidate/dashboard">
            <BlackButton buttonName="Retour à mon espace" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default FavoriteOffers;
