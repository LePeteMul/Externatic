import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderWave from "../../components/Header/HeaderWave";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";
// import profil from "../../assets/icons/userIcon2.png";
// import lock from "../../assets/icons/lock.png";

function LoginCopy() {
  const [formData, setFormData] = useState({
    identifiant: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.info(formData);
  };

  return (
    <div className="connexion2">
      <HeaderWave />
      <div className="boxWithoutHeader">
        <div className="page_title">
          <h1>Connexion </h1>
        </div>
        <form onSubmit={handleSubmit} className="input">
          <div className="inputs">
            <InputTexte
              label="Identifiant"
              name="identifiant"
              type="text"
              placeholder="Identifiant"
              onChange={handleChange}
            />
            <InputTexte
              label="Mot de passe"
              name="password"
              type="password"
              éplaceholder="Mot de passe"
              onChange={handleChange}
            />
          </div>

          <div className="btn_Connexion">
            <BlackButton buttonName="Connexion" buttonFunction={handleSubmit} />
          </div>
        </form>
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
export default LoginCopy;
