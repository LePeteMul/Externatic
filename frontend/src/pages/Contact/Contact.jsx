import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";
import LargeTextInput from "../../components/Elements/LargeTextInput";
import ReCAPTCHA from "react-google-recaptcha";

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
        <ReCAPTCHA
    sitekey="Your client site key"
    onChange={onChange}
  />
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
