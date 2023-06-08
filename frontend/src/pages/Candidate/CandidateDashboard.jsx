import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import DashboardCard from "../../components/Elements/DashboardCard";
// import "./CandidateDashboard.scss";

function CandidateDashboard() {
  return (
    <div className="CandidateDashboard">
      <HeaderBasic />

      <div className="vagueCompany">
        <div className="container-top">
          <div className="pp-import">
            <p className="pp-import-text"> Télécharger une photo PNG ou JPG</p>
            {/* <img src="" alt="pp-import-logo" /> */}
          </div>
          <h1 className="titleHeader">Bonjour #name</h1>
        </div>
      </div>

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
            link="/candidate/job-application"
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
