import React, { useState } from "react";
import "./BurgerMenu.scss";
import burger from "../../assets/icons/burgerMenu.png";
import NavBar from "../NavBar/NavBar";



function BurgerMenu({open, setOpen, handleOpen}) {



 return (

    <div className="BurgerMenu">
      <img  onClick={handleOpen}  className="IconBurger" src={burger} alt="Le Burger" />
      {open && <NavBar />}
    </div>
  

  );
}

export default BurgerMenu;
