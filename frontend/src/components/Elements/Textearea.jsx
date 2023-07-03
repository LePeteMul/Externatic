import React, { useState } from "react";
import PropTypes from "prop-types";

function Textearea({ label, inputMessage, rows, set }) {
  const [entry, setEntry] = useState("");

  const handleChangeInput = (event) => {
    setEntry(event.target.value);
    set(event.target.value);
  };
  return (
    <div className="TextArea">
      <label htmlFor="label">{label} </label>
      <textarea
        className={entry === "" ? "notselected" : "selected"}
        onChange={handleChangeInput}
        rows={rows}
        placeholder={inputMessage}
      />
    </div>
  );
}

Textearea.propTypes = {
  label: PropTypes.string.isRequired,
  inputMessage: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  set: PropTypes.string.isRequired,
};

export default Textearea;
