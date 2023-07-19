import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import Popup from "../../components/Elements/Popup";

function CompanyCreation() {
  const navigate = useNavigate();
  const [showPopup1, setShowPopup1] = useState(false);
  const [error, setError] = useState(null);

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
    logo: "",
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
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.status === 400) {
          setError("Cet email est déjà utilisé");
        } else {
          setShowPopup1(true);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });

    const MailUrl = "http://localhost:8080/api/email/company";
    const MailRequestData = { ...formData };
    console.info("mauvais");
    fetch(MailUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(MailRequestData),
    })
      .then((response) => {
        if (response.status === 400) {
          setError("Cet email est déjà utilisé");
        } else {
          response.json();
        }
      })
      .then((data) => {
        console.info("Email:", data);
        setShowPopup1(true);
      })
      .catch((err) => {
        console.error("Error:", err);
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
              placeholder="Nom de la société"
              type="text"
              handleChange={handleChange}
            />
            <InputTexte
              label="Adresse mail de contact"
              name="email"
              placeholder="Adresse mail de contact"
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
                handleSubmit(event);
              }}
            />
            {showPopup1 && (
              <Popup
                title="L'entreprise a bien été crée dans la base de données."
                message="Un mail de confirmation a été transmis sur l'adresse renseignée."
                open={showPopup1}
                onClose={handlePopup1Close}
                buttonname="Retour au Dashboard"
              />
            )}
            {error && (
              <Popup
                title="Erreur"
                message={error}
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
