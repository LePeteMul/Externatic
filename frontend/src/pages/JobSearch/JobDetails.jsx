import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";
import HeartButton from "../../assets/icons/heart.png";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
import JobOfferContext from "../../contexts/JobOfferContext/JobOfferContext";
import Popup from "../../components/Elements/Popup";
import { formatDate } from "../../services/formatDate";

function JobDetails() {
  const { offerId } = useContext(JobOfferContext);
  const { userConnected, userId, isAdmin } = useContext(UserConnexionContext);

  const [jobDetails, setJobDetails] = useState([]);

  const [application, setApplication] = useState({
    candidate_id: userId,
    offer_id: offerId,
    company_id: "",
  });

  useEffect(() => {
    const url = `http://localhost:8080/api/offerDetails/${offerId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setJobDetails(data);
        setApplication({
          candidate_id: userId,
          offer_id: offerId,
          company_id: data.companyid,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const [favorite] = useState({
    candidate_id: userId,
    offer_id: offerId,
  });

  const [hasApply, setHasApply] = useState(false);

  const handlePopupApplyClose = () => {
    setHasApply(false);
  };

  const applicationClick = (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/api/application";
    const requestData = { ...application };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.status === 201) {
          setHasApply(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [hasFavorite, setHasFavorite] = useState(false);

  const handlePopupFavoriteClose = () => {
    setHasFavorite(false);
  };

  const favoriteClick = (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/api/favorite";
    const requestData = { ...favorite };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.status === 201) {
          setHasFavorite(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
              src={jobDetails.logo}
              alt={jobDetails.company_name}
            />
          </div>
          <h1>{jobDetails.job}</h1>
          <h2>
            {jobDetails.contract_type} | {jobDetails.city_job}
          </h2>
          <p>Publiée le {formatDate(jobDetails.date)}</p>
        </div>
        <br />
        <hr className="Line" />
        <br />
        <div className="CompanyDescription">
          <h3>L'entreprise et l'équipe</h3>
          <br />
          <p>{jobDetails.presentation}</p>
        </div>
        <br />
        <div className="OfferMissions">
          <h3>Les missions</h3>
          <br />
          <p>{jobDetails.description}</p>
        </div>
        <br />
        <div className="OfferTechno">
          <h3>Environnement technique :</h3>
          <br />
          <p>{jobDetails.techno_name}</p>
        </div>
        <br />
        <div className="OfferConditions">
          <h3>Conditions de travail</h3>
          <br />
          <p>{jobDetails.prerequisites}</p>
          <p>Télétravail : {jobDetails.remote}</p>
          <p>
            Salaire : de {jobDetails.min_salary} € à {jobDetails.max_salary} €
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        {userConnected && !isAdmin && (
          <div className="ConnectButtons">
            <NavLink to="/candidate/applicationconfirmation">
              <BlackButton
                buttonName="Candidater"
                buttonFunction={applicationClick}
              />
            </NavLink>
            <div className="Heart">
              <button type="button" onClick={favoriteClick}>
                <img src={HeartButton} alt="FavoriteButton" />
              </button>
            </div>
          </div>
        )}
        {hasApply && (
          <Popup
            title="Votre candidature a bien été transmise"
            message="L'entreprise vous rencontactera dans les
            meilleurs délais"
            onClose={handlePopupApplyClose}
            buttonname="Retour à l'offre"
          />
        )}
        {hasFavorite && (
          <Popup
            title="Cette offre a bien été ajoutée à vos favoris"
            message=""
            onClose={handlePopupFavoriteClose}
            buttonname="Retour à l'offre"
          />
        )}
      </div>
    </div>
  );
}

export default JobDetails;
