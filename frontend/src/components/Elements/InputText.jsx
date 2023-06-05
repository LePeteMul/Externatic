import React, { useState } from "react";

function InputText() {
  const [entry, setEntry] = useState("Champ vide");
  const [colorText, setColorText] = useState("notselected");

  const handleChange = (event) => {
    setEntry(event.target.value);
    setColorText("selected");
  };

  return (
    <div className="InputText">
      <label htmlFor="label">Label </label>
      <input type="text" value={entry} id={colorText} onChange={handleChange} />
    </div>
  );
}

export default InputText;
