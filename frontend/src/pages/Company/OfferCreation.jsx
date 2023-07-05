import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputListe from "../../components/Elements/InputListe";
import Textearea from "../../components/Elements/Textearea";
import BlackButton from "../../components/Elements/BlackButton";
import InputTexte from "../../components/Elements/InputTexte";

function OfferCreation() {
  const [formData, setFormData] = useState({
    company_id: 1,
    job: "",
    contract_id: "",
    min_salary: "",
    max_salary: "",
    description: "",
    city_job: "",
    // softskills: "",
    // hardskills: "",
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/api/offer";
    const requestData = { ...formData };

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
        // Perform any necessary actions after successful POST request
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occurred during the POST request
      });
  };

  return (
    <div className="offer_creation">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        {/* {!posted && ( */}
        <div>
          <div className="page_title">
            <h1>Nouvelle offre</h1>
          </div>
          <form onSubmit={handleSubmit} className="input">
            <div className="offerinputs">
              <InputListe
                label="Poste"
                name="job"
                placeholder="Selectionner un métier"
                handleChange={handleChange}
                data={[
                  { value: "metier1", name: "Metier n°1" },
                  { value: "metier2", name: "Metier n°2" },
                  { value: "metier3", name: "Metier n°3" },
                ]}
              />

              <InputListe
                label="Type de contrat"
                name="contract_id"
                placeholder="Selectionner un contrat"
                handleChange={handleChange}
                data={[
                  { value: "1", name: "1" },
                  { value: "CDD", name: "CDD" },
                  { value: "Stage", name: "Stage" },
                ]}
              />
              <InputTexte
                label="Salaire annuel brut minimum (euros)"
                name="min_salary"
                placeholder="30 000"
                handleChange={handleChange}
                type="text"
              />
              <InputTexte
                label="Salaire annuel brut maximum (euros)"
                name="max_salary"
                placeholder="35 000"
                handleChange={handleChange}
                type="text"
              />
              <Textearea
                label="Missions du poste"
                name="description"
                placeholder="Description"
                handleChange={handleChange}
                rows={3}
                type="text"
              />

              <InputListe
                label="Localisation"
                placeholder="Selectionner la ville"
                name="city_job"
                handleChange={handleChange}
                data={[
                  { value: "Nantes", name: "Nantes" },
                  { value: "Paris", name: "Paris" },
                  { value: "Toulouse", name: "Toulouse" },
                ]}
              />

              <InputListe
                label="Télétravail"
                placeholder="Selectionner un mode de télétravail"
                name="teletravail"
                handleChange={handleChange}
                data={[
                  { value: "Total", name: "Total" },
                  { value: "Partiel", name: "Partiel" },
                  { value: "Pas disponible", name: "Pas disponible" },
                ]}
              />

              <Textearea
                label="Soft Skills"
                name="softskills"
                handleChange={handleChange}
                placeholder="Description"
                rows={9}
                type="text"
              />

              <Textearea
                label="Hard Skills"
                name="hardskills"
                handleChange={handleChange}
                placeholder="Description"
                rows={9}
                type="text"
              />

              <div className="offerEnd">
                <BlackButton
                  buttonName="Ajouter cette offre"
                  buttonFunction={handleSubmit}
                  // buttonFunction={handlePosted}
                />
              </div>
            </div>
          </form>
        </div>

        {/* )}

        {posted && (
          <div>
            <div className="confOfferCreation">
              <h2>L'offre d'emploi a bien été publiée</h2>
            </div>
            <div className="confOfferCreation">
                <WhiteButton buttonName="Retour à mon espace"buttonFunction={handleSubmit} />
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default OfferCreation;
