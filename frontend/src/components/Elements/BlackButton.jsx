import React from "react";
import PropTypes from "prop-types";

function BlackButton({ buttonName, buttonFunction }) {
  return (
    <div className="BlackButton">
      <button type="button" onClick={buttonFunction}>
        {buttonName}
      </button>
    </div>
  );
}

BlackButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonFunction: PropTypes.func,
};

BlackButton.defaultProps = {
  buttonFunction: undefined,
};

export default BlackButton;
