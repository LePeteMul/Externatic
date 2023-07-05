import React, { useState } from "react";
import PropTypes from "prop-types";

function InputList({ label, inputMessage, data, set }) {
  const [classSelect, setClassSelect] = useState("notselected");

  const handleSelect = (e) => {
    setClassSelect("selected");
    set(e);
  };

  return (
    <div className="InputList">
      <label htmlFor="label">{label} </label>
      <select className={classSelect} onChange={handleSelect}>
        <option className="notselected" value="">
          {inputMessage}
        </option>
        {data.map((element) => {
          return (
            <option
              className="selected"
              value={element.value}
              key={element.value}
            >
              {element.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

InputList.propTypes = {
  label: PropTypes.string.isRequired,
  inputMessage: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  set: PropTypes.string.isRequired,
};

export default InputList;
