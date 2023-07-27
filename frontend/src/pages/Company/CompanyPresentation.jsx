import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";
import Textearea from "../../components/Elements/Textearea";
import Popup from "../../components/Elements/Popup";
import CompanyConnexionContext from "../../contexts/CompanyConnexionContext/CompanyConnexionContext";

function CompanyPresentation() {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const { companyId } = useContext(CompanyConnexionContext);
  const [showPopup1, setShowPopup1] = useState(false);

  const [company, setCompany] = useState([]);

  const handlePopup1Open = () => {
    setShowPopup1(true);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/company/${companyId}`)
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

  const [formData, setFormData] = useState({
    presentation: company.presentation,
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePopup1Close = () => {
    setShowPopup1(false);
    navigate("/company/dashboard");
  };
  const handleReturnDashboardClick = () => {
    navigate("/company/dashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${
      import.meta.env.VITE_BACKEND_URL
    }/api/presentation/company/edit/${companyId}`;
    const requestData = { ...formData };

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
      .catch((error) => {
        console.error("Error:", error);
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
            name="presentation"
            className="textPres"
            rows={16}
            handleChange={handleChange}
            value={formData.presentation || ""}
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
