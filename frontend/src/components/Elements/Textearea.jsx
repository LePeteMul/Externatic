import React from "react";
import PropTypes from "prop-types";

function Textearea({
  label,
  inputMessage,
  handleChange,
  rows,
  type,
  name,
  value,
}) {
  return (
    <div className="TextArea">
      <label htmlFor="label">{label} </label>
      <textarea
        name={name}
        onChange={handleChange}
        rows={rows}
        placeholder={inputMessage}
        type={type}
        value={value}
      />
    </div>
  );
}

Textearea.propTypes = {
  label: PropTypes.string,
  inputMessage: PropTypes.string,
  rows: PropTypes.number.isRequired,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
};

Textearea.defaultProps = {
  label: undefined,
  inputMessage: undefined,
  type: undefined,
  handleChange: undefined,
  name: undefined,
  value: undefined,
};

export default Textearea;
