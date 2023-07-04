import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import loupe from "../../assets/icons/loupe.png";
import InputList from "../../components/Elements/InputList";
import BlackButton from "../../components/Elements/BlackButton";

function Application() {
  const [result, setResult] = useState("");

  // getting application by offer id
  useEffect(() => {
    const url = "http://localhost:8080/api/application/byOfferId/2";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.info("Response:", data);
        setResult(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="application">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="applicationTitle">
          <h1>Candidature(s)</h1>
        </div>

        <div className="application_details">
          {/* <h2 className="position">Service Delivery Manager</h2> */}
          <h2 className="position">{result.job}</h2>
          <h2 className="date_location">
            31/05/2023 | {result.contract_type} | {result.city_job}
          </h2>
        </div>

        <div className="card_application">
          <NavLink to="/company/profilecandidate">
            <div className="card_info">
              <img
                className="user_pic"
                src={result.profil_picture}
                alt=""
                srcSet=""
              />
              <div className="name_email">
                <h3>
                  {result.firstname} {result.lastname}
                </h3>
                <h3>{result.email}</h3>
              </div>
              <img className="loupe" src={loupe} alt="" />
            </div>
          </NavLink>
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
        <div className="applicationEnd">
          <NavLink to="/company/dashboard">
            <BlackButton buttonName="Retour à mon espace" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

// Have to check for the input List

export default Application;
