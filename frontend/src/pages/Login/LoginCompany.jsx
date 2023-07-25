import React, { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";
import eye from "../../assets/icons/eye.png";
import HeaderWave from "../../components/Header/HeaderWave";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import Popup from "../../components/Elements/Popup";
import CompanyConnexionContext from "../../contexts/CompanyConnexionContext/CompanyConnexionContext";

function LoginCompany() {
  const [error, setError] = useState(null);

  const { setCompanyConnected, setCompanyId } = useContext(
    CompanyConnexionContext
  );

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
    const url = "http://localhost:8080/api/company/login";
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
          localStorage.setItem("token", data);
          const user = jwtDecode(data);
          setCompanyConnected(true);
          setCompanyId(user.sub);
          navigate("/company/dashboard");
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
          <h1>Connexion</h1>
          <h1>Entreprise</h1>
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
              image={eye}
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
          <NavLink to="/company/resetpassword">
            <h4 className="forget_psw_text">J'ai oublié mon mot de passe</h4>
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

export default LoginCompany;
