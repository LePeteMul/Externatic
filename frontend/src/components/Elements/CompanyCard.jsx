import React from "react";
import PropTypes from "prop-types";
import croix from "../../assets/icons/cross.png";

function CompanyCard({ logo, name, email, onClick, onDelete }) {
  return (
    <div
      className="companyCard"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="content">
        <div className="logo_container">
          <img className="logo" src={logo} alt={name} />
        </div>
        <div className="company_info">
          <h3>{name}</h3>
          <p> {email}</p>
        </div>

        <div className="navigation">
          <button
            type="button"
            className="companyCardButtons"
            onClick={onDelete}
          >
            {" "}
            <img src={croix} alt="croix" />
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
  onClick: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
};

CompanyCard.defaultProps = {
  onClick: undefined,
};

export default CompanyCard;
