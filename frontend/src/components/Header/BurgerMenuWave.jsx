import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import burger from "../../assets/icons/burgerMenu.png";

function BurgerMenuWave() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [open]);

  return (
    <div className="BurgerMenuWave">
      <button className="BurgerContainer" type="button" onClick={handleClick}>
        <img className="IconBurger" src={burger} alt="Le Burger" />
      </button>
      <ul className={open ? "menuOpened" : "menuClosed"}>
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
    </div>
  );
}

export default BurgerMenuWave;
