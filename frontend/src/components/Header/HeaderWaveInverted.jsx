import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import waveWhite from "../../assets/images/Dashboard/vague.svg";
import logo from "../../assets/images/Header/logoExternatic.svg";
import BurgerMenu from "./BurgerMenu";
import ProfilePicture from "../Elements/ProfilePicture";
import InputImage from "../Elements/InputImage";

function HeaderWaveInverted({ open, handleOpen, title }) {
  return (
    <>
      {" "}
      <div className="HeaderWaveInverted">
        <div className="TopHeader">
          {" "}
          <BurgerMenu
            className="BurgerMenu"
            open={open}
            handleOpen={handleOpen}
          />
          <NavLink to="/">
            <img className="Logo" src={logo} alt="Le Logo" />
          </NavLink>
          <ProfilePicture />
        </div>

        <div className="pp-import">
          <InputImage />
          <h1 className="titleHeader">{title}</h1>
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
