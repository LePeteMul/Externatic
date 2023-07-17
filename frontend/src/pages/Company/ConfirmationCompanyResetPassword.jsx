import React, { useState, useEffect, useNavigate } from "react";
import { NavLink, useLocation } from "react-router-dom";
import queryString from "query-string";
import HeaderWave from "../../components/Header/HeaderWave";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";

function extraireEmail(badEmail) {
  const params = new URLSearchParams(badEmail);
  if (params.has("email")) {
    const encodedEmail = params.get("email");
    const decodedEmail = decodeURIComponent(encodedEmail);
    return decodedEmail;
  }
  return "";
}

function ConfirmationCompanyResetPassword() {
  const location = useLocation();
  const finalEmail = extraireEmail(queryString.parse(location.search));

  // const navigate = useNavigate();
  // const [showPopup1, setShowPopup1] = useState(false);

  const [formData, setFormData] = useState({
    email: finalEmail,
    password: "",
  });

  const handleChange = (e) => {
    console.info(e.target.value);

    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.info(formData);

    // Envoyer la requête à votre backend
    fetch("http://localhost:8080/api/company/edition/resetpassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        // Traiter la réponse du serveur
        if (response.ok) {
          // La requête a réussi
          console.info("Message envoyé avec succès");
        } else {
          // La requête a échoué
          console.error("Erreur lors de l'envoi du message");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête:", error);
      });
  };

  return (
    <div className="connexion">
      <HeaderWave />
      <div className="boxWithoutHeader">
        <div className="page_title">
          <h1>Récupération de mot de passe</h1>
        </div>
        <div className="subtitle">
          <h4>Compte: {finalEmail}</h4>
        </div>
        <form onSubmit={handleSubmit} className="input">
          <div className="inputs">
            <InputTexte
              label="Nouveau mot de passe"
              name="password"
              type="password"
              placeholder="Votre nouveau mot de passe"
              handleChange={handleChange}
            />
          </div>

          <div className="btn_Connexion">
            <BlackButton
              buttonName="Changer de mot de passe"
              buttonFunction={handleSubmit}
            />
          </div>
        </form>

        <div className="card_signing">
          <NavLink to="/login">
            <WhiteButton buttonName="Revenir à la page de connexion" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationCompanyResetPassword;
