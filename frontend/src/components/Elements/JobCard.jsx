import React from "react";
import PropTypes from "prop-types";

function JobCard({ logo, companyName, job, contractType, jobCity, date }) {
  return (
    <div>
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
