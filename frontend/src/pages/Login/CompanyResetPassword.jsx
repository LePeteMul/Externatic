import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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

function CompanyResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
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

    fetch("http://localhost:8080//api/pass/company/edit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.info("Message envoyé avec succès");
          toggleModal();
        } else {
          console.error("Erreur lors de l'envoi du message");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête:", error);
      });
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const returnToLogin = () => {
    navigate("/login");
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
          <NavLink to="/logincompany">
            <WhiteButton buttonName="Revenir à la page de connexion" />
          </NavLink>
        </div>
      </div>

      {showModal && (
        <div className="modal-container">
          <div className="modal">
            {/* <img src="/chemin/vers/le/logo.png" alt="Logo" /> */}

            <h2>✨ Votre mot de passe a été modifié !</h2>

            <p>
              Vous pouvez désormais vous connecter avec votre nouveau mot de
              passe.
            </p>

            <div className="modal-button">
              <WhiteButton buttonName="Revenir à l'accueil" />
            </div>

            <button
              className="close-modal-button"
              onClick={returnToLogin}
              type="submit"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyResetPassword;
