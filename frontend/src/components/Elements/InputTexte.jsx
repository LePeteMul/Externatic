import React, { useState } from "react";
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
  value,
  disabled,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="inputText">
      <label htmlFor={name}>{label}</label>
      <input
        type={type === "password" && isPasswordVisible ? "text" : type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        value={value}
        disabled={disabled}
      />
      {type === "password" && image && (
        <div className="eyeButtonSystem">
          <button
            type="button"
            className="eyeButton"
            onClick={handleTogglePasswordVisibility}
          >
            <img className="eyeIcon" src={image} alt="IconEye" />
          </button>
        </div>
      )}
      {image2 && <img className="profil" src={image2} alt="IconProfil" />}
      {image3 && <img className="lock" src={image3} alt="IconLock" />}
    </div>
  );
}

InputTexte.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  image: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

InputTexte.defaultProps = {
  handleChange: () => {},
  label: "",
  image: "",
  image2: "",
  image3: "",
  placeholder: undefined,
  name: undefined,
  type: undefined,
  value: undefined,
  disabled: false,
};

export default InputTexte;
