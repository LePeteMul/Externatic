import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderWave from "../../components/Header/HeaderWave";
import BlackButton from "../../components/Elements/BlackButton";
import Handshake from "../../assets/images/HomePage/handshake.png";
import logoAcc from "../../assets/images/HomePage/logo-acc.jpg";
import logoAllovoisins from "../../assets/images/HomePage/logo-allovoisins.png";
import logoKlaxoon from "../../assets/images/HomePage/logo-klaxoon.jpg";
import logoMaincare from "../../assets/images/HomePage/logo-maincare.jpg";
import logoU from "../../assets/images/HomePage/logo-u.png";

function HomePage() {
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    navigate("/candidate/registration");
  };

  const handleJobSearchClick = () => {
    navigate("/jobsearch");
  };

  return (
    <div className="HomePage">
      <HeaderWave />

      <section className="boxWithoutHeader">
        <div className="descriptionText">
          Décuplez votre potentiel professionnel dans le domaine de
          l'informatique avec EXTERNATIC : où expertise humaine et technologie
          se rencontrent pour vous offrir des opportunités uniques.
        </div>

        <BlackButton
          buttonName="Trouver mon futur emploi"
          buttonFunction={handleJobSearchClick}
        />

        <div className="handshakeContainer">
          <img className="handshake" src={Handshake} alt="handshake" />
        </div>

        <div className="descriptionText">
          Afin de bénéficier d'une expérience personnalisée et candidater aux
          offres d'emploi, inscrivez-vous. Vous découvrirez pourquoi des
          milliers de professionnels de l'informatique font confiance à notre
          plateforme pour trouver leur emploi idéal.
        </div>

        <BlackButton
          buttonName="M'inscrire"
          buttonFunction={handleRegistrationClick}
        />

        <div className="trust">Ils nous font confiance :</div>

        <div className="trustingCompanies">
          <img className="logo" src={logoAcc} alt="acc" />
          <img className="logo" src={logoAllovoisins} alt="allovoisins" />
          <img className="logo" src={logoKlaxoon} alt="Klaxoon" />
          <img className="logo" src={logoMaincare} alt="Maincare" />
          <img className="logo" src={logoU} alt="Système U" />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
