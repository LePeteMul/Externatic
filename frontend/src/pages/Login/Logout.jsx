import React from "react";
import { NavLink } from "react-router-dom";
import HeaderWave from "../../components/Header/HeaderWave";
import WhiteButton from "../../components/Elements/WhiteButton";

function Logout() {
  return (
    <div className="logout">
      <HeaderWave />
      <div className="boxWithoutHeader">
        <div className="logoutMessage">
          <h1>Vous êtes à présent déconnecté.</h1>
        </div>
        <div className="backHome">
          <NavLink to="/">
            <WhiteButton buttonName="Retour à l'accueil" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Logout;
