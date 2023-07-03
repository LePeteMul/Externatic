import React, { useState } from "react";
import PropTypes from "prop-types";

function Textearea({ label, inputMessage, rows, type }) {
  const [entry, setEntry] = useState("");

  const handleChangeInput = (event) => {
    setEntry(event.target.value);
  };
  console.info(entry);
  return (
    <div className="TextArea">
      <label htmlFor="label">{label} </label>
      <textarea
        onChange={handleChangeInput}
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
};

export default Textearea;
