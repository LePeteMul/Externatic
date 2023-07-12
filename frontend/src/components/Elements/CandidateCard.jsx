import React from "react";
import PropTypes from "prop-types";
import loupe from "../../assets/icons/loupe.png";
import croix from "../../assets/icons/cross.png";

function CandidateCard({
  id,
  profilpicture,
  lastname,
  firstname,
  email,
  onDelete,
}) {
  const handleDelete = () => {
    onDelete(id);
  };

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
          <button
            type="button"
            className="candidateCardButtons"
            onClick={handleDelete}
          >
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
  id: PropTypes.number.isRequired,
  profilpicture: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CandidateCard;
