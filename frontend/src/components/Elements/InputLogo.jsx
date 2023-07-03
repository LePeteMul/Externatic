import React, { useState } from "react";
import PropTypes from "prop-types";
import uploadIcon from "../../assets/icons/upload.png";

function InputLogo({ label, set }) {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const fileSizeInBytes = selectedFile.size;
    const maxSizeInBytes = 1 * 1024 * 1024; // 5 MB
    set(event.target.value);

    if (fileSizeInBytes > maxSizeInBytes) {
      setErrorMessage("Taille maximale dépassée (5 Mo)");
      setFile(null);
      return;
    }

    const allowedFormats = ["image/png", "image/jpeg"];
    const fileFormat = selectedFile.type;

    if (!allowedFormats.includes(fileFormat)) {
      setErrorMessage(
        "Format de fichier non autorisé. Les formats acceptés sont PNG et JPEG."
      );
      setFile(null);
      return;
    }

    setFile(URL.createObjectURL(selectedFile));
    setErrorMessage("");
  };

  return (
    <div className="InputLogo">
      <label htmlFor="fileInput" className="custom-label">
        <div className="labelInput">{label}</div>
        <div className="imageHeigth">
          <input
            id="fileInput"
            type="file"
            accept=".png, .jpeg, .jpg"
            onChange={handleFileChange}
          />
          <div className="imageSize">
            {file ? (
              <img src={file} className="upload-file" alt="Uploaded Profile" />
            ) : (
              <img src={uploadIcon} className="upload-icon" alt="Upload" />
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </label>
    </div>
  );
}

InputLogo.propTypes = {
  label: PropTypes.string.isRequired,
  set: PropTypes.string.isRequired,
};

export default InputLogo;
