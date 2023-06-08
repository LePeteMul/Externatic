import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import DashboardCard from "../../components/Elements/DashboardCard";
import "./AdminDashboard.scss";

function AdminDashboard() {
  return (
    <div className="AdminDashboard">
      <HeaderBasic />

      <div className="vague">
        <div className="container-top">
          <div className="pp-import">
            <p className="pp-import-text"> Télécharger une photo PNG ou JPG</p>
            {/* <img src="" alt="pp-import-logo" /> */}
          </div>
          <h1 className="titleHeader">Interface administrateur</h1>
        </div>

        <br />
      </div>

      <div className="boxWithoutHeader">
        <DashboardCard
          description="Cliquer ici pour voir votre profil"
          title="Mon profil"
        />
        <br />

        <div className="boxInside">
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Créer une entreprise"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Gestion des entreprises"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Gestion des offres d'emploi"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Gestion des utilisateurs"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
