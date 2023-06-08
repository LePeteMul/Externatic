import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import DashboardCard from "../../components/Elements/DashboardCard";

function CandidateDashboard() {
  return (
    <div className="CandidateDashboard">
      <HeaderBasic />

      <div className="boxWithoutHeader">
        <div className="pp-import">
          <p className="pp-import-text"> Télécharger une photo PNG ou JPG</p>
          {/* <img src="" alt="pp-import-logo" /> */}
        </div>
        <h1 className="titleHeader">Bonjour, "pseudo"</h1>
        <br />

        <div className="boxInside">
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Mon profil"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Favoris"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Ma recherche"
          />
          <DashboardCard
            description="Cliquer ici pour voir votre profil"
            title="Mes candidatures"
          />
        </div>
      </div>
    </div>
  );
}

export default CandidateDashboard;
