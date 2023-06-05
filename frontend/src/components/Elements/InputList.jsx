import React, { useState } from "react";

function InputList() {
  const [classSelect, setClassSelect] = useState("notselected");

  const handleSelect = () => {
    setClassSelect("selected");
  };

  return (
    <div className="InputList">
      <br />
      <label htmlFor="label">Label </label>
      <br />
      <select className={classSelect} onChange={handleSelect}>
        <option className="notselected" value="">
          Sélectionner un choix
        </option>
        <option className="selected" value="choix1">
          Choix n°1
        </option>
        <option className="selected" value="choix2">
          Choix n°2
        </option>
        <option className="selected" value="choix3">
          Choix n°3
        </option>
      </select>
    </div>
  );
}

export default InputList;
