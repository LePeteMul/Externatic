import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import DashboardCard from "../../components/Elements/DashboardCard";
import InputImage from "../../components/Elements/InputImage";
import "./CompanyDashboard.scss";

function CompanyDashboard() {
  return (
    <div className="CompanyDashboard">
      <HeaderBasic />

      <div className="vagueCompany">
        <div className="container-top">
          <div className="pp-import">
            {/* <p className="pp-import-text"> Télécharger une photo PNG ou JPG</p> */}
            <InputImage />
            {/* <img src="" alt="pp-import-logo" /> */}
          </div>
          <h1 className="titleHeader">Mon profil Employeur</h1>
        </div>

        <br />
      </div>

      <div className="boxWithoutHeader">
        <div className="boxInside">
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Mon profil employeur"
            link="/company/presentation"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Présentation de l’entreprise"
            link="/company/presentation"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Gestion des offres et candidatures"
            link="/company/profilecandidate"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Créer une offre d’emploi"
            link="/company/offercreation"
          />
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
