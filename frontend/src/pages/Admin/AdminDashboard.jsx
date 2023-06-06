import React from "react";
import HeaderWave from "../../components/Header/HeaderWave";
import DashboardCard from "../../components/Elements/DashboardCard";

function AdminDashboard() {
  return (
    <div className="HomePage">
      <HeaderWave />
      <div className="boxWithoutHeader">
        <DashboardCard
          description="Cliquer ici pour voir votre profil"
          title="Mon profil"
        />
        <br />
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
        {/* <CandidateCard
        profilePicture="https://cdn.discordapp.com/attachments/1115020679276920872/1115235734031454208/design.png"
        lastname="bonjour"
        firstname="laforme"
        email="bonjourlaforme@gmail.com"
      /> */}
      </div>
    </div>
  );
}

export default AdminDashboard;
