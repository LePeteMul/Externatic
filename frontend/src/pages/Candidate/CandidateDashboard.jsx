import React from "react";
import { NavLink } from "react-router-dom";
import DashboardCard from "../../components/Elements/DashboardCard";
import HeaderWaveInverted from "../../components/Header/HeaderWaveInverted";

function CandidateDashboard() {
  return (
    <div className="CandidateDashboard test">
      <HeaderWaveInverted title="Bonjour Damien" />

      <div className="boxWithoutHeader">
        <div className="boxInside">
          <NavLink to="/candidate/profile">
            <DashboardCard description="" title="Mon profil" />
          </NavLink>
          <NavLink to="/candidate/favorite">
            <DashboardCard description="" title="Favoris" />
          </NavLink>
          <NavLink to="/results">
            <DashboardCard description="" title="Ma recherche" />
          </NavLink>
          <NavLink to="/candidate/job-application">
            <DashboardCard description="" title="Mes candidatures" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CandidateDashboard;
