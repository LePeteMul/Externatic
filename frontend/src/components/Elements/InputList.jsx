import React, { useState } from "react";
import PropTypes from "prop-types";

function InputList({ label, inputMessage, data }) {
  const [classSelect, setClassSelect] = useState("notselected");

  const handleSelect = () => {
    setClassSelect("selected");
  };

  return (
    <div className="InputList">
      <br />
      <label htmlFor="label">{label} </label>
      <br />
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
};

export default InputList;
