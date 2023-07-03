import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import RedButton from "../../components/Elements/RedButton";
import InputListe from "../../components/Elements/InputListe";
import LanguageList from "../../components/Elements/LanguageList";
import InputCv from "../../components/Elements/InputCv";

function CandidateProfileCopy() {
  const [formData, setFormData] = useState({
    gender: "",
    lastname: "",
    firstname: "",
    email: "",
    phone: "",
    city: "",
    language: "",
    cv: "",
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
    console.info(formData);
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
    <div className="CandidateProfile_copy">
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
            buttonFunction={handleSubmit}
          />
          <RedButton
            buttonName="Supprimer mes données"
            buttonFunction={handleDeletion}
          />
        </form>
      </div>
    </div>
  );
}

export default CandidateProfileCopy;
