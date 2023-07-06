import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";

function CompanyFirstLogin() {
  const [formData, setFormData] = useState({
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

  const navigate = useNavigate();

  const handleValidateNewPwdClick = () => {
    navigate("/company/presentation");
  };
  return (
    <div className="CompanyFirstLogin">
      <HeaderBasic />
      <section className="boxWithoutHeader">
        <div className="welcomeText">
          <h1>Bienvenue sur votre espace entreprise.</h1>
          <br />
          <h2>
            Veuillez personnaliser votre mot de passe pour vos prochaines
            connexions sur la plateforme.
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="input">
          <div className="password">
            <InputTexte
              className="passwordInputField"
              label="Mot de passe"
              name="password"
              placeholder="Nouveau mot de passe"
              type="password"
              handleChange={handleChange}
            />
            <NavLink to="/company/dashboard">
              <BlackButton
                buttonName="Valider"
                buttonFunction={(event) => {
                  event.preventDefault();
                  handleValidateNewPwdClick();
                  handleSubmit(event);
                }}
              />
            </NavLink>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CompanyFirstLogin;
