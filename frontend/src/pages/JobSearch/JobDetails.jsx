import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";
import HeartButton from "../../assets/icons/heart.png";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
import JobOfferContext from "../../contexts/JobOfferContext/JobOfferContext";

function JobDetails() {
  const { jobOffer, offerId } = useContext(JobOfferContext);
  const { userConnected, userId } = useContext(UserConnexionContext);

  const [data] = useState({
    candidate_id: userId /* id du user connecte enregistre dans le contexte */,
    offer_id:
      "" /* Modifier "" par la variable de l offer id sur laquelle la candidature est faite */,
    company_id:
      "" /* Modifier "" par la variable de company id sur laquelle la candidature est faite */,
  });

  const applicationClick = (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/api/application";
    const requestData = { ...data };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((res) => {
        console.info("Response:", res);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  console.info(jobOffer);

  return (
    <div className="JobDetails">
      <HeaderBasic />
      <div className="boxWithoutHeader3">
        {!userConnected && (
          <div className="ConnectMessage">
            <p>Pour postuler à cette offre, connectez vous à votre compte</p>
          </div>
        )}
        <div className="OfferResume">
          <div className="OfferLogo">
            <img
              className="logo"
              src={jobOffer[offerId].logo}
              alt={jobOffer[offerId].company_name}
            />
          </div>
          <h1>{jobOffer[offerId].job}</h1>
          <h2>
            {jobOffer[offerId].contract_type} | {jobOffer[offerId].city_job}
          </h2>
          <p>Publiée le {jobOffer[offerId].date}</p>
        </div>
        <br />
        <hr className="Line" />
        <br />
        <div className="CompanyDescription">
          <h3>L'entreprise et l'équipe</h3>
          <br />
          <p>{jobOffer[offerId].presentation}</p>
        </div>
        <br />
        <div className="OfferMissions">
          <h3>Les missions</h3>
          <br />
          <p>{jobOffer[offerId].description}</p>
        </div>
        <br />
        <div className="OfferTechno">
          <h3>Environnement technique :</h3>
          <br />
          <p>{jobOffer[offerId].techno_name}</p>
        </div>
        <br />
        <div className="OfferConditions">
          <h3>Conditions de travail</h3>
          <br />
          <p>{jobOffer[offerId].prerequisites}</p>
          <p>Télétravail : {jobOffer[offerId].remote}</p>
          <p>
            Salaire : de {jobOffer[offerId].min_salary} € à{" "}
            {jobOffer[offerId].max_salary} €
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        {userConnected && (
          <div className="ConnectButtons">
            <NavLink to="/candidate/applicationconfirmation">
              <BlackButton
                buttonName="Candidater"
                buttonFunction={applicationClick}
              />
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
