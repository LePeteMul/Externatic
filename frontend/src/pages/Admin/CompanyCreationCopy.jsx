import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import InputLogo from "../../components/Elements/InputLogo";
import BlackButton from "../../components/Elements/BlackButton";

function CompanyCreationCopy() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.info(formData);
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
              name="name"
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
