import React, { useState } from "react";
import waveWhite from "../../assets/images/Header/wave_white.png";
import logo from "../../assets/images/Header/logoExternatic.svg";
import BurgerMenu from "./BurgerMenu";
import ProfilePicture from "../Elements/ProfilePicture";

function HeaderWave() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
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
            setOpen={setOpen}
            handleOpen={handleOpen}
          />
          <img className="Logo" src={logo} alt="Le Logo" />
          <ProfilePicture />
        </div>

        <img className="Wave" src={waveWhite} alt="La Vague Blanche" />
      </div>
    </>
  );
}

export default HeaderWave;
