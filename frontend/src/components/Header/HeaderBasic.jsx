import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Header/logoExternatic.svg";
import BurgerMenu from "./BurgerMenu";
import ProfilePicture from "../Elements/ProfilePicture";

function HeaderBasic() {
  const navigate = useNavigate();
  const backtoHome = () => {
    navigate("/");
  };

  return (
    <div className="HeaderBasic">
      <BurgerMenu className="BurgerMenu" />
      <button type="button" onClick={backtoHome}>
        <img className="Logo" src={logo} alt="Le Logo" />
      </button>
      <ProfilePicture />
    </div>
  );
}

export default HeaderBasic;
