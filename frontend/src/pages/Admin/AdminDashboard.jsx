import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
import DashboardCard from "../../components/Elements/DashboardCard";
import HeaderWaveInverted from "../../components/Header/HeaderWaveInverted";

function AdminDashboard() {
  const { userId } = useContext(UserConnexionContext);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setAdmin(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="AdminDashboard">
      <HeaderWaveInverted title={`Bienvenue ${admin.firstname}`} />

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
