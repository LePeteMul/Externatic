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
  label: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ),
  name: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputListe.defaultProps = {
  label: undefined,
  placeholder: undefined,
  name: undefined,
  data: undefined,
  value: undefined,
};

export default InputListe;
