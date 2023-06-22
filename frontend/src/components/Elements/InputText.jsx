import React, { useState } from "react";
import PropTypes from "prop-types";

function InputText({ label, inputMessage, type, image, image2, image3 }) {
  const [entry, setEntry] = useState("");

  const handleChangeInput = (event) => {
    setEntry(event.target.value);
  };

  return (
    <div className="InputText">
      <label htmlFor="label">{label} </label>
      <input
        className={entry === "" ? "notselected" : "selected"}
        type={type}
        value={entry}
        onChange={handleChangeInput}
        placeholder={inputMessage}
      />
      {image && <img className="eye" src={image} alt="IconEye" />}
      {image2 && <img className="profil" src={image2} alt="IconProfil" />}
      {image3 && <img className="lock" src={image3} alt="IconLock" />}
    </div>
  );
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  inputMessage: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  image3: PropTypes.string.isRequired,
};

export default InputText;
