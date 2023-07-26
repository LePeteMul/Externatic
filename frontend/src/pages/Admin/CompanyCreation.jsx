import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import Popup from "../../components/Elements/Popup";

function CompanyCreation() {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const [showPopup1, setShowPopup1] = useState(false);
  const [error, setError] = useState(null);

  const handlePopup1Close = () => {
    setShowPopup1(false);
    navigate("/admin/dashboard");
  };

  const [formData, setFormData] = useState({
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "http://localhost:8080/api/company/register";
    const requestData = { ...formData };

    /* eslint-disable-next-line */
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setError("Adresse mail incorrecte");
    } else if (
      formData.company_name &&
      formData.email &&
      formData.password &&
      formData.phone
    ) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
    } else {
      setError("Merci de compléter tous les champs");
    }

    const MailUrl = "http://localhost:8080/api/email/company";
    const MailRequestData = { ...formData };
    fetch(MailUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(MailRequestData),
    })
      .then((response) => {
        if (response.status === 400) {
          setShowPopup1(true);
        }
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
              placeholder="0606060606"
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
