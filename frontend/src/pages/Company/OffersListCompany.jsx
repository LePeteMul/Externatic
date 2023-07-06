import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import JobCard from "../../components/Elements/JobCard";
import logoGroupama from "../../assets/images/HomePage/logo-groupama.jpg";
import BlackButton from "../../components/Elements/BlackButton";

function OffersListCompany() {
  const [result, setResult] = useState("");

  useEffect(() => {
    const offerId = 1;
    const url = `http://localhost:8080/api/offersByCompany/${offerId}`;

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

  const offers = [
    {
      companyLogo: result.logo,
      companyName: result.company_name,
      job: result.job,
      contractType: result.contract_type,
      jobCity: result.city_job,
      date: result.date,
    },
    {
      companyLogo: logoGroupama,
      companyName: "Groupama",
      job: "Chef de projet",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      companyLogo: logoGroupama,
      companyName: "Groupama",
      job: "Chef de projet",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      companyLogo: logoGroupama,
      companyName: "Groupama",
      job: "Chef de projet",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
  ];

  return (
    <div className="OffersListCompany">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="OffersListTitle">
          <h1>Offres</h1>
        </div>

        <div className="offer">
          {offers.map((offer) => {
            return (
              <NavLink to="/company/application">
                <JobCard
                  logo={offer.companyLogo}
                  companyName={offer.companyName}
                  job={offer.job}
                  contractType={offer.contractType}
                  jobCity={offer.jobCity}
                  date={offer.date}
                />
              </NavLink>
            );
          })}
        </div>
        <div className="returnButton">
          <NavLink to="/company/dashboard">
            <BlackButton buttonName="Retour à mon espace" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default OffersListCompany;
