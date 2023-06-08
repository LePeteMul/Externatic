import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import HeaderWave from "../../components/Header/HeaderWave";
import WhiteButton from "../../components/Elements/WhiteButton";
import JobOfferContext from "../../contexts/JobOfferContext/JobOfferContext";

function ApplicationConfirmation() {
  const { jobOffer } = useContext(JobOfferContext);

  return (
    <div className="ApplicationConfirmation">
      <HeaderWave />
      <div className="boxWithoutHeader">
        <div className="ApplicationMessage">
          <h1>Votre candidature a bien été transmise</h1>
          <br />
          <h2>
            Rendez vous dans votre profil utilisateur afin de suivre son état
            d'avancement.
          </h2>
          <h2>
            L'entreprise {jobOffer[0].companyName} vous rencontacteras dans les
            meilleurs délais
          </h2>
        </div>
        <div className="ResultsButton">
          <NavLink to="/results">
            <WhiteButton
              buttonName="Retour à mes résultats"
              buttonFunction={console.info("Fonction")}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ApplicationConfirmation;
