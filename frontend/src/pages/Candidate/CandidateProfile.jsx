import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import RedButton from "../../components/Elements/RedButton";
import InputListe from "../../components/Elements/InputListe";
import LanguageList from "../../components/Elements/LanguageList";
import InputCv from "../../components/Elements/InputCv";
import Popup from "../../components/Elements/Popup";

function CandidateProfile() {
  const navigate = useNavigate();
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const handlePopup1Open = () => {
    setShowPopup1(true);
  };

  const handlePopup1Close = () => {
    setShowPopup1(false);
    navigate("/candidate/dashboard"); // Rediriger vers la première page différente
  };

  const handlePopup2Open = () => {
    setShowPopup2(true);
  };

  const handlePopup2Close = () => {
    setShowPopup2(false);
    navigate("/"); // Rediriger vers la deuxième page différente
  };

  const [formData, setFormData] = useState({
    gender: "",
    lastname: "",
    firstname: "",
    email: "",
    phone: "",
    city: "",
    // language: "",
    cv: "",
    password: "****",
    admin: 0,
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (file) => {
    setFormData((previousValue) => ({
      ...previousValue,
      cv: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/api/user/7";
    const requestData = { ...formData };

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
        // Perform any necessary actions after successful POST request
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occurred during the POST request
      });
  };

  const handleDeletion = () => {
    setFormData({
      gender: "",
      lastname: "",
      firstname: "",
      email: "",
      phone: "",
      city: "",
      language: "",
      cv: "",
    });
  };
  return (
    <div className="CandidateProfile">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="candidateProfileTitle">
          <h1>Mon profil</h1>
        </div>
        <form onSubmit={handleSubmit} className="input">
          <InputListe
            label="Genre"
            name="gender"
            placeholder="Selectionner votre genre"
            handleChange={handleChange}
            data={[
              { value: "genre1", name: "Je suis une femme" },
              { value: "genre 2", name: "Je suis un homme" },
              { value: "genre 3", name: "je suis non binaire" },
            ]}
          />
          <InputTexte
            label="Nom"
            name="lastname"
            placeholder="Dupont"
            type="text"
            handleChange={handleChange}
          />
          <InputTexte
            label="Prénom"
            name="firstname"
            placeholder="Marie"
            type="text"
            handleChange={handleChange}
          />
          <InputTexte
            label="Email"
            name="email"
            placeholder="m.dupont@gmail.com"
            type="email"
            handleChange={handleChange}
          />
          <InputTexte
            label="Téléphone"
            name="phone"
            placeholder="06 06 06 06 06"
            type="tel"
            handleChange={handleChange}
          />
          <InputTexte
            label="Ville"
            name="city"
            placeholder="Paris"
            type="text"
            handleChange={handleChange}
          />
          <InputCv label="CV" accept=".pdf" handleChange={handleFileChange} />
          <LanguageList
            name="language"
            handleChange={handleChange}
            selectedLanguages={formData.language}
          />
          <BlackButton
            buttonName="Valider mes modifications"
            buttonFunction={handlePopup1Open}
          />

          {showPopup1 && (
            <Popup
              title="Données modifiées"
              message="Super, tes données ont été modifiées !"
              open={showPopup1}
              onClose={handlePopup1Close}
              buttonname="Retour au Dashboard"
            />
          )}
          <RedButton
            buttonName="Supprimer mes données"
            buttonFunction={(event) => {
              event.preventDefault();
              handlePopup2Open();
              handleDeletion();
            }}
          />

          {showPopup2 && (
            <Popup
              title="Données supprimées"
              open={showPopup2}
              onClose={handlePopup2Close}
              buttonname={"Retour a l'acceuil"}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default CandidateProfile;
