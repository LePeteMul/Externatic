import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import Popup from "../../components/Elements/Popup";

function CompanyCreation() {
  const navigate = useNavigate();
  const [showPopup1, setShowPopup1] = useState(false);

  const handlePopup1Open = () => {
    setShowPopup1(true);
  };

  const handlePopup1Close = () => {
    setShowPopup1(false);
    navigate("/admin/dashboard"); // Rediriger vers la première page différente
  };

  const [formData, setFormData] = useState({
    // Logo & presentation are not required fields in the DB
    company_name: "",
    email: "",
    password: "",
    phone: "",
    logo: null,
    presentation: null,
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  // Submission and triggering the post datas to the DB
  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "http://localhost:8080/api/company/register";
    const requestData = { ...formData };
    console.info("mauvais");
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
    <div className="CompanyCreation">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="CompanyCreationTitle">
          <h1>Nouvelle entreprise</h1>
        </div>
        <form onSubmit={handleSubmit} className="input">
          <div className="CompanyCreationInformations">
            <InputTexte
              label="Nom de la société"
              name="company_name"
              placeholder="nom de la société"
              type="text"
              handleChange={handleChange}
            />
            <InputTexte
              label="Adresse mail de contact"
              name="email"
              placeholder="email"
              type="email"
              handleChange={handleChange}
            />
            <InputTexte
              label="Téléphone de contact"
              name="phone"
              placeholder="06 06 06 06 60"
              type="tel"
              handleChange={handleChange}
            />
            <InputTexte
              label="Mot de passe provisoire"
              name="password"
              placeholder="*******"
              type="password"
              handleChange={handleChange}
            />
          </div>
          <div className="CompanyCreationEnd">
            <BlackButton
              buttonName="Valider la création"
              buttonFunction={(event) => {
                event.preventDefault();
                handlePopup1Open();
                handleSubmit(event);
              }}
            />
            {showPopup1 && (
              <Popup
                title="Entreprise ajoutée"
                message=""
                open={showPopup1}
                onClose={handlePopup1Close}
                buttonname="Retour au Dashboard"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanyCreation;
