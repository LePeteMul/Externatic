import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";

function Contact() {
  const date = new Date();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    ipLocal: window.location.hostname,
    request: "POST",
    date: date.toLocaleString(),
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer la requête à votre backend
    fetch("http://localhost:8080/api/email/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        // Traiter la réponse du serveur
        if (response.ok) {
          // La requête a réussi
          console.info("Message envoyé avec succès");
        } else {
          // La requête a échoué
          console.error("Erreur lors de l'envoi du message");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête:", error);
      });
  };

  return (
    <div className="contactPage">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="contactPageTitle">
          <h1>Nous contacter</h1>
        </div>
        {/* <InputText label="Votre nom :" />
        <InputText label="Votre adresse mail :" />
        <LargeTextInput label="Votre message :" /> */}
        <InputTexte
          label="Votre nom:"
          name="name"
          type="text"
          placeholder="John doe"
          handleChange={handleChange}
        />
        <InputTexte
          label="Votre email:"
          name="email"
          type="text"
          placeholder="john.doe@gmail.com"
          handleChange={handleChange}
        />
        <InputTexte
          label="Votre message:"
          name="message"
          type="text"
          placeholder="Ecrivez votre message ici"
          handleChange={handleChange}
        />
        <br />
        <br />
        <BlackButton
          buttonName="Envoyer votre message"
          buttonFunction={handleSubmit}
        />

        <div className="contactPageInformations">
          <p />
        </div>
        <div className="contactPageEnd">
          <p />
        </div>
      </div>
    </div>
  );
}

export default Contact;
