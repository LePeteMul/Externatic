import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputList from "../../components/Elements/InputList";
import Textearea from "../../components/Elements/Textearea";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";
import InputText from "../../components/Elements/InputText";

function OfferCreation() {
  const [posted, setPosted] = useState(false);
  const [data, setData] = useState([]);
  const [min_salary, setMin_salary] = useState("");
  const [max_salary, setMax_salary] = useState("");
  const [description, setDescription] = useState("");
  const [job, setJob] = useState([]);

  const handlePosted = () => {
    setPosted(true);
  };

  // Fetch the contact table from DB
  useEffect(() => {
    fetch("http://localhost:8080/api/contract")
      .then((response) => response.json())
      .then((res) => {
        console.info(res);
        setData(res);
      })
      .catch((err) => console.error(err));
  }, []);

  // Post the company's job offer creation
  const handlePostRequest = () => {
    const url = "http://localhost:8080/api/offer";
    const requestData = {
      company_id: 3,
      job,
      contract_id: 1,
      min_salary,
      max_salary,
      description,
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
    <div className="offer_creation">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        {!posted && (
          <div>
            <div className="page_title">
              <h1>Nouvelle offre</h1>
            </div>

            <div className="offer inputs">
              {/* Here I've replacer the InputList by Input text as it's offer creation not offer selection */}
              <InputText
                label="Intitulé du poste"
                inputMessage="Intitulé du poste"
                type="text"
                set={setJob}
              />

              {/* Here I've put the data of contract table */}
              <InputList
                label="Type de contrat"
                inputMessage="Selectionner un contrat"
                data={data}
                // data={[
                //   { value: "CDI", name: "CDI" },
                //   { value: "CDD", name: "CDD" },
                //   { value: "Stage", name: "Stage" },
                // ]}
              />
              <InputText
                label="Salaire annuel brut minimum (euros)"
                inputMessage="30 000"
                type="text"
                set={setMin_salary}
              />
              <InputText
                label="Salaire annuel brut maximum (euros)"
                inputMessage="35 000"
                type="text"
                set={setMax_salary}
              />
              <Textearea
                label="Missions du poste"
                inputMessage="Description"
                rows={3}
                set={setDescription}
              />

              <InputList
                label="Localisation"
                inputMessage="Selectionner la ville"
                data={[
                  { value: "Nantes", name: "Nantes" },
                  { value: "Paris", name: "Paris" },
                  { value: "Toulouse", name: "Toulouse" },
                ]}
              />

              <InputList
                label="Télétravail"
                inputMessage="Selectionner un mode de télétravail"
                data={[
                  { value: "Total", name: "Total" },
                  { value: "Partiel", name: "Partiel" },
                  { value: "Pas disponible", name: "Pas disponible" },
                ]}
              />

              <Textearea
                label="Soft Skills"
                inputMessage="Description "
                rows={9}
              />

              <Textearea
                label="Hard Skills"
                inputMessage="Description"
                rows={9}
              />

              <div className="offer End">
                <BlackButton
                  buttonName="Ajouter cette offre"
                  // buttonFunction={handlePosted}
                  buttonFunction={handlePostRequest}
                />
              </div>
            </div>
          </div>
        )}

        {posted && (
          <div>
            <div className="confOfferCreation">
              <h2>L'offre d'emploi a bien été publiée</h2>
            </div>
            <div className="confOfferCreation">
              <NavLink to="/company/dashboard">
                <WhiteButton buttonName="Retour à mon espace" />
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OfferCreation;
