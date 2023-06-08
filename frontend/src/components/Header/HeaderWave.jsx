import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import waveWhite from "../../assets/images/Header/wave_white.png";
import logo from "../../assets/images/Header/logoExternatic.svg";
import BurgerMenu from "./BurgerMenu";
import ProfilePicture from "../Elements/ProfilePicture";

function HeaderWave({ open, handleOpen }) {
  const navigate = useNavigate();

  const backtoHome = () => {
    navigate("/");
  };

  return (
    <>
      {" "}
      <div className="HeaderWave">
        <div className="TopHeader">
          {" "}
          <BurgerMenu
            className="BurgerMenu"
            open={open}
            handleOpen={handleOpen}
          />
          <button type="button" onClick={backtoHome}>
            <img className="Logo" src={logo} alt="Le Logo" />
          </button>
          <ProfilePicture />
        </div>

        <img className="Wave" src={waveWhite} alt="La Vague Blanche" />
      </div>
    </>
  );
}

HeaderWave.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
};
export default HeaderWave;
