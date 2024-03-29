import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import uploadIcon from "../../assets/icons/upload.png";

function InputImage({ label, userId, preview = "" }) {
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
    const modifiedFileName = `image_profile_${userId}`;
    setFileName(modifiedFileName);

    const fileSizeInBytes = selectedFile.size;
    const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB

    if (fileSizeInBytes > maxSizeInBytes) {
      setErrorMessage("Taille maximale dépassée (5 Mo)");
      setFile(null);
      setFileName("");
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

      const formData = new FormData();
      const modifiedFileNameWithExtension = `${fileName}.${file.name
        .split(".")
        .pop()}`;

      formData.append("file", file, modifiedFileNameWithExtension);
      formData.append("userId", userId);

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/image/${userId}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.info("");
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
    <div className="InputImage">
      <label htmlFor="fileInput" className="custom-label">
        {label}
        <div className="imageHeigth">
          <input
            id="fileInput"
            type="file"
            accept=".png, .jpeg, .jpg"
            className="custom-input"
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

InputImage.propTypes = {
  label: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  preview: PropTypes.string,
};

InputImage.defaultProps = {
  preview: undefined,
};

export default InputImage;
