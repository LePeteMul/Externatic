import React from "react";
import PropTypes from "prop-types";

function RedButton({ buttonName, buttonFunction }) {
  return (
    <div className="RedButton">
      <button type="button" onClick={buttonFunction}>
        {buttonName}
      </button>
    </div>
  );
}

RedButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonFunction: PropTypes.func.isRequired,
};

export default RedButton;
