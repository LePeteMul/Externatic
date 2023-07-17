import React, { useState } from "react";
import PropTypes from "prop-types";
import upload from "../../assets/icons/upload.png";

function InputCv({ label, handleChange, userId }) {
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

    setErrorMessage(""); // Réinitialiser le message d'erreur
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
        `http://localhost:8080/api/user/cv/${userId}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Le fichier a été téléchargé avec succès
        console.info("Le fichier a été téléchargé avec succès !");
        // Traitez la réponse du backend ici si nécessaire
        const data = await response.json();
      } else {
        // Gérez les erreurs de requête ici
        console.error(
          "Une erreur s'est produite lors du téléchargement du fichier."
        );
      }
    } catch (error) {
      // Gérez les erreurs ici
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
  userId: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputCv;
