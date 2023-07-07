import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
import CompanyConnexionContext from "../../contexts/CompanyConnexionContext/CompanyConnexionContext";
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

  const { setUserConnected, setUserId, userId, userConnected } =
    useContext(UserConnexionContext);
  const { setCompanyConnected, setCompanyId, companyId, companyConnected } =
    useContext(CompanyConnexionContext);

  const handleDisconnect = () => {
    localStorage.removeItem("token");
    if (userConnected) {
      setUserConnected(false);
      setUserId(null);
      console.info("connecte :", userConnected, ". Id:", userId);
    }
    if (companyConnected) {
      setCompanyConnected(false);
      setCompanyId(null);
      console.info("connecte :", companyConnected, ". Id:", companyId);
    }
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
