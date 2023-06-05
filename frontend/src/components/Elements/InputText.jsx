import React, { useState } from "react";

function InputText() {
  const [entry, setEntry] = useState("Champ vide");

  const handleClickInput = () => {
    setEntry("");
  };

  const handleChangeInput = (event) => {
    setEntry(event.target.value);
  };

  return (
    <div className="InputText">
      <br />
      <label htmlFor="label">Label </label>
      <br />
      <input
        className={entry === "Champ vide" ? "notselected" : "selected"}
        type="text"
        value={entry}
        onChange={handleChangeInput}
        onClick={handleClickInput}
      />
    </div>
  );
}

export default InputText;
