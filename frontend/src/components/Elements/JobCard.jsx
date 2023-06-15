import React from "react";
import PropTypes from "prop-types";
import loupe from "../../assets/icons/loupe.png";
import croix from "../../assets/icons/cross.png";

function JobCard({ logo, companyName, job, contractType, jobCity, date }) {
  return (
    <div className="jobCard">
      <div className="company_logo">
        <img className="logo" src={logo} alt={companyName} />
      </div>
      <div className="job_details">
        <h2 className="job_title">{job}</h2>
        <h3 className="contractLocation">
          {contractType} | {jobCity}
        </h3>
        <h3 className="publication"> offre publiée le {date}</h3>
      </div>
      <div className="navigation">
        <button type="button" className="jobCardButtons">
          {" "}
          <img src={croix} alt="croix" />
        </button>
        <button type="button" className="jobCardButtons">
          <img src={loupe} alt="loupe" />
        </button>
      </div>
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
};

export default JobCard;
