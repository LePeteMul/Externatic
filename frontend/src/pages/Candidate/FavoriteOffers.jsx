import React from "react";
import { NavLink } from "react-router-dom";
import JobCard from "../../components/Elements/JobCard";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";

function FavoriteOffers() {
  const offers = [
    {
      companyLogo: "https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg",
      companyName: "Nickel",
      job: "Chef de projet",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      companyLogo: "https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg",
      companyName: "Nickel",
      job: "Chef de projet",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
  ];

  return (
    <div className="favoriteOffers">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="titleFavoris">
          <h1>Mes favoris</h1>
        </div>
        <div className="cardFavoris">
          {offers.map((offer) => {
            return (
              <JobCard
                logo={offer.companyLogo}
                companyName={offer.companyName}
                job={offer.job}
                contractType={offer.contractType}
                jobCity={offer.jobCity}
                date={offer.date}
              />
            );
          })}
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
