import React, { useContext, useState, useEffect } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";
import HeartButton from "../../assets/icons/heart.png";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
import JobOfferContext from "../../contexts/JobOfferContext/JobOfferContext";
import Popup from "../../components/Elements/Popup";
import { formatDate } from "../../services/formatDate";
import logo_generique from "../../assets/images/logo_generique.jpg";

function JobDetails() {
  const { offerId } = useContext(JobOfferContext);
  const { userConnected, userId, isAdmin } = useContext(UserConnexionContext);

  const [jobDetails, setJobDetails] = useState([]);

  const [error, setError] = useState(null);

  const handlePopupClose = () => {
    setError(false);
  };

  const [application, setApplication] = useState({
    candidate_id: userId,
    offer_id: offerId,
    company_id: "",
  });

  useEffect(() => {
    const url = `${
      import.meta.env.VITE_BACKEND_URL
    }/api/offerDetails/${offerId}`;

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

    const url = `${import.meta.env.VITE_BACKEND_URL}/api/application`;
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
        } else setError("Votre candidature a déjà été transmise");
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const [hasFavorite, setHasFavorite] = useState(false);

  const handlePopupFavoriteClose = () => {
    setHasFavorite(false);
  };

  const favoriteClick = (e) => {
    e.preventDefault();

    const url = `${import.meta.env.VITE_BACKEND_URL}/api/favorite`;
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
        } else setError("Offre déjà enregistrée dans vos favoris");
      })
      .catch((err) => {
        console.error("Error:", err);
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
              src={jobDetails.logo ? jobDetails.logo : logo_generique}
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
          <h3>Hard Skills :</h3>
          <br />
          <p>{jobDetails.techno_name}</p>
          <br />
          <h3>Soft Skills :</h3>
          <br />
          <p>{jobDetails.prerequisites}</p>
        </div>
        <br />
        <div className="OfferConditions">
          <h3>Conditions de travail</h3>
          <br />
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
            <BlackButton
              buttonName="Candidater"
              buttonFunction={applicationClick}
            />
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
        {error && (
          <Popup
            title="Erreur"
            message={error}
            onClose={handlePopupClose}
            buttonname="Retour à l'offre"
          />
        )}
      </div>
    </div>
  );
}

export default JobDetails;
