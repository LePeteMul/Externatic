import React, { useState } from "react";
import PropTypes from "prop-types";

function Textearea({ label, inputMessage, rows, type, handleChange, name }) {
  const [entry] = useState("");

  console.info(entry);
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
  label: PropTypes.string.isRequired,
  inputMessage: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Textearea;
