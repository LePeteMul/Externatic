import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderWave from "../../components/Header/HeaderWave";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";

function CompanyResetPassword() {
  const date = new Date();
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

    // Envoyer la requête à votre backend
    fetch("http://localhost:8080/api/email/company/resetpassword", {
      method: "POST",
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
    </div>
  );
}

export default CompanyResetPassword;
