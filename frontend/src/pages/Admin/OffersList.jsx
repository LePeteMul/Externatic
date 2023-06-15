import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import JobCard from "../../components/Elements/JobCard";
import logoAllovoisins from "../../assets/images/HomePage/logo-allovoisins.png";
import logoGroupama from "../../assets/images/HomePage/logo-groupama.jpg";
import BlackButton from "../../components/Elements/BlackButton";

function OffersList() {
  const offers = [
    {
      companyLogo: logoGroupama,
      companyName: "Nickel",
      job: "Chef de projet",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      companyLogo: logoAllovoisins,
      companyName: "Nickel",
      job: "Chef de projet",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      companyLogo: logoGroupama,
      companyName: "Nickel",
      job: "Chef de projet",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      companyLogo: logoAllovoisins,
      companyName: "Nickel",
      job: "Chef de projet",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
  ];

  return (
    <div className="OffersList">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="OffersListTitle">
          <h1>Offres</h1>
        </div>

        <div className="offer">
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
