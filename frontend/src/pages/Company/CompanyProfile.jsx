import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";

function CompanyProfile() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
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
    <div className="CompanyProfile">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="CompanyProfileTitle">
          <h1>Mon profil employeur</h1>
        </div>
        <form onSubmit={handleSubmit} className="input">
          <div className="CompanyProfileInformations">
            <InputTexte
              label="Email"
              name="email"
              placeholder="bob@groupama.fr"
              type="email"
              handleChange={handleChange}
            />
            <InputTexte
              label="Téléphone"
              name="phone"
              placeholder="06 99 99 99 99"
              type="tel"
              handleChange={handleChange}
            />
          </div>
          <div className="CompanyProfileEnd">
            <BlackButton
              buttonName="Valider mes modifications"
              buttonFunction={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanyProfile;
