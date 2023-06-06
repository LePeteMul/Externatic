import React from "react";
import logo from "../../assets/images/Header/logoExternatic.svg";
import BurgerMenu from "./BurgerMenu";
import ProfilePicture from "../Elements/ProfilePicture";

function HeaderBasic() {
  return (
    <div className="HeaderBasic">
      <BurgerMenu className="BurgerMenu" />
      <img className="Logo" src={logo} alt="Le Logo" />
      <ProfilePicture />
    </div>
  );
}

export default HeaderBasic;
