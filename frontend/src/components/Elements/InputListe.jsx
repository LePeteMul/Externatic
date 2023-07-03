import React from "react";
import PropTypes from "prop-types";

function InputListe({ label, placeholder, data, handleChange, name }) {
  return (
    <div className="inputListe">
      <label>{label}</label>
      <select onClick={handleChange} name={name} className="select">
        <option value=""> {placeholder}</option>
        {data.map((item) => (
          <option key={item.name} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

InputListe.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default InputListe;
