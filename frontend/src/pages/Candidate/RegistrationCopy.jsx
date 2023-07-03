import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import eye from "../../assets/icons/eye.png";
import BlackButton from "../../components/Elements/BlackButton";

function RegistrationCopy() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = { email: formData.email };

    fetch("http://localhost:8080/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((data) => {
        console.info("Response:", data);
        setIsSent(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
          <div className="conf_registration">
            Un email de confirmation vous a été envoyé. Consultez votre boite
            mail et suivez les instructions pour confirmer votre inscription.
          </div>
        )}
      </div>
    </div>
  );
}

export default RegistrationCopy;
