import React from "react";
import "./BurgerMenu.scss";
import burger from "../../assets/icons/burgerMenu.png";

function BurgerMenu() {
  return (
    <div className="BurgerMenu">
      <img className="IconBurger" src={burger} alt="Le Burger" />
    </div>
  );
}

export default BurgerMenu;
