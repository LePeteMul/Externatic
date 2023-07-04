import React from "react";
import PropTypes from "prop-types";

function InputTexte({
  type,
  name,
  placeholder,
  handleChange,
  label,
  image,
  image2,
  image3,
}) {
  return (
    <div className="inputText">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
      />
      {image && <img className="eye" src={image} alt="IconEye" />}
      {image2 && <img className="profil" src={image2} alt="IconProfil" />}
      {image3 && <img className="lock" src={image3} alt="IconLock" />}
    </div>
  );
}

InputTexte.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  image: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
};

InputTexte.defaultProps = {
  handleChange: () => {},
  label: "",
  image: "",
  image2: "",
  image3: "",
};

export default InputTexte;
