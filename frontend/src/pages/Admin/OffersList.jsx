import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import JobCard from "../../components/Elements/JobCard";
import BlackButton from "../../components/Elements/BlackButton";

function OffersList() {
  const [result, setResult] = useState([]);

  // find all offers with details
  useEffect(() => {
    const url = "http://localhost:8080/api/offerDetails";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.info("Response:", data);
        setResult(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="OffersList">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="OffersListTitle">
          <h1>Offres</h1>
        </div>

        <div className="offer">
          {result.map((offer) => {
            return (
              <JobCard
                logo={offer.logo}
                companyName={offer.company_name}
                job={offer.job}
                contractType={offer.contract_type}
                jobCity={offer.city_job}
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
