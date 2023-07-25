import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Textearea({
  label,
  inputMessage,
  rows,
  type,
  handleChange,
  name,
  value,
}) {
  const [entry, setEntry] = useState("");

  console.warn("entry = ", entry);

  useEffect(() => {
    setEntry(value);
  }, [value]);

  const handleChangeInput = (event) => {
    setEntry(event.target.value);
    // Pass the updated entry value to the handleChange function
    if (handleChange) {
      handleChange(event.target.value);
    }
  };

  return (
    <div className="TextArea">
      <label htmlFor="label">{label} </label>
      <textarea
        onChange={handleChangeInput}
        name={name}
        rows={rows}
        placeholder={inputMessage}
        type={type}
        value={entry}
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
