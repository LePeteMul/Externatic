import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardCard from "../../components/Elements/DashboardCard";
import HeaderWaveInverted from "../../components/Header/HeaderWaveInverted";
import CompanyConnexionContext from "../../contexts/CompanyConnexionContext/CompanyConnexionContext";

function CompanyDashboard() {
  const { companyId } = useContext(CompanyConnexionContext);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/company/${companyId}`)
      .then((response) => response.json())
      .then((data) => setCompany(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="CompanyDashboard">
      <HeaderWaveInverted title={`Bienvenue, ${company.company_name}`} />
      {/* <HeaderWaveInverted title="Bienvenue, placeholder" /> */}
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
