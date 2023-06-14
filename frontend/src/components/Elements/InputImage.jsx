import React, { useState } from "react";
import PropTypes from "prop-types";
import upluod from "../../assets/icons/upload.png";

function InputImage({ label }) {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const fileSizeInBytes = selectedFile.size;
    const maxSizeInBytes = 1 * 1024 * 1024; // 5 MB

    if (fileSizeInBytes > maxSizeInBytes) {
      // Le fichier dépasse la limite de taille
      setErrorMessage("Taille maximale dépassée (5 Mo)");
      return;
    }

    const allowedFormats = ["application/pdf", "image/png", "image/jpeg"];
    const fileFormat = selectedFile.type;

    if (!allowedFormats.includes(fileFormat)) {
      // Le format du fichier n'est pas autorisé
      setErrorMessage(
        "Format de fichier non autorisé. Les formats acceptés sont PDF, PNG et JPEG."
      );
      return;
    }

    setFile(selectedFile);
    setErrorMessage(""); // Réinitialiser le message d'erreur
    // Traitez le fichier ici selon vos besoins
    console.info(selectedFile);
    console.info(file);
  };

  return (
    <div className="InputImage">
      <label htmlFor="fileInput" className="custom-label">
        {label}
        <div className="input-container">
          <input
            id="fileInput"
            type="file"
            accept=".pdf, .png, .jpeg, .jpg"
            onChange={handleFileChange}
          />
          <div className="upload-icon">
            <img src={upluod} alt="Upload" />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {file && (
              <div className="selected-file">
                <p>{file.name}</p>
              </div>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}

InputImage.propTypes = {
  label: PropTypes.string.isRequired,
};

export default InputImage;
