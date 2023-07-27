import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import Popup from "../../components/Elements/Popup";
import CompanyConnexionContext from "../../contexts/CompanyConnexionContext/CompanyConnexionContext";

function CompanyProfile() {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const [showPopup1, setShowPopup1] = useState(false);
  const { companyId } = useContext(CompanyConnexionContext);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/company/${companyId}`)
      .then((response) => response.json())
      .then((data) => {
        setCompany(data);
        setFormData({
          ...formData,
          company_name: data.company_name,
          email: data.email,
          phone: data.phone,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const handlePopup1Open = () => {
    setShowPopup1(true);
  };

  const handlePopup1Close = () => {
    setShowPopup1(false);
    navigate("/company/dashboard");
  };

  const [formData, setFormData] = useState({
    company_name: company.company_name,
    email: company.email,
    phone: company.phone,
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `${import.meta.env.VITE_BACKEND_URL}/api/company/${companyId}`;
    const requestData = { ...formData };

    /* eslint-disable-next-line */
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setError("Adresse mail incorrecte");
    } else if (formData.company_name && formData.phone && formData.email) {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => {
          if (response.status !== 204) {
            console.error(response.statusText);
          }
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    } else {
      setError("Merci de compléter tous les champs");
    }
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
              placeholder="Nom de l'entreprise"
              type="name"
              handleChange={handleChange}
              value={formData.company_name}
            />

            <InputTexte
              label="Email"
              name="email"
              placeholder="mail@entreprise.fr"
              type="email"
              handleChange={handleChange}
              value={formData.email}
            />
            <InputTexte
              label="Téléphone"
              name="phone"
              placeholder="0606060606"
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
                title=""
                message={error || "Les informations ont bien été modifiées"}
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
