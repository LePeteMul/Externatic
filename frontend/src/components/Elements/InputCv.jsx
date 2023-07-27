import React, { useState } from "react";
import PropTypes from "prop-types";
import upload from "../../assets/icons/upload.png";

function InputCv({ label, userId }) {
  const token = localStorage.getItem("token");

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    const modifiedFileName = `cv_${userId}`;
    setFileName(modifiedFileName);

    const fileSizeInBytes = selectedFile.size;
    const maxSizeInBytes = 5 * 1024 * 1024; // 5 Mo

    if (fileSizeInBytes > maxSizeInBytes) {
      setErrorMessage("Taille maximale dépassée (5 Mo)");
      return;
    }

    const allowedFormats = ["application/pdf", "image/png", "image/jpeg"];
    const fileFormat = selectedFile.type;

    if (!allowedFormats.includes(fileFormat)) {
      setErrorMessage(
        "Format de fichier non autorisé. Les formats acceptés sont PDF, PNG et JPEG."
      );
      return;
    }

    setErrorMessage("");
  };

  const uploadFile = async () => {
    try {
      if (!file) {
        // Aucun fichier sélectionné
        return;
      }
      // changement du nom du fichier
      const formData = new FormData();
      const modifiedFileNameWithExtension = `${fileName}.${file.name
        .split(".")
        .pop()}`;

      formData.append("file", file, modifiedFileNameWithExtension);

      formData.append("userId", userId);

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/cv/${userId}`,
        {
          method: "POST",
          body: formData,
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.ok) {
        console.info("Votre CV a été téléchargé avec succès !");
      } else {
        console.error(
          "Une erreur s'est produite lors du téléchargement du fichier."
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="InputCv">
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
            <img src={upload} alt="Upload" />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {file && (
              <div className="selected-file">
                <p>{file.name}</p>
                <button onClick={uploadFile} type="button">
                  Upload
                </button>
              </div>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}

InputCv.propTypes = {
  label: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};

export default InputCv;
