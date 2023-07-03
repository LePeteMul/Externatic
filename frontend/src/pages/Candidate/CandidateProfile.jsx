import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";
import RedButton from "../../components/Elements/RedButton";
import InputList from "../../components/Elements/InputList";
import LanguageList from "../../components/Elements/LanguageList";
import InputCv from "../../components/Elements/InputCv";

function CandidateProfile() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [cv, setCv] = useState("");

  const handleValidation = () => {
    if (
      // eslint-disable-next-line no-alert
      window.confirm("Êtes-vous sûr de vouloir valider vos modifications ?")
    ) {
      window.location.href = "/Candidate/dashboard";
      // Code à exécuter si l'utilisateur confirme la validation
      // Par exemple, vous pouvez envoyer une requête au serveur pour sauvegarder les modifications
    }
  };

  const handleDeletion = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm("Êtes-vous sûr de vouloir supprimer vos données ?")) {
      window.location.href = "/";
      // Code à exécuter si l'utilisateur confirme la suppression
      // Par exemple, vous pouvez envoyer une requête au serveur pour supprimer les données
    }
  };

  const handlePutRequest = () => {
    const url = "http://localhost:8080/api/user/:id";
    const requestData = {
      lastname,
      firstname,
      email,
      phone,
      city,
      cv,
      password: "****",
    };

    // Have to check with Lucas why do I need to
    // add a password in my put request as it should not be
    // null ok, but the password is already existing in the DB ..
    // Same as AdminPtofile Component

    // Have to check for cv attachment why it's not included in the request
    //  I have somthing like this : "cv": "",

    fetch(url, {
      method: "PUT",
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
    <div className="CandidateProfile">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="candidateProfileTitle">
          <h1>Mon profil</h1>
        </div>
        <div className="input">
          <InputList
            label="Genre"
            inputMessage="Selectionner votre genre"
            data={[
              { value: "genre1", name: "Je suis une femme" },
              { value: "genre 2", name: "Je suis un homme" },
              { value: "genre 3", name: "je suis non binaire" },
            ]}
          />
          <InputText
            label="Nom"
            inputMessage="Dupont"
            type="text"
            set={setLastname}
          />
          <InputText
            label="Prénom"
            inputMessage="Marie"
            type="text"
            set={setFirstname}
          />
          <InputText
            label="Email"
            inputMessage="m.dupont@gmail.com"
            type="email"
            set={setEmail}
          />
          <InputText
            label="Téléphone"
            inputMessage="06 06 06 06 06"
            type="tel"
            set={setPhone}
          />
          <InputText
            label="Ville"
            inputMessage="Paris"
            type="text"
            set={setCity}
          />
        </div>

        <div className="input">
          <InputCv label="CV" accept=".pdf" set={setCv} />
        </div>

        <LanguageList />

        <div className="validationSuppression">
          <BlackButton
            buttonName="Valider mes modifications"
            // buttonFunction={handleValidation}
            buttonFunction={handlePutRequest}
          />
          <RedButton
            buttonName="Supprimer mes données"
            buttonFunction={handleDeletion}
          />
        </div>
      </div>
    </div>
  );
}

export default CandidateProfile;
