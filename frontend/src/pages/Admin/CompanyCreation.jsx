import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import InputLogo from "../../components/Elements/InputLogo";
import BlackButton from "../../components/Elements/BlackButton";

function CompanyCreation() {
  const [company_name, setCompany_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [logo, setLogo] = useState("");

  const handlePostRequest = () => {
    const url = "http://localhost:8080/api/company/register";
    const requestData = {
      company_name,
      email,
      password,
      phone,
      logo,
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
    <div className="CompanyCreation">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="CompanyCreationTitle">
          <h1>Nouvelle entreprise</h1>
        </div>
        <div className="CompanyCreationInformations">
          <InputText
            label="Nom de la société"
            inputMessage={"Entrez l'information"}
            type="text"
            set={setCompany_name}
          />
          <InputLogo label="Logo de la société" set={setLogo} />
          <InputText
            label="Adresse mail de contact"
            inputMessage={"Entrez l'information"}
            type="email"
            set={setEmail}
          />
          <InputText
            label="Téléphone de contact"
            inputMessage={"Entrez l'information"}
            type="tel"
            set={setPhone}
          />
          <InputText
            label="Mot de passe provisoire"
            inputMessage={"Entrez l'information"}
            type="password"
            set={setPassword}
          />
        </div>
        <div className="CompanyCreationEnd">
          <NavLink to="/admin/creationconfirmation">
            <BlackButton
              buttonName="Valider la création"
              buttonFunction={handlePostRequest}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CompanyCreation;
