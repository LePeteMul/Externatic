import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";
import Textearea from "../../components/Elements/Textearea";
import Popup from "../../components/Elements/Popup";

function CompanyPresentation() {
  const navigate = useNavigate();

  const [showPopup1, setShowPopup1] = useState(false);
  const handlePopup1Open = () => {
    setShowPopup1(true);
  };

  const handlePopup1Close = () => {
    setShowPopup1(false);
    navigate("/company/dashboard");
  };
  const handleReturnDashboardClick = () => {
    navigate("/company/dashboard");
  };

  return (
    <div className="CompanyPresentation">
      <HeaderBasic />
      <section className="boxWithoutHeader">
        <div className="title">
          <h1>Présentation de votre entreprise</h1>
        </div>
        <div className="textAreaContainer">
          <Textearea className="textPres" rows={16} />
        </div>
        <div className="actionbuttons">
          <BlackButton
            className="validate"
            buttonName="Sauvegarder"
            buttonFunction={handlePopup1Open}
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
