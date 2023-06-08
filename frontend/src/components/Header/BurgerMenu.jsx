import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import burger from "../../assets/icons/burgerMenu.png";
import waveWhite from "../../assets/images/Header/wave_white.png";

function BurgerMenu({ handleOpen }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    handleOpen(!open);
  };

  return (
    <div className="BurgerMenu">
      <button type="button" onClick={handleClick}>
        <img className="IconBurger" src={burger} alt="Le Burger" />
      </button>
      {open && (
        <nav className="menuHover">
          <img className="Wave" src={waveWhite} alt="La Vague Blanche" />
          <ul className="menuHover_ul">
            <Link to="/dashboard">
              <li className="menuHover_item">Mon espace</li>
            </Link>
            <li className="menuHover_item">Contact</li>
            <li className="menuHover_item">Mentions légales</li>
            <li className="menuHover_item">Se déconnecter</li>
          </ul>
        </nav>
      )}
    </div>
  );
}

BurgerMenu.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default BurgerMenu;
