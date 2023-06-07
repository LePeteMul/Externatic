import React from "react";
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
          <InputText inputMessage="Identifiant" />
          <img className="inputIcon" src={profil} alt="" />
          <InputText inputMessage="Mot de passe" />
          <img className="lockIcon" src={lock} alt="" />
        </div>

        <div className="btn_Connexion">
          <BlackButton buttonName="Connexion" />
        </div>

        <div className="forget_psw">
          <h4 className="forget_psw_text">J'ai oublié mon mot de passe</h4>
        </div>

        <div className="card_signing">
          <h3 className="no_Count">Pas encore de compte ?</h3>
          <WhiteButton buttonName="M'inscrire" />
        </div>
      </div>
    </div>
  );
}

export default Login;
