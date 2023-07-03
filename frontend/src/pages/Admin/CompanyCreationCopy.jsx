import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import InputLogo from "../../components/Elements/InputLogo";
import BlackButton from "../../components/Elements/BlackButton";

function CompanyCreationCopy() {
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
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/api/company/register";
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
            <InputLogo label="Logo de la société" />
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
              buttonFunction={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanyCreationCopy;
