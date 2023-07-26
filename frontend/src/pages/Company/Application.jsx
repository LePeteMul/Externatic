import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import loupe from "../../assets/icons/loupe.png";
import InputListe from "../../components/Elements/InputListe";
import BlackButton from "../../components/Elements/BlackButton";
import JobOfferContext from "../../contexts/JobOfferContext/JobOfferContext";

function Application() {
  const token = localStorage.getItem("token");

  const [result, setResult] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const { offerId } = useContext(JobOfferContext);

  useEffect(() => {
    const url = `http://localhost:8080/api/application/byOfferId/${offerId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        setSelectedStatus(parseInt(data.status_id));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [offerId]);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    updateApplicationStatus(e.target.value);
  };

  const updateApplicationStatus = (status) => {
    const parsedStatus = parseInt(status);
    const offer_id = parseInt(result.offer_id);
    const url = `http://localhost:8080/api/application/${result.id}/status`;

    if (!isNaN(parsedStatus) && !isNaN(result.id) && !isNaN(result.offer_id)) {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: parsedStatus, offer_id }),
      })
        .then((response) => {
          if (response.status !== 204) {
            console.error(response.statusText);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.error("Invalid status or ID values");
    }
  };

  return (
    <div className="application">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        {!result && (
          <div className="applicationTitle">
            <h1>Pas de candidature pour cette offre</h1>
          </div>
        )}
        {result && (
          <div className="applicationTitle">
            <h1>Candidature(s)</h1>
          </div>
        )}
        {result && (
          <div className="application_details">
            <h2 className="position">{result.job}</h2>
            <h2 className="date_location">
              31/05/2023 | {result.contract_type} | {result.city_job}
            </h2>
          </div>
        )}
        {result && (
          <div className="card_application">
            <NavLink to={`/company/profilecandidate/${result.user_id}`}>
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
              <InputListe
                inputMessage="Selectionner un statut"
                data={[
                  { value: 1, name: "En cours de traitement" },
                  { value: 2, name: "Entretien planifié" },
                  { value: 3, name: "Accepté" },
                  { value: 4, name: "Refusé" },
                ]}
                value={selectedStatus}
                handleChange={handleStatusChange}
              />
            </div>
          </div>
        )}
        <div className="applicationEnd">
          <NavLink to="/company/dashboard">
            <BlackButton buttonName="Retour à mon espace" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Application;
