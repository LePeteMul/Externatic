import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderWave from "../../components/Header/HeaderWave";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";
import profil from "../../assets/icons/userIcon2.png";
import lock from "../../assets/icons/lock.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePostRequest = () => {
    const url = "http://localhost:8080/api/user/login";
    const requestData = {
      email: { email },
      password: { password },
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.info("Response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="connexion">
      <HeaderWave />
      <div className="boxWithoutHeader">
        <div className="page_title">
          <h1>Connexion </h1>
        </div>

        <div className="inputs">
          <InputText
            inputMessage="Identifiant"
            set={setEmail}
            image2={profil}
          />

          <InputText
            inputMessage="Mot de passe"
            set={setPassword}
            image3={lock}
          />
        </div>

        <div className="btn_Connexion">
          <BlackButton
            buttonName="Connexion"
            buttonFunction={handlePostRequest}
          />
        </div>

        <div className="forget_psw">
          <h4 className="forget_psw_text">J'ai oublié mon mot de passe</h4>
        </div>

        <div className="card_signing">
          <h3 className="no_Count">Pas encore de compte ?</h3>
          <NavLink to="/candidate/registration">
            <WhiteButton buttonName="M'inscrire" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
// just a test
export default Login;
