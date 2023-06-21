import React from "react";
import DashboardCard from "../../components/Elements/DashboardCard";
import HeaderWaveInverted from "../../components/Header/HeaderWaveInverted";

function CandidateDashboard() {
  return (
    <div className="CandidateDashboard test">
      <HeaderWaveInverted title="Bonjour Damien" />

      <div className="boxWithoutHeader">
        <div className="boxInside">
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Mon profil"
            link="/candidate/profile"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Favoris"
            link="/candidate/favorite"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Ma recherche"
            link="/results"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Mes candidatures"
            link="/candidate/job-application"
          />
        </div>
      </div>
    </div>
  );
}

export default CandidateDashboard;
