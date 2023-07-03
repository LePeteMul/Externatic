import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import InputList from "../../components/Elements/InputList";
import BlackButton from "../../components/Elements/BlackButton";

function AdminProfile() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handlePutRequest = () => {
    const url = "http://localhost:8080/api/user/:id";
    const requestData = {
      lastname,
      firstname,
      email,
      phone,
      password: "****",
    };

    // Have to check with Lucas why do I need to
    // add a password in my put request as it should not be
    // null ok, but the password is already existing in the DB ..

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
    <div className="AdminProfile">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="AdminProfileTitle">
          <h1>Mon profil administrateur</h1>
        </div>
        <div className="AdminProfileInformations">
          <InputList
            label="Genre"
            inputMessage="Je suis une femme"
            data={[
              { value: "choix1", name: "Je suis une femme" },
              { value: "choix2", name: "Je suis un homme" },
              { value: "choix3", name: "Je suis non binaire" },
            ]}
          />
          <InputText
            label="Nom"
            inputMessage="DURAND"
            type="text"
            set={setLastname}
          />
          <InputText
            label="Prénom"
            inputMessage="Franck"
            type="text"
            set={setFirstname}
          />
          <InputText
            label="Email"
            inputMessage="f.durand@externatic.fr"
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
        <div className="AdminProfileEnd">
          <NavLink to="/admin/dashboard">
            <BlackButton
              buttonName="Valider les modifications"
              buttonFunction={handlePutRequest}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
