import React from "react";
import PropTypes from "prop-types";

function InputTexte({ type, name, placeholder, handleChange, label }) {
  return (
    <div className="inputText">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
}
InputTexte.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputTexte;
