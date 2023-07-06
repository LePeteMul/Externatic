import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
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

  const { setUserConnected, setUserId } = useContext(UserConnexionContext);

  const handleDisconnect = () => {
    setUserConnected(false);
    setUserId(null);
    localStorage.removeItem("token");
  };

  return (
    <div className="BurgerMenuWave">
      <button className="BurgerContainer" type="button" onClick={handleClick}>
        <img className="IconBurger" src={burger} alt="Le Burger" />
      </button>
      <ul className={open ? "menuOpened" : "menuClosed"}>
        <Link to="/login">
          <li className="menuItem">Se connecter</li>
        </Link>
        <Link to="/logincompany">
          <li className="menuItem">Se connecter en tant qu'entreprise</li>
        </Link>
        <Link to="/contact">
          <li className="menuItem">Contact</li>
        </Link>
        <Link to="/legalinformations">
          <li className="menuItem">Mentions légales</li>{" "}
        </Link>
        <Link to="/logout" onClick={handleDisconnect}>
          <li className="menuItem">Se déconnecter</li>
        </Link>
      </ul>
    </div>
  );
}

export default BurgerMenuWave;
