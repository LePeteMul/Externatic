import React from "react";
import DashboardCard from "../../components/Elements/DashboardCard";
import HeaderWaveInverted from "../../components/Header/HeaderWaveInverted";

function CompanyDashboard() {
  return (
    <div className="CompanyDashboard">
      <HeaderWaveInverted title="Bonjour Joe" />

      <div className="boxWithoutHeader">
        <div className="boxInside">
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Mon profil employeur"
            link="/company/profile"
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
