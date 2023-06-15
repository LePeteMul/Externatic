import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import JobCard from "../../components/Elements/JobCard";
import BlackButton from "../../components/Elements/BlackButton";

function CandidateJobApplications() {
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
    <div className="jobapplications">
      <HeaderBasic />

      <div className="boxWithoutHeader">
        <div className="titleMesCandidature">
          <h1>Mes candidatures</h1>
        </div>
        <div className="applicationDetails">
          <div className="recu">
            <p>Reçue(s)</p>
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
          <div className="enCours">
            <p>En cours de traitement</p>
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

          <div className="entretienPlanifie">
            <p>Entretien(s) planifié(s)</p>
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

          <div className="accepte">
            <p>Acceptée(s)</p>

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

          <div className="refuse">
            <p>Refusée(s)</p>

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
        </div>
        <div className="jobapplicationsEnd">
          <NavLink to="/candidate/dashboard">
            <BlackButton buttonName="Retour à mon espace" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CandidateJobApplications;
