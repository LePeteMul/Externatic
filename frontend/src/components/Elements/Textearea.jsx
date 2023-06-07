import React, { useState } from "react";
import PropTypes from "prop-types";

function Textearea({ label, inputMessage }) {
  const [entry, setEntry] = useState(inputMessage);

  const handleClickInput = () => {
    setEntry("");
  };

  const handleChangeInput = (event) => {
    setEntry(event.target.value);
  };
  return (
    <div className="textearea">
      <label htmlFor="label">{label} </label>
      <textarea
        className={entry === inputMessage ? "notselected" : "selected"}
        onChange={handleChangeInput}
        onClick={handleClickInput}
        rows={9}
        style={{ borderRadius: "12px" }}
      />
    </div>
  );
}

Textearea.propTypes = {
  label: PropTypes.string.isRequired,
  inputMessage: PropTypes.string.isRequired,
};

export default Textearea;
