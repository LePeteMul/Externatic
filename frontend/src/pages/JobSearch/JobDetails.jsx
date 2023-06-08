import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";
import HeartButton from "../../assets/icons/heart.png";
import logoGroupama from "../../assets/images/HomePage/logo-groupama.jpg";

function JobDetails() {
  const job = {
    logo: logoGroupama,
    companyName: "Groupama",
    job: "Developpeur Web fullstack Java Angular",
    contractType: "CDI",
    jobCity: "Nantes",
    date: "06/06/2023",
    companyDescription:
      "Située en centre-ville de Nantes (gare sud) cette société conçoit depuis +10 ans des applications web & mobile. Elle réalise également de nombreux projets d'innovation (AR / VR par exemple). Les équipes de cette agence (30 pers.) possèdent des expertises variées : UX / dev / projet / électronique / etc. Le positionnement plait énormément en interne (peu de turnover) et en externe (forte croissance). Constituée de passionnés : ingénieurs embarqués, développeurs en nouvelles technologies leur équipe agile peut ainsi répondre à tous les besoins en stratégie de déploiement et technologies émergentes. Un vrai lieu de vie où les personnalités et les compétences se croisent pour former une équipe soudée. Aimer son travail est la philosophie de cette entreprise.",
    jobDescription:
      "En lien avec le directeur technique, les chefs de projets et vos collègues développeur : Analyse technique des besoinsArchitecture, conception et développement d’applications web essentiellement (plus ponctuellement il est possible d'intervenir sur des projets mobile / AR / VR / etc.) Tests (unitaires et fonctionnels) Veille technologique.",
    offerTechno:
      "Java Springboot, Nodejs, Typescript Angular 8, React, API Rest, PostgreSQL",
    prerequisites:
      "Esprit d'équipe, collaboratif. Autonomie et propositions entendues",
    remote: "partiel",
    min_income: 39000,
    max_income: 50000,
  };

  return (
    <div className="JobDetails">
      <HeaderBasic />
      <div className="boxWithoutHeader3">
        <div className="ConnectMessage">
          <p>Pour postuler à cette offre, connectez vous à votre compte</p>
        </div>
        <div className="OfferResume">
          <div className="OfferLogo">
            <img className="logo" src={job.logo} alt={job.companyName} />
          </div>
          <h1>{job.job}</h1>
          <h2>
            {job.contractType} | {job.jobCity}
          </h2>
          <p>Publiée le {job.date}</p>
        </div>
        <br />
        <hr className="Line" />
        <br />
        <div className="CompanyDescription">
          <h3>L'entreprise et l'équipe</h3>
          <br />
          <p>{job.companyDescription}</p>
        </div>
        <br />
        <div className="OfferMissions">
          <h3>Les missions</h3>
          <br />
          <p>{job.jobDescription}</p>
        </div>
        <br />
        <div className="OfferTechno">
          <h3>Environnement technique :</h3>
          <br />
          <p>{job.offerTechno}</p>
        </div>
        <br />
        <div className="OfferConditions">
          <h3>Conditions de travail</h3>
          <br />
          <p>{job.prerequisites}</p>
          <p>Télétravail : {job.remote}</p>
          <p>
            Salaire : de {job.min_income} € à {job.max_income} €
          </p>
        </div>
        <div className="ConnectButtons">
          <NavLink to="/applicationconfirmation">
            <BlackButton
              buttonName="Candidater"
              buttonFunction={console.info("Nav to CandidatePage")}
            />
          </NavLink>
          <div className="Heart">
            <img src={HeartButton} alt="FavoriteButton" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
