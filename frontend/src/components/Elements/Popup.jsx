import React from "react";
import PropTypes from "prop-types";

function Popup({ title, onClose, message, buttonname }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <button type="button" onClick={onClose}>
          {buttonname}
        </button>
      </div>
    </div>
  );
}
Popup.propTypes = {
  title: PropTypes.string.isRequired,
  buttonname: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string,
};
Popup.defaultProps = {
  message: "",
};

export default Popup;
