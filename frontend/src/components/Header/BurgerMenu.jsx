import React from "react";
import PropTypes from "prop-types";
import "./BurgerMenu.scss";
import burger from "../../assets/icons/burgerMenu.png";

function BurgerMenu({ open, handleOpen }) {
  return (
    <div className="BurgerMenu">
      <button type="button" onClick={handleOpen}>
        <img className="IconBurger" src={burger} alt="Le Burger" />
      </button>
      {open && (
        <nav className="navbar">
          <ul className="navbar_ul">
            <li className="navbar_item">Mon espace</li>
            <li className="navbar_item">Contact</li>
            <li className="navbar_item">Mentions légales</li>
            <li className="navbar_item">Se déconnecter</li>
          </ul>
        </nav>
      )}
    </div>
  );
}

BurgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default BurgerMenu;
