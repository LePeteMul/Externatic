import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import DashboardCard from "../../components/Elements/DashboardCard";
import HeaderWaveInverted from "../../components/Header/HeaderWaveInverted";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";

function CandidateDashboard() {
  const { userId } = useContext(UserConnexionContext);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);
  console.warn("user = ", user);

  return (
    <div className="CandidateDashboard test">
      <HeaderWaveInverted title={`Bienvenue, ${user.firstname}`} />

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
