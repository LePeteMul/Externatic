import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import user from "../../assets/icons/user.png";
import loupe from "../../assets/icons/loupe.png";
import InputList from "../../components/Elements/InputList";

function Application() {
  return (
    <div className="application">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="applicationTitle">
          <h1>Candidature(s)</h1>
        </div>

        <div className="application_details">
          <h2 className="position">Service Delivery Manager</h2>
          <h2 className="date_location">31/05/2023 | CDI | Bordeaux</h2>
        </div>

        <div className="card_application">
          <div className="card_info">
            <img className="user_pic" src={user} alt="" srcSet="" />
            <div className="name_email">
              <h3>Marie Dupont</h3>
              <h3>maria.dupont@gmail.com</h3>
            </div>
            <img className="loupe" src={loupe} alt="" />
          </div>

          <div className="status">
            <InputList
              inputMessage="Selectionner un statut"
              data={[
                { value: "Reçu", name: "Reçu" },
                {
                  value: "En cours de traitement",
                  name: "En cours de traitement",
                },
                { value: "Entretien planifié", name: "Entretien planifié" },
                { value: "Accepté", name: "Accepté" },
                { value: "Refusé", name: "Refusé" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
