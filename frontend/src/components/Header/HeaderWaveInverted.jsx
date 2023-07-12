import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
import CompanyConnexionContext from "../../contexts/CompanyConnexionContext/CompanyConnexionContext";
import waveWhite from "../../assets/images/Dashboard/vague.svg";
import logo from "../../assets/images/Header/logoExternatic.svg";
import BurgerMenuBasic from "./BurgerMenuBasic";
import ProfilePicture from "../Elements/ProfilePicture";
import InputImage from "../Elements/InputImage";

function HeaderWaveInverted({ open, handleOpen, title }) {
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
    <>
      {" "}
      <div className="HeaderWaveInverted">
        <div className="TopHeader">
          {" "}
          <BurgerMenuBasic
            className="BurgerMenu"
            open={open}
            handleOpen={handleOpen}
          />
          <NavLink to="/">
            <img className="Logo" src={logo} alt="Le Logo" />
          </NavLink>
          <button type="button" onClick={handleClick}>
            <ProfilePicture />
          </button>
        </div>

        <div className="pp-import">
          <h1 className="titleHeader">{title}</h1>
          <InputImage />
        </div>
        <img className="Wave" src={waveWhite} alt="La Vague Blanche" />
      </div>
    </>
  );
}

HeaderWaveInverted.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
export default HeaderWaveInverted;
