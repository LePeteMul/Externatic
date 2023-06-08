import React from "react";
// import HeaderWave from "../../components/Header/HeaderWave";
import HeaderBasic from "../../components/Header/HeaderBasic";
import DashboardCard from "../../components/Elements/DashboardCard";

function AdminDashboard() {
  return (
    <div className="AdminDashboard">
      <HeaderBasic />

      <div className="boxWithoutHeader">
        <div className="pp-import">
          <p className="pp-import-text"> Télécharger une photo PNG ou JPG</p>
          {/* <img src="" alt="pp-import-logo" /> */}
        </div>
        <h1 className="titleHeader">Interface Administrateur</h1>

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
