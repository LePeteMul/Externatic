import React from "react";
import PropTypes from "prop-types";
import loupe from "../../assets/icons/loupe.png";
import croix from "../../assets/icons/cross.png";

function CandidateCard({ profilpicture, lastname, firstname, email }) {
  return (
    <div className="candidateCard">
      <div className="liste">
        <div className="image">
          <img
            className="profil_picture"
            src={profilpicture}
            alt="image_candidat"
          />
        </div>
        <div className="info">
          <h3>
            {lastname} {firstname}
          </h3>
          <p>{email}</p>
        </div>

        <div className="navigation">
          <button type="button">
            {" "}
            <img src={croix} alt="croix" />
          </button>
          <button type="button">
            <img src={loupe} alt="loupe" />
          </button>
        </div>
      </div>
    </div>
  );
}

CandidateCard.propTypes = {
  profilpicture: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default CandidateCard;
