import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";
import eye from "../../assets/icons/eye.png";

function Registration() {
  const [confirmation, setConfirmation] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleConfirmation = () => {
    setConfirmation(true);
  };

  const handlePostRequest = () => {
    const url = "http://localhost:8080/api/user/register";
    const requestData = {
      lastname: lastName,
      firstname: firstName,
      email,
      password,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.info("Response:", data);
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
          <h1>M'inscrire</h1>
        </div>
        <div className="registrationDetails">
          <InputText label="Nom" inputMessage="DUPONT" set={setLastName} />
          <InputText label="Prénom" inputMessage="Bob" set={setFirstName} />
          <InputText
            label="Adresse mail :"
            inputMessage="bob@gmail.com"
            type="email"
            set={setEmail}
          />
          <InputText
            label="Mot de passe"
            inputMessage=""
            image={eye}
            type="password"
            set={setPassword}
          />
          <InputText
            label="Confirmer le mot de passe :"
            inputMessage=""
            image={eye}
            type="password"
            set={setConfirmPassword}
          />
        </div>
        <div className="btn_registration">
          <BlackButton
            buttonName="Je m'inscris"
            buttonFunction={handlePostRequest}
          />
        </div>

        {confirmation && (
          <div className="conf_registration">
            Un email de confirmation vous a été envoyé à XYZ@gmail.com Consultez
            votre boite mail et suivez les instructions pour confirmer votre
            inscription
          </div>
        )}
      </div>
    </div>
  );
}

export default Registration;
