import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
import CompanyConnexionContext from "../../contexts/CompanyConnexionContext/CompanyConnexionContext";
import burger from "../../assets/icons/burgerMenu.png";

function BurgerMenuBasic() {
  const navigate = useNavigate();

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

  const { setUserConnected, setUserId, userConnected } =
    useContext(UserConnexionContext);
  const { setCompanyConnected, setCompanyId, companyConnected } = useContext(
    CompanyConnexionContext
  );

  const handleDisconnect = () => {
    localStorage.removeItem("token");
    if (userConnected) {
      setUserConnected(false);
      setUserId(null);
      navigate("/");
    }
    if (companyConnected) {
      setCompanyConnected(false);
      setCompanyId(null);
      navigate("/");
    }
  };

  return (
    <div className="BurgerMenuBasic">
      <button className="BurgerContainer" type="button" onClick={handleClick}>
        <img className="IconBurger" src={burger} alt="Le Burger" />
      </button>
      <ul className={open ? "menuOpened" : "menuClosed"}>
        {!(userConnected || companyConnected) && (
          <>
            <Link to="/login" onClick={handleClick}>
              <li className="menuItem">Se connecter</li>
            </Link>
            <Link to="/logincompany" onClick={handleClick}>
              <li className="menuItem">Se connecter en tant qu'entreprise</li>
            </Link>
          </>
        )}
        <Link to="/contact" onClick={handleClick}>
          <li className="menuItem">Contact</li>
        </Link>
        <Link to="/legalinformations" onClick={handleClick}>
          <li className="menuItem">Mentions légales</li>
        </Link>
        <div
          onClick={handleDisconnect}
          onKeyDown={handleDisconnect}
          role="button"
          tabIndex={0}
        >
          <li className="menuItem">Se déconnecter</li>
        </div>
      </ul>
    </div>
  );
}

export default BurgerMenuBasic;
