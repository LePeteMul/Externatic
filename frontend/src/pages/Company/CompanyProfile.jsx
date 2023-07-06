import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import Popup from "../../components/Elements/Popup";

function CompanyProfile() {
  const navigate = useNavigate();
  const [showPopup1, setShowPopup1] = useState(false);

  const handlePopup1Open = () => {
    setShowPopup1(true);
  };

  const handlePopup1Close = () => {
    setShowPopup1(false);
    navigate("/company/dashboard"); // Rediriger vers la première page différente
  };

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
  const handleSubmit = (event) => {
    event.preventDefault();
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
              buttonFunction={(event) => {
                event.preventDefault();
                handlePopup1Open();
                handleSubmit(event);
              }}
            />
            {showPopup1 && (
              <Popup
                title="Données modifiées"
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
