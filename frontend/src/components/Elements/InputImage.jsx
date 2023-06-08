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
      <span>{label}</span>
      <label htmlFor="fileInput" className="upload-label">
        <div
          role="button"
          tabIndex="0"
          onClick={handleImageClick}
          onKeyPress={handleKeyPress}
        >
          <img
            src={upload}
            alt="Sélectionner un fichier"
            className="upload-icon"
          />
        </div>
        <input
          id="fileInput"
          type="file"
          accept=".png, .jpeg, .jpg, .pdf"
          style={{ display: "none" }}
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        {file && <span>{file.name}</span>}
      </label>
    </div>
  );
}

InputImage.propTypes = {
  label: PropTypes.string.isRequired,
};

export default InputImage;
