import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import uploadIcon from "../../assets/icons/upload.png";

function InputLogo({ label, companyId, handleChange, preview = "" }) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState(preview);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setPreviewUrl(preview);
  }, [preview]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    const modifiedFileName = `logo_${companyId}`;
    setFileName(modifiedFileName);

    const fileSizeInBytes = selectedFile.size;
    const maxSizeInBytes = 5 * 1024 * 1024; // 5 Mo

    // Vérification de la taille du fichier
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
      setFileName("");
      return;
    }

    setPreviewUrl(URL.createObjectURL(selectedFile));
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
      formData.append("companyId", companyId);

      const response = await fetch(
        `http://localhost:8080/api/company/image/${companyId}`,
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
        console.info(data);
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
            {!previewUrl && !file ? (
              <img src={uploadIcon} className="upload-icon" alt="Upload" />
            ) : (
              <img
                src={previewUrl}
                className="upload-file"
                alt="Uploaded Profile"
              />
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {file && (
              <button onClick={uploadFile} type="button">
                Télécharger le fichier
              </button>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}

InputLogo.propTypes = {
  label: PropTypes.string.isRequired,
  companyId: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  preview: PropTypes.func.isRequired,
};

export default InputLogo;
