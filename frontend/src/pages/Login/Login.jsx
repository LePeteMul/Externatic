import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import HeaderWave from "../../components/Header/HeaderWave";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";

function Login() {
  const token = localStorage.getItem("token");

  const { setUserConnected, setUserId, userId, setIsAdmin } =
    useContext(UserConnexionContext);

  const navigate = useNavigate();

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
    const url = "http://localhost:8080/api/user/login";
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
        localStorage.setItem("token", data);
        const user = jwtDecode(data);
        console.info(user.sub, user.admin);
        if (user.admin === 1) {
          setIsAdmin(true);
          setUserConnected(true);
          setUserId(user.sub);
          navigate("/admin/dashboard");
          console.info(userId, "admin");
        }
        if (user.admin === 0) {
          setIsAdmin(false);
          setUserConnected(true);
          setUserId(user.sub);
          navigate("/candidate/dashboard");
          console.info(userId, "candidate");
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
      </div>
    </div>
  );
}

export default Login;
