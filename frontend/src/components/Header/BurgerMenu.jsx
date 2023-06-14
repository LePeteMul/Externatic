import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import burger from "../../assets/icons/burgerMenu.png";
import logo from "../../assets/images/Header/logoExternatic.svg";
import waveWhite from "../../assets/images/Header/wave_white.png";
import ProfilePicture from "../Elements/ProfilePicture";

function BurgerMenu({ handleOpen }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    handleOpen(!open);
  };

  useEffect(() => {
    const handleWheel = (event) => {
      if (open) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [open]);

  if (open === false) {
    return (
      <div className="BurgerMenu">
        <button className="BurgerContainer" type="button" onClick={handleClick}>
          <img className="IconBurger" src={burger} alt="Le Burger" />
        </button>
      </div>
    );
  }
  return (
    <div className="BurgerMenu">
      <section className="BurgerMenuOpened">
        <div className="HoverHeader">
          <div className="TopHoverBar">
            <button
              className="BurgerContainer"
              type="button"
              onClick={handleClick}
            >
              <img className="IconBurger" src={burger} alt="Le Burger" />
            </button>
            <NavLink to="/">
              <img className="Logo" src={logo} alt="Le Logo" />
            </NavLink>
            <ProfilePicture />
          </div>
          <img className="Wave" src={waveWhite} alt="La Vague Blanche" />
        </div>

        <ul className="menuList">
          <Link to="/candidate/dashboard">
            <li className="menuItem">Mon espace</li>
          </Link>
          <li className="menuItem">Contact</li>
          <Link to="/legalinformations">
            <li className="menuItem">Mentions légales</li>{" "}
          </Link>
          <Link to="/logout">
            <li className="menuItem">Se déconnecter</li>
          </Link>
        </ul>
      </section>
    </div>
  );
}

BurgerMenu.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default BurgerMenu;
