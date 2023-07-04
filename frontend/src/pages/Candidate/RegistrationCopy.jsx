import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import eye from "../../assets/icons/eye.png";
import BlackButton from "../../components/Elements/BlackButton";

function RegistrationCopy() {
  const [formData, setFormData] = useState({
    // Validation password is missing
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const [isCreated, setIsCreated] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = { ...formData };
    const requestEmail = { email: formData.email };

    fetch("http://localhost:8080/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        setIsCreated(!isCreated);
        console.info(response);
        // Perform any necessary actions after successful POST request
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occurred during the POST request
      });

    if (isCreated) {
      fetch("http://localhost:8080/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestEmail),
      })
        .then((response) => {
          setIsSent(!isSent);
          console.info(response);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
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
              placeholder="****"
              name="password"
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
