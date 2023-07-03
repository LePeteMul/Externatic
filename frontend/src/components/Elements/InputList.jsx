import React, { useState } from "react";
import PropTypes from "prop-types";

function InputList({ label, inputMessage, data }) {
  const [classSelect, setClassSelect] = useState("notselected");

  const handleSelect = () => {
    setClassSelect("selected");
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
              value={element.contract_type || "Nantes"}
              key={element.contract_type || "Nantes"}
            >
              {element.contract_type || "Nantes"}
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
  data: PropTypes.array.isRequired,
};

export default InputList;
