import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";
import Textearea from "../../components/Elements/Textearea";
import Popup from "../../components/Elements/Popup";
import CompanyConnexionContext from "../../contexts/CompanyConnexionContext/CompanyConnexionContext";

function CompanyPresentation() {
  const navigate = useNavigate();
  const [company, setCompany] = useState({
    presentation: "",
  });
  const { companyId } = useContext(CompanyConnexionContext);
  const [showPopup1, setShowPopup1] = useState(false);

  const handlePopup1Open = () => {
    setShowPopup1(true);
  };

  const [formData, setFormData] = useState({
    presentation: "",
  });

  console.warn("company dans CompanyPresentation.jsx = ", company);
  console.warn(
    "company.presentation dans CompanyPresentation.jsx = ",
    company.presentation
  );

  useEffect(() => {
    fetch(`http://localhost:8080/api/company/${companyId}`)
      .then((response) => response.json())
      .then((data) => {
        setCompany(data);
        setFormData({
          ...formData,
          presentation: data.presentation,
        });
      })
      .catch((err) => console.error(err));
  }, [companyId]);

  const handlePopup1Close = () => {
    setShowPopup1(false);
    navigate("/company/dashboard");
  };
  const handleReturnDashboardClick = () => {
    navigate("/company/dashboard");
  };
  const handleTextAreaChange = (value) => {
    setFormData({ ...formData, presentation: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn("coucou c'est HandleSubmit");
    console.warn("id = ", companyId);
    const url = `http://localhost:8080/api/presentation/company/edit/${companyId}`;
    const requestData = { ...formData };
    console.warn("formdata = ", formData);

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.status !== 204) {
          console.error(response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occurred during the POST request
      });
  };

  return (
    <div className="CompanyPresentation">
      <HeaderBasic />
      <section className="boxWithoutHeader">
        <div className="title">
          <h1>Présentation de votre entreprise</h1>
        </div>
        <div className="textAreaContainer">
          <Textearea
            className="textPres"
            rows={16}
            value={formData.presentation} // Use company.presentation directly
            handleChange={handleTextAreaChange}
          />
        </div>
        <div className="actionbuttons">
          <BlackButton
            className="validate"
            buttonName="Sauvegarder"
            buttonFunction={(event) => {
              event.preventDefault();
              handlePopup1Open();
              handleSubmit(event);
            }}
          />
          {showPopup1 && (
            <Popup
              title="Présentation enregistrée et modifiée"
              message=""
              open={showPopup1}
              onClose={handlePopup1Close}
              buttonname="Retour au Dashboard"
            />
          )}
          <br />
          <WhiteButton
            className="validate"
            buttonName="Retour sans sauvegarder"
            buttonFunction={handleReturnDashboardClick}
          />
        </div>
      </section>
    </div>
  );
}

export default CompanyPresentation;
