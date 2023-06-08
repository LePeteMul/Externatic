import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";
import HeartButton from "../../assets/icons/heart.png";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
import JobOfferContext from "../../contexts/JobOfferContext/JobOfferContext";

function JobDetails() {
  const { jobOffer } = useContext(JobOfferContext);
  const { userConnected } = useContext(UserConnexionContext);

  return (
    <div className="JobDetails">
      <HeaderBasic />
      <div className="boxWithoutHeader3">
        {userConnected && (
          <div className="ConnectMessage">
            <p>Pour postuler à cette offre, connectez vous à votre compte</p>
          </div>
        )}
        <div className="OfferResume">
          <div className="OfferLogo">
            <img
              className="logo"
              src={jobOffer[0].logo}
              alt={jobOffer[0].companyName}
            />
          </div>
          <h1>{jobOffer[0].job}</h1>
          <h2>
            {jobOffer[0].contractType} | {jobOffer[0].jobCity}
          </h2>
          <p>Publiée le {jobOffer[0].date}</p>
        </div>
        <br />
        <hr className="Line" />
        <br />
        <div className="CompanyDescription">
          <h3>L'entreprise et l'équipe</h3>
          <br />
          <p>{jobOffer[0].companyDescription}</p>
        </div>
        <br />
        <div className="OfferMissions">
          <h3>Les missions</h3>
          <br />
          <p>{jobOffer[0].jobDescription}</p>
        </div>
        <br />
        <div className="OfferTechno">
          <h3>Environnement technique :</h3>
          <br />
          <p>{jobOffer[0].offerTechno}</p>
        </div>
        <br />
        <div className="OfferConditions">
          <h3>Conditions de travail</h3>
          <br />
          <p>{jobOffer[0].prerequisites}</p>
          <p>Télétravail : {jobOffer[0].remote}</p>
          <p>
            Salaire : de {jobOffer[0].min_income} € à {jobOffer[0].max_income} €
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        {userConnected && (
          <div className="ConnectButtons">
            <NavLink to="/candidate/applicationconfirmation">
              <BlackButton buttonName="Candidater" />
            </NavLink>
            <div className="Heart">
              <img src={HeartButton} alt="FavoriteButton" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobDetails;
