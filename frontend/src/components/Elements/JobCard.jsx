import React from "react";
import PropTypes from "prop-types";
import croix from "../../assets/icons/cross.png";
import logo_generique from "../../assets/images/logo_generique.jpg";

function JobCard({
  logo,
  companyName,
  job,
  contractType,
  jobCity,
  date,
  onClick,
  onDelete,
  showButtons,
}) {
  const logoToShow = logo || logo_generique;

  return (
    <div
      className="jobCard"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="company_logo">
        <img className="logo" src={logoToShow} alt={companyName} />
      </div>
      <div className="job_details">
        <h2 className="job_title">{job}</h2>
        <h3 className="contractLocation">
          {contractType} | {jobCity}
        </h3>
        <h3 className="publication"> offre publiée le {date}</h3>
      </div>
      {showButtons && ( // Conditionally render buttons based on showButtons prop
        <div className="navigation">
          <button type="button" className="jobCardButtons" onClick={onDelete}>
            <img src={croix} alt="croix" />
          </button>
        </div>
      )}
    </div>
  );
}

JobCard.propTypes = {
  logo: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  contractType: PropTypes.string.isRequired,
  jobCity: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  showButtons: PropTypes.bool.isRequired,
};

export default JobCard;
