import React from "react";
import "../../App.scss";
import "./HeaderWave.scss";
import waveWhite from "../../assets/images/Header/wave_white.png";
import logo from "../../assets/images/Header/logoExternatic.svg";
import BurgerMenu from "./BurgerMenu";
import ProfilePicture from "../Elements/ProfilePicture";

function HeaderWave() {
  return (
    <>
      {" "}
      <div className="HeaderWave">
        <div className="TopHeader">
          {" "}
          <BurgerMenu className="BurgerMenu" />
          <img className="Logo" src={logo} alt="Le Logo" />
          <ProfilePicture />
        </div>
        <img className="Wave" src={waveWhite} alt="La Vague Blanche" />
      </div>{" "}
    </>
  );
}

export default HeaderWave;
