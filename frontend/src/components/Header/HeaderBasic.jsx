import React from "react";
import "../../App.scss";
import "./HeaderBasic.scss";
import logo from "../../assets/images/Header/logoExternatic.svg";
import BurgerMenu from "./BurgerMenu";
import ProfilePicture from "../Elements/ProfilePicture";



function HeaderBasic() {




  return (
    <div className="HeaderBasic">
      <BurgerMenu className="BurgerMenu" />
      <img className="Logo" src={logo} alt="Le Logo" />
      <ProfilePicture />
      {/* <BurgerMenu  className="BurgerMenu" /> */}
    </div>
  );
}

export default HeaderBasic;
