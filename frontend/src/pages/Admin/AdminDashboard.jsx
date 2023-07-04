import React from "react";
import { NavLink } from "react-router-dom";
import DashboardCard from "../../components/Elements/DashboardCard";
import HeaderWaveInverted from "../../components/Header/HeaderWaveInverted";

function AdminDashboard() {
  return (
    <div className="AdminDashboard">
      <HeaderWaveInverted title="Bienvenue" />

      <div className="boxWithoutHeader">
        <div className="boxInside">
          <NavLink to="/admin/profile">
            <DashboardCard description="" title="Mon profil" />
          </NavLink>
          <NavLink to="/admin/companycreation">
            <DashboardCard description="" title="Créer une entreprise" />
          </NavLink>
          <NavLink to="/admin/companylist">
            <DashboardCard description="" title="Gestion des entreprises" />
          </NavLink>
          <NavLink to="/admin/offerlist">
            <DashboardCard description="" title="Gestion des offres d'emploi" />
          </NavLink>
          <NavLink to="/admin/candidatelist">
            <DashboardCard description="" title="Gestion des utilisateurs" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
