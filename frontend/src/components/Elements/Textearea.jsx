import React, { useState } from "react";
import PropTypes from "prop-types";

function Textearea({ label, inputMessage, rows, type, handleChange, name }) {
  const [entry, setEntry] = useState("");

  const handleChangeInput = (event) => {
    setEntry(event.target.value);
  };

  return (
    <div className="TextArea">
      <label htmlFor="label">{label} </label>
      <textarea
        onChange={handleChange}
        name={name}
        rows={rows}
        placeholder={inputMessage}
        type={type}
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
};

Textearea.defaultProps = {
  label: undefined,
  inputMessage: undefined,
  type: undefined,
  handleChange: undefined,
  name: undefined,
};

export default Textearea;
