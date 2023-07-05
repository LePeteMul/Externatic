import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";
import InputListe from "../../components/Elements/InputListe";
import InputTexte from "../../components/Elements/InputTexte";

function AdminProfile() {
  const [formData, setFormData] = useState({
    gender: "",
    lastname: "",
    firstname: "",
    email: "",
    phone: "",
    password: "£££",
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

    const url = "http://localhost:8080/api/user/1";
    const requestData = { ...formData };

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
        // Perform any necessary actions after successful POST request
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occurred during the POST request
      });
  };

  return (
    <div className="AdminProfile">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="AdminProfileTitle">
          <h1>Mon profil administrateur</h1>
        </div>
        <form onSubmit={handleSubmit} className="input">
          <div className="AdminProfileInformations">
            <InputListe
              label="Genre"
              name="gender"
              placeholder="Je suis une femme"
              handleChange={handleChange}
              data={[
                { value: "choix1", name: "Je suis une femme" },
                { value: "choix2", name: "Je suis un homme" },
                { value: "choix3", name: "Je suis non binaire" },
              ]}
            />
            <InputTexte
              label="Nom"
              name="lastname"
              placeholder="DURAND"
              handleChange={handleChange}
              type="text"
            />

            <InputTexte
              label="Prénom"
              name="firstname"
              placeholder="Franck"
              handleChange={handleChange}
              type="text"
            />

            <InputTexte
              label="Email"
              name="email"
              placeholder="f.durand@externatic.fr"
              handleChange={handleChange}
              type="email"
            />
            <InputTexte
              label="Téléphone"
              name="phone"
              placeholder="06 99 99 99 99"
              handleChange={handleChange}
              type="tel"
            />
          </div>
          <div className="AdminProfileEnd">
            <BlackButton
              buttonName="Valider les modifications"
              buttonFunction={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminProfile;
