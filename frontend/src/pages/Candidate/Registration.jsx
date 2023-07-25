import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import eye from "../../assets/icons/eye.png";
import BlackButton from "../../components/Elements/BlackButton";
import Popup from "../../components/Elements/Popup";

function Registration() {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    validation_password: "",
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handlePopupClose = () => {
    if (isSent) {
      navigate("/login");
      setIsSent(false);
    } else if (error) {
      setError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = { ...formData };
    const requestEmail = { email: formData.email };

    /* eslint-disable-next-line */
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setError("Adresse mail incorrecte");
    } else if (formData.password !== formData.validation_password) {
      setError("Les mots de passe ne sont pas identiques");
    } else if (
      formData.email &&
      formData.lastname &&
      formData.firstname &&
      formData.password &&
      formData.validation_password
    ) {
      fetch("http://localhost:8080/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => {
          if (response.status === 400) {
            setError("Cet email est déjà utilisé");
          }
          fetch("http://localhost:8080/api/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestEmail),
          })
            .then((res) => {
              setIsSent(!isSent);
            })
            .catch((err) => {
              console.error("Error:", err);
            });
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    } else {
      setError("Merci de compléter tous les champs");
    }
  };

  return (
    <div className="registration">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="registrationTitle">
          <h1>M'inscrire </h1>
        </div>
        <form onSubmit={handleSubmit} className="input">
          <div className="registrationDetails">
            <InputTexte
              label="Nom"
              name="lastname"
              placeholder="DUPONT"
              type="text"
              handleChange={handleChange}
            />
            <InputTexte
              label="Prénom"
              name="firstname"
              placeholder="Bob"
              type="text"
              handleChange={handleChange}
            />
            <InputTexte
              label="Adresse mail :"
              name="email"
              placeholder="bob@gmail.com"
              type="email"
              handleChange={handleChange}
            />
            <InputTexte
              label="Mot de passe"
              placeholder="*******************"
              name="password"
              image={eye}
              type="password"
              handleChange={handleChange}
            />
            <InputTexte
              label="Confirmer le mot de passe :"
              placeholder="*******************"
              name="validation_password"
              image={eye}
              type="password"
              handleChange={handleChange}
            />
          </div>

          <BlackButton
            buttonName="Je m'inscris"
            buttonFunction={handleSubmit}
          />
        </form>

        {isSent && (
          <Popup
            title="Enregistrer"
            message="Un email de confirmation vous a été envoyé. Consultez votre boite mail et suivez les instructions pour confirmer votre inscription."
            onClose={handlePopupClose}
            buttonname="Se connecter"
          />
        )}
        {error && (
          <Popup
            title="Erreur"
            message={error}
            onClose={handlePopupClose}
            buttonname="Ok"
          />
        )}
      </div>
    </div>
  );
}

export default Registration;
