import React from "react";
import PropTypes from "prop-types";
import "./BurgerMenu.scss";
import burger from "../../assets/icons/burgerMenu.png";
import NavBar from "../NavBar/NavBar";

function BurgerMenu({ open, handleOpen }) {
  return (
    <div className="BurgerMenu">
      <button type="button" onClick={handleOpen}>
        <img className="IconBurger" src={burger} alt="Le Burger" />
      </button>
      {open && <NavBar />}
    </div>
  );
}

BurgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default BurgerMenu;
