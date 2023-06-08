import React, { useState } from "react";
import PropTypes from "prop-types";

function InputImage({ label }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    // Traitez le fichier ici selon vos besoins
    console.info(selectedFile);
    console.info(file);
  };

  return (
    <div className="InputImage">
      <label htmlFor="fileInput">{label}</label>
      <input
        id="fileInput"
        type="file"
        accept=".png, .jpeg, .jpg, .pdf"
        onChange={handleFileChange}
      />
    </div>
  );
}

InputImage.propTypes = {
  label: PropTypes.string.isRequired,
};

export default InputImage;
