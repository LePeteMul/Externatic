import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import Popup from "../../components/Elements/Popup";
import CompanyConnexionContext from "../../contexts/CompanyConnexionContext/CompanyConnexionContext";

function CompanyProfile() {
  const navigate = useNavigate();
  const [showPopup1, setShowPopup1] = useState(false);
  const { companyId } = useContext(CompanyConnexionContext);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/company/${companyId}`)
      .then((response) => response.json())
      .then((data) => {
        setCompany(data);
        setFormData({
          ...formData,
          company_name: data.company_name,
          email: data.email,
          password: data.password,
          phone: data.phone,
        });
      })
      .catch((err) => console.error(err));
  }, []);
  console.warn(company);
  console.warn("password = ", company.password);

  const handlePopup1Open = () => {
    setShowPopup1(true);
  };

  const handlePopup1Close = () => {
    setShowPopup1(false);
    navigate("/company/dashboard"); // Rediriger vers la première page différente
  };

  const [formData, setFormData] = useState({
    Nom: company.company_name,
    email: company.email,
    phone: company.phone,
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `http://localhost:8080/api/company/${companyId}`;
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
    <div className="CompanyProfile">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="CompanyProfileTitle">
          <h1>Mon profil employeur</h1>
        </div>
        <form onSubmit={handleSubmit} className="input">
          <div className="CompanyProfileInformations">
            <InputTexte
              label="Nom"
              name="company_name"
              placeholder="NOM ENTREPRISE"
              type="name"
              handleChange={handleChange}
              value={formData.company_name}
            />

            <InputTexte
              label="Email"
              name="email"
              placeholder="bob@groupama.fr"
              type="email"
              handleChange={handleChange}
              value={formData.email}
            />
            <InputTexte
              label="Téléphone"
              name="phone"
              placeholder="06 99 99 99 99"
              type="tel"
              handleChange={handleChange}
              value={formData.phone}
            />
          </div>
          <div className="CompanyProfileEnd">
            <BlackButton
              buttonName="Valider mes modifications"
              buttonFunction={(event) => {
                event.preventDefault();
                handlePopup1Open();
                handleSubmit(event);
              }}
            />
            {showPopup1 && (
              <Popup
                title="Mise à jour effectuée"
                message=""
                open={showPopup1}
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

export default CompanyProfile;
