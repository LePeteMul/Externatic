import React, { useState } from "react";
import PropTypes from "prop-types";

function InputText({ label, inputMessage }) {
  const [entry, setEntry] = useState(inputMessage);

  const handleClickInput = () => {
    setEntry("");
  };

  const handleChangeInput = (event) => {
    setEntry(event.target.value);
  };

  return (
    <div className="InputText">
      <br />
      <label htmlFor="label">{label} </label>
      <br />
      <input
        className={entry === inputMessage ? "notselected" : "selected"}
        type="text"
        value={entry}
        onChange={handleChangeInput}
        onClick={handleClickInput}
      />
    </div>
  );
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  inputMessage: PropTypes.string.isRequired,
};

export default InputText;
