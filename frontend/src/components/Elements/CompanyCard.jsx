import React from "react";
import PropTypes from "prop-types";
import loupe from "../../assets/icons/loupe.png";
import croix from "../../assets/icons/cross.png";

function CompanyCard({ logo, name, email }) {
  return (
    <div className="companyCard">
      <div className="content">
        <div className="logo_container">
          <img className="logo" src={logo} alt={name} />
        </div>
        <div className="company_info">
          <h3>{name}</h3>
          <p> {email}</p>
        </div>

        <div className="navigation">
          <button type="button" className="companyCardButtons">
            {" "}
            <img src={croix} alt="croix" />
          </button>
          <button type="button" className="companyCardButtons">
            <img src={loupe} alt="loupe" />
          </button>
        </div>
      </div>
    </div>
  );
}

CompanyCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default CompanyCard;
