import React from "react";
import PropTypes from "prop-types";

function WhiteButton({ buttonName, buttonFunction }) {
  return (
    <div className="WhiteButton">
      <button type="button" onClick={buttonFunction}>
        {buttonName}
      </button>
    </div>
  );
}

WhiteButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonFunction: PropTypes.string,
};

WhiteButton.defaultProps = {
  buttonFunction: console.info("Fonction"),
};

export default WhiteButton;
