import React from "react";
import PropTypes from "prop-types";
import croix from "../../assets/icons/cross.png";

function CandidateCard({
  id,
  profilpicture,
  lastname,
  firstname,
  email,
  onClick,
  onDelete,
}) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div
      className="candidateCard"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
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
  onClick: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
};

CandidateCard.defaultProps = {
  onClick: undefined,
};

export default CandidateCard;
