import React from "react";
import { NavLink } from "react-router-dom";
import DashboardCard from "../../components/Elements/DashboardCard";
import HeaderWaveInverted from "../../components/Header/HeaderWaveInverted";

function CompanyDashboard() {
  return (
    <div className="CompanyDashboard">
      <HeaderWaveInverted title="Bienvenue" />

      <div className="boxWithoutHeader">
        <div className="boxInside">
          <NavLink to="/company/profile">
            <DashboardCard description="" title="Mon profil employeur" />
          </NavLink>
          <NavLink to="/company/presentation">
            <DashboardCard
              description=""
              title="Présentation de l’entreprise"
            />
          </NavLink>
          <NavLink to="/company/offers">
            <DashboardCard
              description=""
              title="Gestion des offres et candidatures"
            />
          </NavLink>
          <NavLink to="/company/offercreation">
            <DashboardCard description="" title="Créer une offre d’emploi" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
