import React, { useState } from "react";
import PropTypes from "prop-types";

function LargeInputText({ label, inputMessage, image, image2, image3 }) {
  const [entry, setEntry] = useState(inputMessage);

  const handleClickInput = () => {};

  const handleChangeInput = (event) => {
    setEntry(event.target.value);
  };

  return (
    <div className="LargeInputText">
      <label htmlFor="label">{label} </label>
      <textarea
        className={entry === inputMessage ? "notselected" : "selected"}
        type="text"
        value={entry}
        onChange={handleChangeInput}
        onClick={handleClickInput}
      />
      {image && <img className="eye" src={image} alt="IconEye" />}
      {image2 && <img className="profil" src={image2} alt="IconProfil" />}
      {image3 && <img className="lock" src={image3} alt="IconLock" />}
    </div>
  );
}

LargeInputText.propTypes = {
  label: PropTypes.string.isRequired,
  inputMessage: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  image3: PropTypes.string.isRequired,
};

export default LargeInputText;
