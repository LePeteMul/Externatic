import React from "react";
import { NavLink } from "react-router-dom";
import HeaderWave from "../../components/Header/HeaderWave";
import InputText from "../../components/Elements/InputText";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";
import profil from "../../assets/icons/userIcon2.png";
import lock from "../../assets/icons/lock.png";

function Login() {
  return (
    <div>
      <HeaderWave />
      <div className="connexion">
        <div className="page_title">
          <h1>Connexion </h1>
        </div>

        <div className="inputs">
          <InputText inputMessage="Identifiant" image2={profil} />
          <InputText inputMessage="Mot de passe" image3={lock} />
        </div>

        <div className="btn_Connexion">
          <BlackButton buttonName="Connexion" />
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
