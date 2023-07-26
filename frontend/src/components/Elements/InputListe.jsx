import React from "react";
import PropTypes from "prop-types";

function InputListe({ label, placeholder, data, handleChange, name, value }) {
  return (
    <div className="inputListe">
      <label>{label}</label>
      <select
        onInput={handleChange}
        name={name}
        className="select"
        value={value}
      >
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
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.string])
  ),
  name: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputListe.defaultProps = {
  name: undefined,
  data: undefined,
  value: undefined,
};

export default InputListe;
