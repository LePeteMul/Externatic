import React from "react";
import PropTypes from "prop-types";
import loupe from "../../assets/icons/loupe.png";
import croix from "../../assets/icons/cross.png";

function CandidateCard({ profilpicture, lastname, firstname, email }) {
  return (
    <div className="candidateCard">
      <div className="content">
        <div className="profile_image_container">
          <img
            className="profile_picture"
            src={profilpicture}
            alt="image_candidat"
          />
        </div>
        <div className="candidate_info">
          <h3 className="identity">
            {lastname} {firstname}
          </h3>
          <p className="email">{email}</p>
        </div>

        <div className="navigation">
          <button type="button" className="candidateCardButtons">
            {" "}
            <img src={croix} alt="croix" />
          </button>
          <button type="button" className="candidateCardButtons">
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
