import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputListe from "../../components/Elements/InputListe";
import Textearea from "../../components/Elements/Textearea";
import BlackButton from "../../components/Elements/BlackButton";
import InputTexte from "../../components/Elements/InputTexte";
import Popup from "../../components/Elements/Popup";
import CompanyConnexionContext from "../../contexts/CompanyConnexionContext/CompanyConnexionContext";

function OfferCreation() {
  const navigate = useNavigate();
  const [showPopup1, setShowPopup1] = useState(false);
  const { companyId } = useContext(CompanyConnexionContext);
  const [offerData, setOfferData] = useState([]);

  const handlePopup1Open = () => {
    setShowPopup1(true);
  };

  const handlePopup1Close = () => {
    setShowPopup1(false);
    navigate("/company/dashboard"); // Rediriger vers le dashboard
  };

  const [formData, setFormData] = useState({
    company_id: companyId,
    job: "",
    contract_id: "",
    min_salary: "",
    max_salary: "",
    description: "",
    city_job: "",
    remote: "",
    date: new Date().toISOString(),
    prerequisites: "",
    department: "",
    tech_name: "",
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.info(formData.prerequisites);

    const formattedDate = new Date(formData.date)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    const requestData = {
      ...formData,
      date: formattedDate,
    };

    const url = "http://localhost:8080/api/offer";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/offer");
        const data = await response.json();
        setOfferData(data);
      } catch (error) {
        console.error("Error fetching offer data:", error);
      }
    };

    fetchData();
  }, []);

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
                data={offerData.map((offer) => ({
                  value: offer.job,
                  name: offer.job,
                }))}
              />

              <InputListe
                label="Type de contrat"
                name="contract_id"
                placeholder="Selectionner un contrat"
                handleChange={handleChange}
                data={[
                  { value: "1", name: "CDI" },
                  { value: "2", name: "CDD" },
                  { value: "3", name: "Alternance" },
                  { value: "4", name: "Interim" },
                ]}
              />
              <InputTexte
                label="Salaire annuel brut minimum (euros)"
                name="min_salary"
                placeholder="30000"
                handleChange={handleChange}
                type="text"
              />
              <InputTexte
                label="Salaire annuel brut maximum (euros)"
                name="max_salary"
                placeholder="35000"
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
                  { value: "Angers", name: "Angers" },
                  { value: "Bordeaux", name: "Bordeaux" },
                ]}
              />

              <InputListe
                label="Télétravail"
                placeholder="Selectionner un mode de télétravail"
                name="remote"
                handleChange={handleChange}
                data={[
                  { value: "total", name: "total" },
                  { value: "partiel", name: "partiel" },
                  { value: "occasionnel", name: "occasionnel" },
                ]}
              />

              <Textearea
                label="SoftSkills"
                placeholder="Description"
                name="prerequisites"
                handleChange={handleChange}
                rows={9}
                type="text"
              />

              <InputListe
                label="Hard Skills"
                placeholder="Hard Skills"
                name="tech_name"
                handleChange={handleChange}
                data={[
                  { value: "1", name: "Java" },
                  { value: "2", name: "C#" },
                  { value: "3", name: "PHP" },
                  { value: "4", name: "Python" },
                  { value: "5", name: "React" },
                ]}
              />

              <div className="offerEnd">
                <BlackButton
                  buttonName="Ajouter cette offre"
                  buttonFunction={(event) => {
                    event.preventDefault();
                    handlePopup1Open();
                    handleSubmit(event);
                  }}
                />
                {showPopup1 && (
                  <Popup
                    title="L'offre d'emploi a bien été publiée"
                    message=""
                    open={showPopup1}
                    onClose={handlePopup1Close}
                    buttonname="Retour au Dashboard"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OfferCreation;
