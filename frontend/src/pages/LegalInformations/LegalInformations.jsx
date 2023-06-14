import React from "react";
import HeaderWave from "../../components/Header/HeaderWave";

function LegalInformations() {
  return (
    <div className="legalInformations">
      <HeaderWave />
      <div className="boxWithoutHeader">
        <div className="legalInformationsTitle">
          <h1>Mentions légales</h1>
        </div>
        <div className="legalInformationsdetails">
          <p> Cette application est la propriété de :</p>
          <br />
          <p> EXTERNATIC</p>
          <br />
          <p>1 Rue Racine 44000 NANTES</p>
          <br />
          <p>SIREN : 800 426 629</p> <br />
          <p>Responsable de la rédaction :</p>
          <p> Franck Gascard</p> <br />
          <p>Conception et réalisation de l'application :</p>
          <p>3CKP</p>
          <p>4 rue Baron</p>
          <p>44000 Nantes </p> <br />
          <p>Hébergement :</p>
          <p>OVH SAS</p>
          <p>2 rue Kellermann</p>
          <p>59100 Roubaix – France</p>
        </div>
        <div className="legalInformationsEnd">
          <p />
        </div>
      </div>
    </div>
  );
}

export default LegalInformations;
