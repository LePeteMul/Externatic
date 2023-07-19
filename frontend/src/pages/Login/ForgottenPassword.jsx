import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HeaderWave from "../../components/Header/HeaderWave";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";

function ForgottenPassword() {
  const date = new Date();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    ipLocal: window.location.hostname,
    date: date.toLocaleString(),
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Récupérer la date et l'heure de la requête

    // Récupérer la date et l'ip
    // setFormData((table) => ({
    //   ...table,
    //   ipLocal: ,
    // }));

    // Envoyer la requête à votre backend
    fetch("http://localhost:8080/api/email/resetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        // Traiter la réponse du serveur
        if (response.ok) {
          // La requête a réussi, afficher la pop-up
          toggleModal();
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

  // Nouvelle variable d'état pour contrôler l'affichage de la pop-up
  const [showModal, setShowModal] = useState(false);

  // Fonction pour basculer l'état de la pop-up
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
        <form onSubmit={handleSubmit} className="input">
          <div className="inputs">
            <InputTexte
              label="Votre adresse email"
              name="email"
              type="email"
              placeholder="john.doe@gmail.com"
              handleChange={handleChange}
            />
          </div>

          <div className="btn_Connexion">
            <BlackButton
              buttonName="Recevoir l'email de confirmation"
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

      {showModal && (
        <div className="modal-container">
          <div className="modal">
            {/* <img src="/chemin/vers/le/logo.png" alt="Logo" /> */}

            <h2>📨 Email de confirmation envoyé !</h2>

            <p>
              Vous y trouverez un lien de confirmation de création de compte. Le
              lien est valable durant 24h.
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

export default ForgottenPassword;
