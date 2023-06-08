import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import upload from "../../assets/icons/upload.png";

function InputImage({ label }) {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    // Traitez le fichier ici selon vos besoins
    console.info(selectedFile);
    console.info(file);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleImageClick();
    }
  };

  return (
    <div className="InputImage">
      <label htmlFor="fileInput">{label}</label>
      <input
        id="fileInput"
        type="file"
        accept=".png, .jpeg, .jpg, .pdf"
        onChange={handleFileChange}
        placeholder="Choisissez un fichier"
      />
    </div>
  );
}

InputImage.propTypes = {
  label: PropTypes.string.isRequired,
};

export default InputImage;
