import React from "react";

function InputList() {
  return (
    <div className="InputList">
      <select>
        <option id="notselected" value="">
          Sélectionner un choix
        </option>
        <option id="selected" value="choix1">
          Choix n°1
        </option>
        <option id="selected" value="choix2">
          Choix n°2
        </option>
        <option id="selected" value="choix3">
          Choix n°3
        </option>
      </select>
    </div>
  );
}

export default InputList;
