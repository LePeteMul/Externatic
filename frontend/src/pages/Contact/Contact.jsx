import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";
import LargeTextInput from "../../components/Elements/LargeTextInput";

function Contact() {
  return (
    <div className="contactPage">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="contactPageTitle">
          <h1>Nous contacter</h1>
        </div>
        <InputText label="Votre nom :" />
        <InputText label="Votre adresse mail :" />
        <LargeTextInput label="Votre message :" />
        <br />

        <br />
        <BlackButton buttonName="Envoyer votre message" />
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
