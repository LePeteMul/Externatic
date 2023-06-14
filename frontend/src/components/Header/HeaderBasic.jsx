import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Header/logoExternatic.svg";
import BurgerMenu from "./BurgerMenu";
import ProfilePicture from "../Elements/ProfilePicture";

function HeaderBasic() {
  return (
    <div className="HeaderBasic">
      <div className="BurgerMenuContainer">
        {" "}
        <BurgerMenu />
      </div>
      <NavLink to="/">
        <img className="Logo" src={logo} alt="Le Logo" />
      </NavLink>
      <ProfilePicture />
    </div>
  );
}

export default HeaderBasic;
