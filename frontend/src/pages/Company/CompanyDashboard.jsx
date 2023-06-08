import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import DashboardCard from "../../components/Elements/DashboardCard";
import "./CompanyDashboard.scss";

function CompanyDashboard() {
  return (
    <div className="CompanyDashboard">
      <HeaderBasic />

      <div className="vagueCompany">
        <div className="container-top">
          <div className="pp-import">
            <p className="pp-import-text"> Télécharger une photo PNG ou JPG</p>
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
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Présentation de l’entreprise"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Gestion des offres et candidatures"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Créer une offre d’emploi"
          />
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
