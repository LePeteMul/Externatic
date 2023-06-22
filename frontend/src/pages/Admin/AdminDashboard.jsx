import React from "react";
import DashboardCard from "../../components/Elements/DashboardCard";
import HeaderWaveInverted from "../../components/Header/HeaderWaveInverted";

function AdminDashboard() {
  return (
    <div className="AdminDashboard">
      <HeaderWaveInverted title="Bienvenue" />

      <div className="boxWithoutHeader">
        <div>
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Mon profil"
            link="/admin/profile"
          />
          <br />
        </div>

        <div className="boxInside">
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Créer une entreprise"
            link="/admin/companycreation"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Gestion des entreprises"
            link="/admin/companylist"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Gestion des offres d'emploi"
            link="/admin/offerlist"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Gestion des utilisateurs"
            link="/admin/candidatelist"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
