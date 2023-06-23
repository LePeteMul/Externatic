import React from "react";
import { NavLink } from "react-router-dom";
import waveWhite from "../../assets/images/Header/wave_white.png";
import logo from "../../assets/images/Header/logoExternatic.svg";
import BurgerMenuWave from "./BurgerMenuWave";
import ProfilePicture from "../Elements/ProfilePicture";

function HeaderWave() {
  return (
    <>
      {" "}
      <div className="HeaderWave">
        <div className="TopHeader">
          {" "}
          <div className="BurgerMenuContainer">
            <BurgerMenuWave />{" "}
          </div>
          <NavLink to="/">
            <img className="Logo" src={logo} alt="Le Logo" />
          </NavLink>
          <NavLink to="/login">
            <ProfilePicture />
          </NavLink>
        </div>

        <img className="Wave" src={waveWhite} alt="La Vague Blanche" />
      </div>
    </>
  );
}

export default HeaderWave;
