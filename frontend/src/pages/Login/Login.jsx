import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import eye from "../../assets/icons/eye.png";
import HeaderWave from "../../components/Header/HeaderWave";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";
import Popup from "../../components/Elements/Popup";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";

function Login() {
  const [error, setError] = useState(null);

  const { setUserConnected, setUserId, setIsAdmin } =
    useContext(UserConnexionContext);

  const navigate = useNavigate();

  const handlePopupClose = () => {
    setError(null);
  };

  const [formData, setFormData] = useState({
    email: "",
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
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/user/login`;
    const requestData = { ...formData };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.text())
      .then((data) => {
        if (
          data === "Mot de passe incorrect" ||
          data === "Adresse mail incorrecte"
        ) {
          setError(data);
        } else {
          setError(null);
          localStorage.setItem("token", data);
          const user = jwtDecode(data);
          if (user.admin === 1) {
            setIsAdmin(true);
            setUserConnected(true);
            setUserId(user.sub);
            navigate("/admin/dashboard");
          }
          if (user.admin === 0) {
            setIsAdmin(false);
            setUserConnected(true);
            setUserId(user.sub);
            navigate("/candidate/dashboard");
          }
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="connexion">
      <HeaderWave />
      <div className="boxWithoutHeader">
        <div className="page_title">
          <h1>Connexion </h1>
        </div>
        <form onSubmit={handleSubmit} className="input">
          <div className="inputs">
            <InputTexte
              label="Identifiant"
              name="email"
              type="email"
              placeholder="Identifiant"
              handleChange={handleChange}
            />
            <InputTexte
              label="Mot de passe"
              name="password"
              type="password"
              image={eye}
              placeholder="Mot de passe"
              handleChange={handleChange}
            />
          </div>

          <div className="btn_Connexion">
            <BlackButton buttonName="Connexion" buttonFunction={handleSubmit} />
          </div>
        </form>
        <div className="forget_psw">
          <NavLink to="/resetpassword">
            <h4 className="forget_psw_text">J'ai oublié mon mot de passe</h4>
          </NavLink>
        </div>

        <div className="card_signing">
          <h3 className="no_Count">Pas encore de compte ?</h3>
          <NavLink to="/candidate/registration">
            <WhiteButton buttonName="M'inscrire" />
          </NavLink>
        </div>
        {error && (
          <Popup
            title="Erreur"
            message={error}
            onClose={handlePopupClose}
            buttonname="Retour"
          />
        )}
      </div>
    </div>
  );
}

export default Login;
