import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";

function CompanyProfile() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handlePutRequest = () => {
    const url = "http://localhost:8080/api/company/1";
    const requestData = {
      company_name: "Dassault aviation",
      email,
      password: "****",
      phone,
    };

    // Have to check with Lucas why do I need to
    // add a password in my put request as it should not be
    // null ok, but the password is already existing in the DB ..
    //

    fetch(url, {
      method: "PUT",
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
    <div className="CompanyProfile">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="CompanyProfileTitle">
          <h1>Mon profil employeur</h1>
        </div>
        <div className="CompanyProfileInformations">
          <InputText
            label="Email"
            inputMessage="bob@groupama.fr"
            type="email"
            set={setEmail}
          />
          <InputText
            label="Téléphone"
            inputMessage="06 99 99 99 99"
            type="tel"
            set={setPhone}
          />
        </div>
        <div className="CompanyProfileEnd">
          <NavLink to="/company/dashboard">
            <BlackButton
              buttonName="Valider mes modifications"
              buttonFunction={handlePutRequest}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
