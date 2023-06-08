import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";
import RedButton from "../../components/Elements/RedButton";
import InputImage from "../../components/Elements/InputImage";
import InputList from "../../components/Elements/InputList";

function CandidateProfile() {
  const handleValidation = () => {
    if (
      // eslint-disable-next-line no-alert
      window.confirm("Êtes-vous sûr de vouloir valider vos modifications ?")
    ) {
      // Code à exécuter si l'utilisateur confirme la validation
      // Par exemple, vous pouvez envoyer une requête au serveur pour sauvegarder les modifications
    }
  };

  const handleDeletion = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm("Êtes-vous sûr de vouloir supprimer vos données ?")) {
      // Code à exécuter si l'utilisateur confirme la suppression
      // Par exemple, vous pouvez envoyer une requête au serveur pour supprimer les données
    }
  };

  return (
    <div className="CandidateProfile">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <h3>Mon profil</h3>
        <div className="input">
          <InputText
            label="Genre"
            inputMessage="je suis une femme un homme, non binaire"
          />
          <InputText label="Nom" inputMessage="Ex : Dupont" />
          <InputText label="Prénom" inputMessage="Ex :Marie" />
          <InputText label="Email" inputMessage="Ex : m.dupont@gmail.com" />
          <InputText label="Téléphone" inputMessage="Ex : 06 XX XX XX XX" />
          <InputText label="Ville" inputMessage="Ex : Paris" />
        </div>

        <div className="input">
          <InputImage label="CV" accept=".pdf" />
        </div>

        <InputList
          label="Technologies Maitrisées"
          inputMessage="Ex : JavaScript , Angular , Php , ..."
          data={[
            { value: "language1", name: "JavaScript" },
            { value: "language2", name: "Metier n°2" },
            { value: "language3", name: "Metier n°3" },
          ]}
        />

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
