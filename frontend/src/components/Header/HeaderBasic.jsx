import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
import CompanyConnexionContext from "../../contexts/CompanyConnexionContext/CompanyConnexionContext";
import logo from "../../assets/images/Header/logoExternatic.svg";
import BurgerMenuBasic from "./BurgerMenuBasic";
import ProfilePicture from "../Elements/ProfilePicture";

function HeaderBasic() {
  const { userConnected, isAdmin } = useContext(UserConnexionContext);
  const { companyConnected } = useContext(CompanyConnexionContext);

  const navigate = useNavigate();

  const handleClick = () => {
    if (companyConnected) {
      navigate("/company/dashboard");
    }
    if (userConnected && isAdmin) {
      navigate("/admin/dashboard");
    }
    if (userConnected && !isAdmin) {
      navigate("/candidate/dashboard");
    }
    if (!companyConnected && !userConnected) {
      navigate("/login");
    }
  };

  return (
    <div className="HeaderBasic">
      <div className="BurgerMenuContainer">
        {" "}
        <BurgerMenuBasic />
      </div>
      <NavLink to="/">
        <img className="Logo" src={logo} alt="Le Logo" />
      </NavLink>
      <button type="button" onClick={handleClick}>
        <ProfilePicture />
      </button>
    </div>
  );
}

export default HeaderBasic;
