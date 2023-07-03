import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";
import RedButton from "../../components/Elements/RedButton";
import InputList from "../../components/Elements/InputList";
import LanguageList from "../../components/Elements/LanguageList";
import InputCv from "../../components/Elements/InputCv";

function CandidateProfile() {
  const handleValidation = () => {
    if (
      window.confirm("Êtes-vous sûr de vouloir valider vos modifications ?")
    ) {
      window.location.href = "/Candidate/dashboard";
    }
  };

  const handleDeletion = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer vos données ?")) {
      window.location.href = "/";
    }
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
          <InputText label="Nom" inputMessage="Dupont" type="text" />
          <InputText label="Prénom" inputMessage="Marie" type="text" />
          <InputText
            label="Email"
            inputMessage="m.dupont@gmail.com"
            type="email"
          />
          <InputText
            label="Téléphone"
            inputMessage="06 06 06 06 06"
            type="tel"
          />
          <InputText label="Ville" inputMessage="Paris" type="text" />
        </div>

        <div className="input">
          <InputCv label="CV" accept=".pdf" />
        </div>

        <LanguageList />

        <div className="validationSuppression">
          <BlackButton
            buttonName="Valider mes modifications"
            buttonFunction={handleValidation}
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
